import AbstractComponent from '../abstract-component';

export default class TripInfo extends AbstractComponent {
  constructor(tripInfo) {
    super();
    this._tripInfo = tripInfo;
  }

  getTemplate() {
    const {route, price, startDate, endDate} = this._tripInfo;
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
}
