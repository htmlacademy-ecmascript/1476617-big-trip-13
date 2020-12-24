export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, position, ...elements) => {
  if (position === RenderPosition.AFTERBEGIN) {
    container.prepend(...elements);
  } else if (position === RenderPosition.BEFOREEND) {
    container.append(...elements);
  }
};

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div.firstChild;
};
