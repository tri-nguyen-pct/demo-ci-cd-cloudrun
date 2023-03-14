import { v4 } from 'uuid';

export const genUUID = (): string => {
  return v4();
};
