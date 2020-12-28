import AbstractComponent from '../view/abstract-component';

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, position, ...children) => {
  const containerElement = container = container instanceof AbstractComponent ? container.getElement() : container;
  const childrenElements = children.map((child) => child instanceof AbstractComponent ? child.getElement() : child);

  if (position === RenderPosition.AFTERBEGIN) {
    containerElement.prepend(...childrenElements);
  } else if (position === RenderPosition.BEFOREEND) {
    containerElement.append(...childrenElements);
  }
};

export const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div.firstChild;
};
