import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';

export type WithEmotionCss<T> = T & {
  css?: Interpolation<Theme>;
};
