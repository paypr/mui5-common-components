import Tab, { TabProps } from '@mui/material/Tab';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface TopNavItemProps extends Omit<LinkTabProps, 'label' | 'path'> {
  title: string;
}

const TopNavItem = ({ title, value, ...props }: TopNavItemProps) => (
  <LinkTab {...props} label={title} path={value} value={value} />
);
export default TopNavItem;

interface LinkTabProps extends Omit<TabProps<'a'>, 'href' | 'onClick'> {
  path: string;
}

function LinkTab({ path, ...props }: LinkTabProps) {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    navigate(path);
  };

  return <Tab component="a" {...props} href={path} onClick={handleClick} />;
}
