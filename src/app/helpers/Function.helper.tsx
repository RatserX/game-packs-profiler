const isObjectEmpty = (o: any): boolean =>
  Object.getOwnPropertyNames(o).length === 0;

const isObjectNull = (o: any): boolean => o == null;

const isObjectNullOrEmpty = (o: any) => isObjectEmpty(o) || isObjectNull(o);

const timestampDateToDate = (
  date: Date,
  locales = "en-US",
  options: Intl.DateTimeFormatOptions = {}
) => {
  const dateTimeFormat = Intl.DateTimeFormat(locales, options);

  return dateTimeFormat.format(date);
};

const timestampValueToDate = (
  value: number,
  locales = "en-US",
  options: Intl.DateTimeFormatOptions = {}
) => {
  const date = new Date(value * 1000);

  return timestampDateToDate(date, locales, options);
};

export {
  isObjectEmpty,
  isObjectNull,
  isObjectNullOrEmpty,
  timestampDateToDate,
  timestampValueToDate
};
