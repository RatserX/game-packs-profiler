const isObjectEmpty = (o: unknown): boolean =>
  Object.getOwnPropertyNames(o).length === 0;

const isObjectNull = (o: unknown): boolean => o === undefined;

const isObjectNullOrEmpty = (o: unknown): boolean =>
  isObjectNull(o) || isObjectEmpty(o);

const isStringEmpty = (s: string): boolean => s.length === 0;

const isStringNull = (s: string | undefined): boolean => s === undefined;

const isStringNullOrEmpty = (s: string | undefined): boolean =>
  isStringNull(s) || isStringEmpty(s as string);

const timestampDateToDate = (
  date: Date,
  locales = "en-US",
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateTimeFormat = Intl.DateTimeFormat(locales, options);

  return dateTimeFormat.format(date);
};

const timestampValueToDate = (
  value: number,
  locales = "en-US",
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const date = new Date(value * 1000);

  return timestampDateToDate(date, locales, options);
};

export {
  isObjectEmpty,
  isObjectNull,
  isObjectNullOrEmpty,
  isStringEmpty,
  isStringNull,
  isStringNullOrEmpty,
  timestampDateToDate,
  timestampValueToDate,
};
