import {createElement} from '../../utils';

export default class TripEventDestinationGroup {
  constructor(destinationGroup) {
    this._destinationGroup = destinationGroup;
    this._element = null;
  }

  getTemplate({type, destination}) {
    return `<div class="event__field-group  event__field-group--destination">
             <label class="event__label  event__type-output" for="event-destination-1">
               ${type}
             </label>
             <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
             <datalist id="destination-list-1">
               <option value="Amsterdam"></option>
               <option value="Geneva"></option>
               <option value="Chamonix"></option>
             </datalist>
           </div>`;
  }

  getElement() {
    if (!this._element) {
      const {type, destination} = this._destinationGroup;
      this._element = createElement(this.getTemplate({type, destination}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
