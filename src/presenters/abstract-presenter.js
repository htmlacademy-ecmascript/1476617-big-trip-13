export default class AbstractPresenter {
  constructor({container}) {
    if (new.target instanceof AbstractPresenter) {
      throw new Error(`class AbstractPresenter cannot be instantiated and can only be extended`);
    }
    this._container = container;
    this._view = null;
  }

  init() {
    throw new Error(`init method not implemented`);
  }
}
