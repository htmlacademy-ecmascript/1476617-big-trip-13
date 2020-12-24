/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: TRIP_EVENT_TYPES, DESTINATIONS, DESCRIPTIONS, OFFER_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIP_EVENT_TYPES", function() { return TRIP_EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTINATIONS", function() { return DESTINATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS", function() { return DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFER_TYPES", function() { return OFFER_TYPES; });
const TRIP_EVENT_TYPES = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const DESTINATIONS = [
  `Moscow`,
  `Saint Petersburg`,
  `Oslo`,
  `Reykjavic`,
  `Helsinki`,
  `Berlin`,
  `Riga`,
  `Krakow`,
  `Tallin`,
  `London`,
  `Dublin`,
  `Llanfairpwllgwyngyll`,
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.In rutrum ac purus sit amet tempus.`
];

const OFFER_TYPES = {
  taxi: `Order Uber`,
  luggage: `Add luggage`,
  comfort: `Switch to comfort`,
  car: `Rent a car`,
  breakfast: `Add breakfast`,
  tickets: `Book tickets`,
  lunch: `Lunch in city`,
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mock_generate_trip_event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/generate-trip-event-item */ "./src/mock/generate-trip-event-item.js");
/* harmony import */ var _view_layout_trip_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/layout/trip-info */ "./src/view/layout/trip-info.js");
/* harmony import */ var _view_layout_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/layout/menu */ "./src/view/layout/menu.js");
/* harmony import */ var _view_layout_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/layout/filters */ "./src/view/layout/filters.js");
/* harmony import */ var _view_layout_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/layout/sort */ "./src/view/layout/sort.js");
/* harmony import */ var _view_layout_events_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/layout/events-list */ "./src/view/layout/events-list.js");












const MIN_EVENTS_AMOUNT = 15;
const MAX_EVENTS_AMOUNT = 20;

const generateTripEvents = () => {
  const eventsAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_EVENTS_AMOUNT, MAX_EVENTS_AMOUNT);
  const tripEvents = new Array(eventsAmount).fill().map(_mock_generate_trip_event_item__WEBPACK_IMPORTED_MODULE_1__["generateTripEventItem"]);
  tripEvents.sort((event1, event2) => event1.startDate - event2.startDate);
  return tripEvents;
};

const getTripRoute = (tripEvents) => {
  const tripEventsDestinations = tripEvents.map((tripEvent) => tripEvent.destination);
  return [...new Set(tripEventsDestinations)];
};

const getTripPrice = (tripEvents) => {
  return tripEvents.reduce((sum, tripEvent) => sum + tripEvent.price, 0);
};

const getStartDate = (tripEvents) => {
  return tripEvents[0].startDate;
};

const getEndDate = (tripEvents) => {
  return tripEvents[tripEvents.length - 1].startDate;
};

const clearInnerHTML = (container) => {
  container.innerHTML = ``;
};


const aboutTripContainer = document.querySelector(`.trip-main`);
const menuContainer = aboutTripContainer.querySelector(`.trip-main__trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);

const tripEvents = generateTripEvents();
const tripInfo = {
  route: getTripRoute(tripEvents),
  price: getTripPrice(tripEvents),
  startDate: getStartDate(tripEvents),
  endDate: getEndDate(tripEvents),
};

Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(aboutTripContainer,  _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, new _view_layout_trip_info__WEBPACK_IMPORTED_MODULE_2__["default"](tripInfo).getElement());
clearInnerHTML(menuContainer);
Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(menuContainer, _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, new _view_layout_menu__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(),);
Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(menuContainer,  _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, new _view_layout_filters__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement());
clearInnerHTML(tripEventsContainer);
Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventsContainer, _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, new _view_layout_sort__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), );
Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventsContainer,  _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, new _view_layout_events_list__WEBPACK_IMPORTED_MODULE_6__["default"](tripEvents).getElement());


/***/ }),

/***/ "./src/mock/generate-trip-event-item.js":
/*!**********************************************!*\
  !*** ./src/mock/generate-trip-event-item.js ***!
  \**********************************************/
/*! exports provided: generateTripEventItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripEventItem", function() { return generateTripEventItem; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");





const MIN_EVENT_START_AFTER_NOW = 24;
const MAX_EVENT_START_AFTER_NOW = 3600;
const MIN_EVENT_DURATION = 30;
const MAX_EVENT_DURATION = 720;
const EVENT_DURATION_STEP = 15;
const MIN_EVENT_PRICE = 10;
const MAX_EVENT_PRICE = 1000;
const MIN_DESCRIPTION_SENTENCE_AMOUNT = 1;
const MAX_DESCRIPTION_SENTENCE_AMOUNT = 5;
const MIN_OFFER_AMOUNT = 0;
const MAX_OFFERS_AMOUNT = 5;
const MIN_PHOTOS_AMOUNT = 1;
const MAX_PHOTOS_AMOUNT = 7;
const MIN_OFFER_PRICE = 10;
const MAX_OFFER_PRICE = 100;
const PRICE_STEP = 10;

const RANDOM_PHOTO_BASE_URL = `http://picsum.photos/248/152?r=`;
const RANDOM_PHOTO_MIN_INTEGER = 1;
const RANDOM_PHOTO_MAX_INTEGER = 1000000;

const minutesNow = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().minute();

const getRandomPrice = (minPrice, maxPrice) => {
  return Math.round(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(minPrice, maxPrice) / PRICE_STEP) * PRICE_STEP;
};

const generateOffer = () => {
  const type = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["TRIP_EVENT_TYPES"]);
  const [name, title] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(Object.entries(_const__WEBPACK_IMPORTED_MODULE_2__["OFFER_TYPES"]));
  const price = getRandomPrice(MIN_OFFER_PRICE, MAX_OFFER_PRICE);
  const isSelected = Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));

  return {
    type,
    name,
    title,
    price,
    isSelected,
  };
};

const generateOffers = () => {
  const offersAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_OFFER_AMOUNT, MAX_OFFERS_AMOUNT);
  return (new Array(offersAmount)
    .fill()
    .map(generateOffer))
    .filter((offer, i, offers) => !offers.slice(i + 1).find((anotherOffer) => offer.title === anotherOffer.title));
};

const generateDescription = () => {
  const sentenceAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_DESCRIPTION_SENTENCE_AMOUNT, MAX_DESCRIPTION_SENTENCE_AMOUNT);
  return new Array(sentenceAmount).fill().map(() => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["DESCRIPTIONS"])).join(` `);
};

const getRandomPhotos = () => {
  const photosAmout = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_PHOTOS_AMOUNT, MAX_PHOTOS_AMOUNT);
  return new Array(photosAmout).fill().map(() => `${RANDOM_PHOTO_BASE_URL}${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(RANDOM_PHOTO_MIN_INTEGER, RANDOM_PHOTO_MAX_INTEGER)}`);
};

const getRandomDuration = () => {
  return Math.round(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_EVENT_DURATION, MAX_EVENT_DURATION) / EVENT_DURATION_STEP) * EVENT_DURATION_STEP;
};

const getIsFavourite = () => {
  return Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));
};

const getRandomDates = () => {
  const timeAfterNow = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_EVENT_START_AFTER_NOW, MAX_EVENT_START_AFTER_NOW);
  const eventDuration = getRandomDuration();

  // subtracting minutesNow basically rounds minutes to either 0 or 5 depending on event duration
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(timeAfterNow, `hours`).subtract(minutesNow, `minutes`);
  const endDate = startDate.add(eventDuration, `minute`);
  return {
    startDate,
    endDate,
  };
};

const generateTripEventItem = () => {
  const type = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["TRIP_EVENT_TYPES"]);
  const destination = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["DESTINATIONS"]);
  const price = getRandomPrice(MIN_EVENT_PRICE, MAX_EVENT_PRICE);
  const description = generateDescription();
  const photos = getRandomPhotos();
  const {startDate, endDate} = getRandomDates();
  const offers = generateOffers();
  const isFavourite = getIsFavourite();

  return {
    type,
    destination,
    price,
    description,
    photos,
    startDate,
    endDate,
    offers,
    isFavourite
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, render, getRandomInteger, getRandomArrayItem, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, position, ...elements) => {
  if (position === RenderPosition.AFTERBEGIN) {
    container.prepend(...elements);
  } else if (position === RenderPosition.BEFOREEND) {
    container.append(...elements);
  }
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div.firstChild;
};


/***/ }),

/***/ "./src/view/layout/events-list.js":
/*!****************************************!*\
  !*** ./src/view/layout/events-list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _trip_event_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trip-event-form/form */ "./src/view/trip-event-form/form.js");
/* harmony import */ var _trip_event_item_event_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trip-event-item/event-item */ "./src/view/trip-event-item/event-item.js");




class EventsList {
  constructor(tripEvents) {
    this._tripEvents = tripEvents;
    this._element = null;
  }

  getTemplate() {
    return `<ul class="trip-events__list">
           </ul>`;
  }

  getSetItemEditedHandler(index) {
    return () => {
      const oldElement = this._element.children[index];
      const newElement = new _trip_event_form_form__WEBPACK_IMPORTED_MODULE_1__["default"]({tripEvent: this._tripEvents[index], unsetItemEditedHandler: this.getUnsetItemEditedHandler(index)}).getElement();
      this._element.replaceChild(newElement, oldElement);
    };
  }

  getUnsetItemEditedHandler(index) {
    return () => {
      const oldElement = this._element.children[index];
      const newElement = new _trip_event_item_event_item__WEBPACK_IMPORTED_MODULE_2__["default"]({tripEvent: this._tripEvents[index], setItemEditedHandler: this.getSetItemEditedHandler(index)}).getElement();
      this._element.replaceChild(newElement, oldElement);
    };
  }

  getElement() {
    if (!this._element) {
      const tripEvents = this._tripEvents;
      const content = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());

      const tripEventItems = tripEvents.map((tripEvent, index) => {
        return new _trip_event_item_event_item__WEBPACK_IMPORTED_MODULE_2__["default"]({tripEvent, setItemEditedHandler: this.getSetItemEditedHandler(index)}).getElement();
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(content, _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, ...tripEventItems);
      this._element = content;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/layout/filters.js":
/*!************************************!*\
  !*** ./src/view/layout/filters.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class Filters {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<div>
             <h2 class="visually-hidden">Filter events</h2>
             <form class="trip-filters" action="#" method="get">
               <div class="trip-filters__filter">
                 <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                 <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
               </div>

               <div class="trip-filters__filter">
                 <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                 <label class="trip-filters__filter-label" for="filter-future">Future</label>
               </div>

               <div class="trip-filters__filter">
                 <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                 <label class="trip-filters__filter-label" for="filter-past">Past</label>
               </div>

               <button class="visually-hidden" type="submit">Accept filter</button>
             </form>
           </div>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/layout/menu.js":
/*!*********************************!*\
  !*** ./src/view/layout/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class Menu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<div class="trip-main__trip-controls  trip-controls">
             <h2 class="visually-hidden">Switch trip view</h2>
             <nav class="trip-controls__trip-tabs  trip-tabs">
               <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
               <a class="trip-tabs__btn" href="#">Stats</a>
             </nav>
           </div>`;
  }

  getElement() {
    if (!this.element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/layout/sort.js":
/*!*********************************!*\
  !*** ./src/view/layout/sort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
             <div class="trip-sort__item  trip-sort__item--day">
               <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
               <label class="trip-sort__btn" for="sort-day">Day</label>
             </div>

             <div class="trip-sort__item  trip-sort__item--event">
               <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
               <label class="trip-sort__btn" for="sort-event">Event</label>
             </div>

             <div class="trip-sort__item  trip-sort__item--time">
               <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
               <label class="trip-sort__btn" for="sort-time">Time</label>
             </div>

             <div class="trip-sort__item  trip-sort__item--price">
               <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
               <label class="trip-sort__btn" for="sort-price">Price</label>
             </div>

             <div class="trip-sort__item  trip-sort__item--offer">
               <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
               <label class="trip-sort__btn" for="sort-offer">Offers</label>
             </div>
           </form>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/layout/trip-info.js":
/*!**************************************!*\
  !*** ./src/view/layout/trip-info.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfo; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class TripInfo {
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
    if (!this.element) {
      const {route, price, startDate, endDate} = this._tripInfo;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({route, price, startDate, endDate}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/event-destination-group.js":
/*!*************************************************************!*\
  !*** ./src/view/trip-event-form/event-destination-group.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventDestinationGroup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class TripEventDestinationGroup {
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
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({type, destination}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/event-price-field-group.js":
/*!*************************************************************!*\
  !*** ./src/view/trip-event-form/event-price-field-group.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventPriceFieldGroup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class TripEventPriceFieldGroup {
  constructor(price) {
    this._price = price;
    this._element = null;
  }

  getTemplate({price}) {
    return `<div class="event__field-group  event__field-group--price">
             <label class="event__label" for="event-price-1">
               <span class="visually-hidden">Price</span>
               &euro;
             </label>
             <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}"></input>
           </div>`;
  }

  getElement() {
    if (!this._element) {
      const {price} = this._price;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({price}));
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/event-time-group.js":
/*!******************************************************!*\
  !*** ./src/view/trip-event-form/event-time-group.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventTimeGroup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class TripEventTimeGroup {
  constructor(time) {
    this._time = time;
    this._element = null;
  }

  getTemplate({startDate, endDate}) {
    return `<div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-1">From</label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate.format(`DD/MM/YY HH:mm`)}">
                &mdash;
              <label class="visually-hidden" for="event-end-time-1">To</label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate.format(`DD/MM/YY HH:mm`)}"></input>
            </div>`;
  }

  getElement() {
    if (!this._element) {
      const {startDate, endDate} = this._time;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({startDate, endDate}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/event-type-group.js":
/*!******************************************************!*\
  !*** ./src/view/trip-event-form/event-type-group.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventTypeGroup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const */ "./src/const.js");



class TripEventTypeGroup {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate({type}) {
    const lowerCaseSelectedTripEventType = type.toLowerCase();

    return `<div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="${type} icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${_const__WEBPACK_IMPORTED_MODULE_1__["TRIP_EVENT_TYPES"].map((tripEventType) => {
    const lowerCaseTripEventType = tripEventType.toLowerCase();
    const checked = lowerCaseTripEventType === lowerCaseSelectedTripEventType;
    return `    <div class="event__type-item">
                  <input id="event-type-${lowerCaseTripEventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${lowerCaseTripEventType}" ${checked ? `checked` : ``}>
                  <label class="event__type-label  event__type-label--${lowerCaseTripEventType}" for="event-type-${lowerCaseTripEventType}-1">${tripEventType}</label>
                </div>`;
  }).join(``)}

              </fieldset>
            </div>
          </div>`;
  }

  getElement() {
    if (!this._element) {
      const {type} = this._event;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({type}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/form.js":
/*!******************************************!*\
  !*** ./src/view/trip-event-form/form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _event_type_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-type-group */ "./src/view/trip-event-form/event-type-group.js");
/* harmony import */ var _event_destination_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-destination-group */ "./src/view/trip-event-form/event-destination-group.js");
/* harmony import */ var _event_time_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-time-group */ "./src/view/trip-event-form/event-time-group.js");
/* harmony import */ var _event_price_field_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-price-field-group */ "./src/view/trip-event-form/event-price-field-group.js");
/* harmony import */ var _trip_event_details_trip_event_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-event-details/trip-event-details */ "./src/view/trip-event-form/trip-event-details/trip-event-details.js");







class TripEventForm {
  constructor({tripEvent, unsetItemEditedHandler}) {
    this._tripEvent = tripEvent;
    this._element = null;
    this._unsetItemEditedHandler = unsetItemEditedHandler;
  }

  getTemplate() {
    return `<li class="trip-events__item">
             <form class="event event--edit" action="#" method="post">
               <header class="event__header">

                 <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                 <button class="event__reset-btn" type="reset">Cancel</button>

               </header>
             </form>
           </li>`;
  }

  getElement() {
    if (!this._element) {
      const {type, destination, price, description, photos, startDate, endDate, offers} = this._tripEvent;
      const tripEventForm = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());

      const tripEventTypeGroup = new _event_type_group__WEBPACK_IMPORTED_MODULE_1__["default"]({type}).getElement();
      const tripEventsDestinationGroup = new _event_destination_group__WEBPACK_IMPORTED_MODULE_2__["default"]({type, destination}).getElement();
      const tripEventTimeGroup = new _event_time_group__WEBPACK_IMPORTED_MODULE_3__["default"]({startDate, endDate}).getElement();
      const tripEventPriceFieldGroup = new _event_price_field_group__WEBPACK_IMPORTED_MODULE_4__["default"]({price}).getElement();
      const tripEventDetails = new _trip_event_details_trip_event_details__WEBPACK_IMPORTED_MODULE_5__["default"]({description, photos, offers}).getElement();

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventForm.querySelector(`.event__header`), _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, tripEventTypeGroup, tripEventsDestinationGroup, tripEventTimeGroup, tripEventPriceFieldGroup);
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventForm.querySelector(`.event--edit`), _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, tripEventDetails);

      tripEventForm.addEventListener(`submit`, this._unsetItemEditedHandler);
      tripEventForm.addEventListener(`reset`, this._unsetItemEditedHandler);
      this._element = tripEventForm;
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/trip-event-details/offer.js":
/*!**************************************************************!*\
  !*** ./src/view/trip-event-form/trip-event-details/offer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Offer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");


class Offer {
  constructor(offer) {
    this._offer = offer;
    this._element = null;
  }

  getTemplate({name, title, price, isSelected}) {

    return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isSelected ? `checked` : ``}>
    <label class="event__offer-label" for="event-offer-${name}-1">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
    </label>
    </div>`;
  }

  getElement() {
    if (!this._element) {
      const {name, title, price, isSelected} = this._offer;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({name, title, price, isSelected}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-form/trip-event-details/trip-event-details.js":
/*!***************************************************************************!*\
  !*** ./src/view/trip-event-form/trip-event-details/trip-event-details.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventDetails; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer */ "./src/view/trip-event-form/trip-event-details/offer.js");




class TripEventDetails {
  constructor(tripEventDetails) {
    this._tripEventDetails = tripEventDetails;
    this._element = null;
  }

  getTemplate({description, photos}) {
    return `<section class="event__details">
             <section class="event__section  event__section--offers">
               <h3 class="event__section-title  event__section-title--offers">Offers</h3>
             </section>

             <section class="event__section  event__section--destination">
               <h3 class="event__section-title  event__section-title--destination">Destination</h3>
               <p class="event__destination-description">${description}</p>

               <div class="event__photos-container">
                 <div class="event__photos-tape">
                   ${photos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo">`).join(``)}
                 </div>
               </div>
             </section>
           </section>`;
  }

  getElement() {
    if (!this.element) {
      const {description, photos, offers} = this._tripEventDetails;

      const tripEventDetails = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({description, photos}));

      const offersContainer = document.createElement(`div`);
      offersContainer.className = `event__available-offers`;
      offersContainer.append(...offers.map((offer) => new _offer__WEBPACK_IMPORTED_MODULE_1__["default"](offer).getElement()));

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEventDetails.querySelector(`.event__section--offers`), _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, offersContainer);

      this._element = tripEventDetails;
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/add-to-favourites-button.js":
/*!**************************************************************!*\
  !*** ./src/view/trip-event-item/add-to-favourites-button.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToFavouritesButton; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class AddToFavouritesButton {
  constructor(addToFavouritesButton) {
    this._addToFavouritesButton = addToFavouritesButton;
    this._element = null;
  }

  getTemplate({isFavouriteClassName}) {
    return `<button class="event__favorite-btn ${isFavouriteClassName}" type="button">
             <span class="visually-hidden">Add to favorite</span>
             <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
               <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
             </svg>
           </button>`;
  }

  getElement() {
    if (!this._element) {
      const {isFavouriteClassName} = this._addToFavouritesButton;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({isFavouriteClassName}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/edit-event-button.js":
/*!*******************************************************!*\
  !*** ./src/view/trip-event-item/edit-event-button.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditEventButton; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class EditEventButton {
  constructor({setItemEditedHandler}) {
    this._element = null;
    this._setItemEditedHandler = setItemEditedHandler;
  }

  getTemplate() {
    return `<button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
           </button>`;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      this._element.addEventListener(`click`, this._setItemEditedHandler);
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/event-item.js":
/*!************************************************!*\
  !*** ./src/view/trip-event-item/event-item.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventItem; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _offers_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers-list */ "./src/view/trip-event-item/offers-list.js");
/* harmony import */ var _event_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-schedule */ "./src/view/trip-event-item/event-schedule.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price */ "./src/view/trip-event-item/price.js");
/* harmony import */ var _add_to_favourites_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-to-favourites-button */ "./src/view/trip-event-item/add-to-favourites-button.js");
/* harmony import */ var _edit_event_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-event-button */ "./src/view/trip-event-item/edit-event-button.js");








class TripEventItem {
  constructor({tripEvent, setItemEditedHandler}) {
    this._tripEvent = tripEvent;
    this._element = null;
    this._setItemEditedHandler = setItemEditedHandler;
  }

  getTemplate({type, destination, startDateFormatted, lowerCaseType}) {

    return `<li class="trip-events__item">
              <div class="event">

                <time class="event__date" datetime="2019-03-18">${startDateFormatted}</time>

                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${lowerCaseType}.png" alt="${type}icon">
                </div>

                <h3 class="event__title">${type} ${destination}</h3>

              </div>
            </li>`;
  }

  getElement() {
    if (!this._element) {
      const {type, destination, price, startDate, endDate, offers, isFavourite} = this._tripEvent;
      const setItemEditedHandler = this._setItemEditedHandler;

      const isFavouriteClassName = isFavourite ? `event__favorite-btn--active` : ``;
      const startDateFormatted = startDate.format(`MMM D`);
      const lowerCaseType = type.toLowerCase();

      const tripEvent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({type, destination, startDateFormatted, lowerCaseType, isFavouriteClassName}));

      const eventSchedule = new _event_schedule__WEBPACK_IMPORTED_MODULE_2__["default"]({startDate, endDate}).getElement();
      const eventPrice = new _price__WEBPACK_IMPORTED_MODULE_3__["default"]({price}).getElement();
      const offersHeading = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(`<h4 class="visually-hidden">Offers:</h4>`);
      const offersList = new _offers_list__WEBPACK_IMPORTED_MODULE_1__["default"]({offers}).getElement();
      const addToFavouritesButton = new _add_to_favourites_button__WEBPACK_IMPORTED_MODULE_4__["default"]({isFavouriteClassName}).getElement();
      const editEventButton = new _edit_event_button__WEBPACK_IMPORTED_MODULE_5__["default"]({setItemEditedHandler}).getElement();

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["render"])(tripEvent.querySelector(`.event`), _utils__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, eventSchedule, eventPrice, offersHeading, offersList, addToFavouritesButton, editEventButton);

      this._element = tripEvent;
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/event-schedule.js":
/*!****************************************************!*\
  !*** ./src/view/trip-event-item/event-schedule.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSchedule; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


const getTimeDifference = (minutes) => {
  return `${Math.floor(minutes / 60)}H ${minutes % 60}M`;
};

class EventSchedule {
  constructor(eventDates) {
    this._element = null;
    this._eventDates = eventDates;
  }

  getTemplate({startDate, endDate}) {
    return `<div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${startDate.toDate()}">${startDate.format(`HH:mm`)}</time>
                &mdash;
                <time class="event__end-time" datetime="${endDate.toDate()}">${endDate.format(`HH:mm`)}</time>
              </p>
              <p class="event__duration">${getTimeDifference(endDate.diff(startDate, `m`))}</p>
           </div>`;
  }

  getElement() {
    if (!this._element) {
      const {startDate, endDate} = this._eventDates;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({startDate, endDate}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/offers-list.js":
/*!*************************************************!*\
  !*** ./src/view/trip-event-item/offers-list.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OffersListMarkup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class OffersListMarkup {
  constructor({offers}) {
    this._offers = offers;
    this._element = null;
  }

  getTemplate({offers}) {
    return `<ul class="event__selected-offers">
             ${offers.map(({isSelected, title, price}) => isSelected ? `
               <li class="event__offer">
                 <span class="event__offer-title">${title}</span>
                 &plus;&euro;&nbsp;
                 <span class="event__offer-price">${price}</span>
               </li>` : ``).join(``)}
           </ul>`;
  }

  getElement() {
    if (!this._element) {
      const offers = this._offers;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({offers}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/trip-event-item/price.js":
/*!*******************************************!*\
  !*** ./src/view/trip-event-item/price.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventPrice; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


class EventPrice {
  constructor({price}) {
    this._element = null;
    this._price = price;
  }

  getTemplate({price}) {
    return `<p class="event__price">
             &euro;&nbsp;<span class="event__price-value">${price}</span>
           </p>`;
  }

  getElement() {
    if (!this._element) {
      const price = this._price;
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate({price}));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map