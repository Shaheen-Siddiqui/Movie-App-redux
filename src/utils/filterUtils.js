export const findUniqueGenre = (array, property) => {
  const flattenedArray = array.reduce(
    (acc, item) => [...acc, ...item[property]],
    []
  );
  return [...new Set(flattenedArray)];
};

export const findUniqueYear = (array) => {
   return [...new Set(array.map(val=>val.year))]
};

