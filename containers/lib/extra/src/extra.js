import { AsciiString } from 'common/common-const';

export const ExtraAscii = (str) =>
  AsciiString(str).then((pStr) => `EXTRA: ${pStr}`);
