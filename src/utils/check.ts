import { ArgumentError } from './errors';

export const requireNotNull = <T>(data: T | null | undefined, errorMessage: string | { toString(): string }): T => {
  if (!data) {
    throw new ArgumentError(errorMessage.toString());
  }

  return data;
};

export const checkNotNull = <T>(
  data: T | null | undefined,
  errorMessage: string | { toString(): string },
): asserts data is T => {
  if (!data) {
    throw new ArgumentError(errorMessage.toString());
  }
};
