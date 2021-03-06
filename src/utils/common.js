export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export const replaceItemInArray = (array, oldItem, newItem) => {
  const oldItemIndex = array.indexOf(oldItem);
  array[oldItemIndex] = newItem;
};
