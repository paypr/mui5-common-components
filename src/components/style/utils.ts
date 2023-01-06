import { css } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MouseEventHandler } from 'react';

export const changePointerWhenClickableStyle = (onClick?: MouseEventHandler<any>) => {
  if (onClick) {
    return css`
      cursor: pointer;
    `;
  }
  return css``;
};

export const hoverWhenClickableStyle = (color: string, onClick?: MouseEventHandler<any>) => {
  if (onClick) {
    return css`
      &:hover {
        background-color: ${color};
      }
    `;
  }
  return css``;
};

export const useDarkMode = (): boolean => {
  const browserPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkModePreference = getUserDarkModePreference();
  switch (darkModePreference) {
    case DarkModePreference.DARK:
      return true;

    case DarkModePreference.LIGHT:
      return false;

    default:
      return browserPrefersDarkMode;
  }
};

export enum DarkModePreference {
  BROWSER = 'browser',
  DARK = 'dark',
  LIGHT = 'light',
}

export const getUserDarkModePreference = (): DarkModePreference => {
  const result = window.localStorage.getItem('dark-mode-preference');
  switch (result) {
    case DarkModePreference.DARK:
      return DarkModePreference.DARK;

    case DarkModePreference.LIGHT:
      return DarkModePreference.LIGHT;

    default:
      return DarkModePreference.BROWSER;
  }
};

export const setUserDarkModePreference = (preference: DarkModePreference) => {
  window.localStorage.setItem('dark-mode-preference', preference);
};
