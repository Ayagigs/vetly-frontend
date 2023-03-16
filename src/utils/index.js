export const isObjectValuesEmpty = (obj) => {
  return Object.values(obj).every((value) => !Boolean(value));
};
