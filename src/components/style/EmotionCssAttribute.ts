import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize/dist/emotion-serialize.cjs';

export type WithEmotionCss<T> = T & {
  css?: Interpolation<Theme>;
};
