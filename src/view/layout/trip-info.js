import {createElement} from '../../utils';

export default class TripInfo {
  constructor(tripInfo) {
    this._tripInfo = tripInfo;
    this._element = null;
  }

  getTemplate({route, price, startDate, endDate}) {
    return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${route.join(` &mdash; `)}</h1>

              <p class="trip-info__dates">${startDate.format(`MMM DD`)} &nbsp;&mdash;&nbsp; ${endDate.format(`MMM DD`)}</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
            </p>
          </section>`;
  }

  getElement() {
    if (!this._element) {
      const {route, price, startDate, endDate} = this._tripInfo;
      this._element = createElement(this.getTemplate({route, price, startDate, endDate}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
