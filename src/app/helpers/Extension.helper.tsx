const isObjectEmpty = (o: any): boolean =>
  Object.getOwnPropertyNames(o).length === 0;

const isObjectNull = (o: any): boolean => o == null;

const isObjectNullOrEmpty = (o: any) => isObjectEmpty(o) || isObjectNull(o);

export { isObjectEmpty, isObjectNull, isObjectNullOrEmpty };
