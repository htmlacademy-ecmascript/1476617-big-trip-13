import AbstractComponent from '../views/abstract-component';

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

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof AbstractComponent) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof AbstractComponent) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`One of the components objects does not have an existing element propepty in it`);
  }

  parent.replaceChild(newChild, oldChild);
};

export const remove = (component) => {
  if (!(component instanceof AbstractComponent)) {
    throw new Error(`Can only remove components`);
  }

  component.getElement().remove();
  component.removeElement();
};
