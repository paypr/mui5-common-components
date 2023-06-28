import { css } from '@emotion/react';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import { useTheme } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import NavIcon from './NavIcon';
import NavItemText from './NavItemText';

type StyledListItemButtonProps = ListItemButtonProps<'a'> & {
  child?: boolean;
};

const StyledListItem = ({ child, onClick, href, selected, ...props }: StyledListItemButtonProps) => {
  const theme = useTheme();

  return (
    <ListItemButton
      {...props}
      component="a"
      onClick={onClick}
      href={href}
      selected={selected}
      autoFocus={selected}
      css={css`
        ${onClick || href
          ? css`
              cursor: pointer;
            `
          : ''}

        ${selected
          ? css`
              border-right: 3px solid ${theme.palette.primary.main};
            `
          : ''}

        ${child
          ? css`
              && {
                padding-left: ${theme.spacing(3)};
              }
            `
          : ''}
      `}
    />
  );
};

export type NavPath = string | NavPathMatch;

interface NavPathMatch {
  path: string;
  exact?: boolean;
}

export interface NavItemProps {
  title: string;
  icon: React.ComponentType<SvgIconProps>;
  path: string;
  notPath?: string;
  hideInactive?: boolean;
  hideNotPaths?: string[];
  disabled?: boolean;
  hidden?: boolean;
  child?: boolean;
}

const NavItem = ({ title, icon, path, notPath, hideInactive, hideNotPaths, hidden, disabled, child }: NavItemProps) => {
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();

  const match = matchPath(path, currentPath);
  const notMatch = notPath ? matchPath(notPath, currentPath) : false;

  const computeHideNotMatch = (hideNotPaths: NavPath[]) =>
    hideNotPaths.reduce((prev: boolean, curr: string) => {
      if (prev) {
        return true;
      }

      return Boolean(matchPath(curr, currentPath));
    }, false);

  const hideNotMatch = hideNotPaths ? !computeHideNotMatch(hideNotPaths) : false;

  const goToPath = (event: React.MouseEvent) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    console.debug('goToPath', path);

    event.preventDefault();
    event.stopPropagation();
    navigate(path);
  };

  if (hidden) {
    return null;
  }

  const doesMatch = match && !notMatch;

  if (!doesMatch && hideInactive) {
    return null;
  }

  if (hideNotMatch) {
    return null;
  }

  return (
    <StyledListItem
      child={child}
      selected={Boolean(doesMatch)}
      disabled={disabled}
      onClick={!match && !disabled ? goToPath : undefined}
      href={!match && !disabled ? path : '#'}
    >
      <NavIcon icon={icon} title={title} child={child} selected={Boolean(match)} />
      <NavItemText title={title} child={child} />
    </StyledListItem>
  );
};
export default NavItem;
