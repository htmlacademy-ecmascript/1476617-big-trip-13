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

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




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
/* harmony import */ var _presenters_layout_presenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenters/layout-presenter */ "./src/presenters/layout-presenter.js");


const layoutPresenter = new _presenters_layout_presenter__WEBPACK_IMPORTED_MODULE_0__["default"]();
layoutPresenter.init();


/***/ }),

/***/ "./src/mocks/generate-trip-event-item.js":
/*!***********************************************!*\
  !*** ./src/mocks/generate-trip-event-item.js ***!
  \***********************************************/
/*! exports provided: generateTripEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripEvents", function() { return generateTripEvents; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");






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

const minutesNow = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().minute();

const getRandomPrice = (minPrice, maxPrice) => {
  return Math.round(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(minPrice, maxPrice) / PRICE_STEP) * PRICE_STEP;
};

const generateOffer = () => {
  const id = Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])();
  const type = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_3__["TRIP_EVENT_TYPES"]);
  const [name, title] = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(Object.entries(_const__WEBPACK_IMPORTED_MODULE_3__["OFFER_TYPES"]));
  const price = getRandomPrice(MIN_OFFER_PRICE, MAX_OFFER_PRICE);
  const isSelected = Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1));

  return {
    id,
    type,
    name,
    title,
    price,
    isSelected,
  };
};

const generateOffers = () => {
  const offersAmount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_OFFER_AMOUNT, MAX_OFFERS_AMOUNT);
  return (new Array(offersAmount)
    .fill()
    .map(generateOffer))
    .filter((offer, i, offers) => !offers.slice(i + 1).find((anotherOffer) => offer.title === anotherOffer.title));
};

const generateDescription = () => {
  const sentenceAmount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_DESCRIPTION_SENTENCE_AMOUNT, MAX_DESCRIPTION_SENTENCE_AMOUNT);
  return new Array(sentenceAmount).fill().map(() => Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_3__["DESCRIPTIONS"])).join(` `);
};

const getRandomPhotos = () => {
  const photosAmout = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_PHOTOS_AMOUNT, MAX_PHOTOS_AMOUNT);
  return new Array(photosAmout).fill().map(() => `${RANDOM_PHOTO_BASE_URL}${Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(RANDOM_PHOTO_MIN_INTEGER, RANDOM_PHOTO_MAX_INTEGER)}`);
};

const getRandomDuration = () => {
  return Math.round(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_EVENT_DURATION, MAX_EVENT_DURATION) / EVENT_DURATION_STEP) * EVENT_DURATION_STEP;
};

const getIsFavourite = () => {
  return Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1));
};

const getRandomDates = () => {
  const timeAfterNow = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_EVENT_START_AFTER_NOW, MAX_EVENT_START_AFTER_NOW);
  const eventDuration = getRandomDuration();

  // subtracting minutesNow basically rounds minutes to either 0 or 5 depending on event duration
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(timeAfterNow, `hours`).subtract(minutesNow, `minutes`);
  const endDate = startDate.add(eventDuration, `minute`);
  return {
    startDate,
    endDate,
  };
};

const generateTripEvents = () => {
  const MIN_EVENTS_AMOUNT = 15;
  const MAX_EVENTS_AMOUNT = 20;

  const generateTripEventItem = () => {
    const type = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_3__["TRIP_EVENT_TYPES"]);
    const destination = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_3__["DESTINATIONS"]);
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

  const eventsAmount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(MIN_EVENTS_AMOUNT, MAX_EVENTS_AMOUNT);
  const tripEvents = new Array(eventsAmount).fill().map(generateTripEventItem);
  tripEvents.sort((event1, event2) => event1.startDate - event2.startDate);
  return tripEvents;
};


/***/ }),

/***/ "./src/presenters/abstract-presenter.js":
/*!**********************************************!*\
  !*** ./src/presenters/abstract-presenter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractPresenter; });
class AbstractPresenter {
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


/***/ }),

/***/ "./src/presenters/event-item-presenter.js":
/*!************************************************!*\
  !*** ./src/presenters/event-item-presenter.js ***!
  \************************************************/
/*! exports provided: Modes, EmittingActions, RecievingActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmittingActions", function() { return EmittingActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecievingActions", function() { return RecievingActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsItemPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _views_trip_event_item_event_item_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/trip-event-item/event-item-view */ "./src/views/trip-event-item/event-item-view.js");
/* harmony import */ var _views_trip_event_form_form_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/trip-event-form/form-view */ "./src/views/trip-event-form/form-view.js");






const Modes = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

const EmittingActions = {
  MODE_UPDATE: `MODE_UPDATE`,
  EVENT_UPDATE: `EVENT_UPDATE`,
};

const RecievingActions = {
  UPDATE_IS_FAVOURITE: `UPDATE_IS_FAVOURITE`,
};

class EventsItemPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({container}) {
    super({container});
    this._subscribers = null;
    this._event = null;
    this._mode = null;

    this._notifySubscribers = this._notifySubscribers.bind(this);
    this._setItemView = this._setItemView.bind(this);
    this._setFormView = this._setFormView.bind(this);
    this._setEditingMode = this._setEditingMode.bind(this);
    this._setDefaultMode = this._setDefaultMode.bind(this);
    this._setIsFavourite = this._setIsFavourite.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  init({event}) {
    this._event = event;
    this._mode = Modes.DEFAULT;
    this._subscribers = [];
    this._setItemView({event});

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, this._view);
  }

  update({event}) {
    this._event = event;
  }

  subscribe(subscriber) {
    this._subscribers.push(subscriber);
  }

  _notifySubscribers(action) {
    for (let subscriber of this._subscribers) {
      subscriber.updateOnEventItemChange({event: this._event, mode: this._mode}, action);
    }
  }

  _setItemView({event}) {
    const oldView = this._view;
    const newView = new _views_trip_event_item_event_item_view__WEBPACK_IMPORTED_MODULE_2__["default"]({event});

    if (oldView) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["replace"])(newView, oldView);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["remove"])(oldView);
    }

    this._view = newView;
    this._view.setOnRollupButtonClickHandler(this._setEditingMode);
    this._view.setOnFavouriteButtonClickHandler(this._setIsFavourite);
  }

  _setFormView({event}) {
    const oldView = this._view;
    const newView = new _views_trip_event_form_form_view__WEBPACK_IMPORTED_MODULE_3__["default"]({event});

    if (oldView) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["replace"])(newView, oldView);
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["remove"])(oldView);
    }

    this._view = newView;
    this._view.setOnEventRollupButtonClickHandler(this._setDefaultMode);
    this._view.setOnResetHandler(this._setDefaultMode);
    this._view.setOnSubmitHandler(this._setDefaultMode);
  }

  _setEditingMode() {
    this._mode = Modes.EDITING;
    this._setFormView({event: this._event});
    this._notifySubscribers(EmittingActions.MODE_UPDATE);
  }

  _setDefaultMode() {
    this._mode = Modes.DEFAULT;
    this._setItemView({event: this._event});
    this._notifySubscribers(EmittingActions.MODE_UPDATE);
  }

  _setIsFavourite() {
    const newEvent = Object.assign({}, this._event);
    newEvent.isFavourite = this._event.isFavourite;
    this._event = newEvent;
    this._notifySubscribers(EmittingActions.EVENT_UPDATE);
  }
}


/***/ }),

/***/ "./src/presenters/events-list-presenter.js":
/*!*************************************************!*\
  !*** ./src/presenters/events-list-presenter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsListPresenter; });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _event_item_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-item-presenter */ "./src/presenters/event-item-presenter.js");
/* harmony import */ var _views_layout_views_events_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/layout-views/events-list-view */ "./src/views/layout-views/events-list-view.js");









class EventsListPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor({container}) {
    super({container});
    this._events = null;

    this._eventItemPresenters = null;

    this._editingItem = null;

    this.updateOnEventItemChange = this.updateOnEventItemChange.bind(this);
  }

  init({events}) {
    this._events = [...events];
    this._view = new _views_layout_views_events_list_view__WEBPACK_IMPORTED_MODULE_4__["default"]({events});
    this._eventItemPresenters = new Map();

    for (let event of events) {
      const eventItemPresenter = new _event_item_presenter__WEBPACK_IMPORTED_MODULE_3__["default"]({container: this._view});
      eventItemPresenter.init({event});
      eventItemPresenter.subscribe(this);
      this._eventItemPresenters.set(event, eventItemPresenter);
    }

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND, this._view);
  }

  updateOnEventItemChange({event: newEvent, mode}, action) {
    switch (action) {
      case _event_item_presenter__WEBPACK_IMPORTED_MODULE_3__["EmittingActions"].MODE_UPDATE:

        if (mode === _event_item_presenter__WEBPACK_IMPORTED_MODULE_3__["Modes"].EDITING) {
          if (this._editingItem) {
            this._eventItemPresenters.get(this._editingItem).setDefaultMode();
          }
          this._editingItem = newEvent;
        } else {
          this._editingItem = null;
        }

        break;

      case _event_item_presenter__WEBPACK_IMPORTED_MODULE_3__["EmittingActions"].EVENT_UPDATE:

        const oldEvent = this._events.find((event) => event.id === newEvent.id);
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["replaceItemInArray"])(this._events, oldEvent, newEvent);

        const eventItemPresenter = this._eventItemPresenters.get(oldEvent);
        eventItemPresenter.update({event: newEvent});

        this._eventItemPresenters.delete(oldEvent);
        this._eventItemPresenters.set(newEvent, eventItemPresenter);

        break;
    }
  }
}


/***/ }),

/***/ "./src/presenters/filter-presenter.js":
/*!********************************************!*\
  !*** ./src/presenters/filter-presenter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _views_layout_views_filters_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout-views/filters-view */ "./src/views/layout-views/filters-view.js");





class FiltersPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init() {
    this._view = new _views_layout_views_filters_view__WEBPACK_IMPORTED_MODULE_2__["default"]();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, this._view);
  }
}


/***/ }),

/***/ "./src/presenters/layout-presenter.js":
/*!********************************************!*\
  !*** ./src/presenters/layout-presenter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _mocks_generate_trip_event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/generate-trip-event-item */ "./src/mocks/generate-trip-event-item.js");
/* harmony import */ var _trip_info_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-info-presenter */ "./src/presenters/trip-info-presenter.js");
/* harmony import */ var _menu_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-presenter */ "./src/presenters/menu-presenter.js");
/* harmony import */ var _filter_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-presenter */ "./src/presenters/filter-presenter.js");
/* harmony import */ var _sort_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort-presenter */ "./src/presenters/sort-presenter.js");
/* harmony import */ var _events_list_presenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-list-presenter */ "./src/presenters/events-list-presenter.js");









const Layout = {
  TRIP_INFO: `TRIP_INFO`,
  MENU: `MENU`,
  FILTERS: `FILTERS`,
  SORT: `SORT`,
  EVENTS_LIST: `EVENTS_LIST`,
};

const getTripRoute = (tripEvents) => {
  const tripEventsDestinations = tripEvents.map(
      (tripEvent) => tripEvent.destination
  );
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

const tripEvents = Object(_mocks_generate_trip_event_item__WEBPACK_IMPORTED_MODULE_1__["generateTripEvents"])();
const trip = {
  route: getTripRoute(tripEvents),
  price: getTripPrice(tripEvents),
  startDate: getStartDate(tripEvents),
  endDate: getEndDate(tripEvents),
};

class DOMContainers {
  constructor() {
    this.TRIP_MAIN = document.querySelector(`.trip-main`);
    this.TRIP_EVENTS = document.querySelector(`.trip-events`);
    this.MENU = this.TRIP_MAIN.querySelector(
        `.trip-main__trip-controls`
    );
  }
}

class LayoutPresenter {
  constructor() {
    this._layoutItemPresenters = null;
    this._containers = null;
  }

  init() {
    this._layoutItemPresenters = new Map();
    this._containers = new DOMContainers();

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["clearInnerHTML"])(this._containers.TRIP_EVENTS, this._containers.MENU);

    const tripInfoPresenter = new _trip_info_presenter__WEBPACK_IMPORTED_MODULE_2__["default"]({container: this._containers.TRIP_MAIN});
    tripInfoPresenter.init({trip});
    this._layoutItemPresenters.set(Layout.TRIP_INFO, tripInfoPresenter);

    const menuPresenter = new _menu_presenter__WEBPACK_IMPORTED_MODULE_3__["default"]({container: this._containers.MENU});
    menuPresenter.init();
    this._layoutItemPresenters.set(Layout.MENU, menuPresenter);

    const filtersPresenter = new _filter_presenter__WEBPACK_IMPORTED_MODULE_4__["default"]({container: this._containers.MENU});
    filtersPresenter.init();
    this._layoutItemPresenters.set(Layout.FILTERS, filtersPresenter);

    const sortPresenter = new _sort_presenter__WEBPACK_IMPORTED_MODULE_5__["default"]({container: this._containers.TRIP_EVENTS});
    sortPresenter.init();
    this._layoutItemPresenters.set(Layout.SORT, sortPresenter);

    const eventsListPresenter = new _events_list_presenter__WEBPACK_IMPORTED_MODULE_6__["default"]({container: this._containers.TRIP_EVENTS});
    eventsListPresenter.init({events: tripEvents});
    this._layoutItemPresenters.set(Layout.EVENTS_LIST, eventsListPresenter);
  }
}


/***/ }),

/***/ "./src/presenters/menu-presenter.js":
/*!******************************************!*\
  !*** ./src/presenters/menu-presenter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _views_layout_views_menu_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout-views/menu-view */ "./src/views/layout-views/menu-view.js");





class MenuPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init() {
    this._view = new _views_layout_views_menu_view__WEBPACK_IMPORTED_MODULE_2__["default"]();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, this._view);
  }
}


/***/ }),

/***/ "./src/presenters/sort-presenter.js":
/*!******************************************!*\
  !*** ./src/presenters/sort-presenter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _views_layout_views_sort_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout-views/sort-view */ "./src/views/layout-views/sort-view.js");





class SortPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init() {
    this._view = new _views_layout_views_sort_view__WEBPACK_IMPORTED_MODULE_2__["default"]();
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, this._view);
  }
}


/***/ }),

/***/ "./src/presenters/trip-info-presenter.js":
/*!***********************************************!*\
  !*** ./src/presenters/trip-info-presenter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfoPresenter; });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-presenter */ "./src/presenters/abstract-presenter.js");
/* harmony import */ var _views_layout_views_trip_info_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout-views/trip-info-view */ "./src/views/layout-views/trip-info-view.js");





class TripInfoPresenter extends _abstract_presenter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init({trip}) {
    this._view = new _views_layout_views_trip_info_view__WEBPACK_IMPORTED_MODULE_2__["default"]({trip});
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, _utils_render__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, this._view);
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomArrayItem, replaceItemInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceItemInArray", function() { return replaceItemInArray; });
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const replaceItemInArray = (array, oldItem, newItem) => {
  const oldItemIndex = array.indexOf(oldItem);
  array[oldItemIndex] = newItem;
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, createElement, replace, remove, clearInnerHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInnerHTML", function() { return clearInnerHTML; });
/* harmony import */ var _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/abstract-view */ "./src/views/abstract-view.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, position, ...children) => {
  const containerElement = container = container instanceof _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.getElement() : container;
  const childrenElements = children.map((child) => child instanceof _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? child.getElement() : child);

  if (position === RenderPosition.AFTERBEGIN) {
    containerElement.prepend(...childrenElements);
  } else if (position === RenderPosition.BEFOREEND) {
    containerElement.append(...childrenElements);
  }
};

const createElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  return div.firstChild;
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`One of the components objects does not have an existing element propepty in it`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _views_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can only remove components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const clearInnerHTML = (...containers) => {
  for (const container of containers) {
    container.innerHTML = ``;
  }
};


/***/ }),

/***/ "./src/views/abstract-view.js":
/*!************************************!*\
  !*** ./src/views/abstract-view.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`AbstractView should be extended and cannot be instantiated`);
    }
    this._element = null;
    this._callbacks = {};
  }

  getTemplate() {
    throw new Error(`Abstract method getTemplate is not implemented`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/views/layout-views/events-list-view.js":
/*!****************************************************!*\
  !*** ./src/views/layout-views/events-list-view.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsListView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class EventsListView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({events}) {
    super();
    this._events = events;
  }

  getTemplate() {
    return (this._events.length === 0)
      ? `<p class="trip-events__msg">Click New Event to create your first point</p>`
      : `<ul class="trip-events__list">
        </ul>`;
  }

  setOnEscKeydownHandler(cb) {
    this._callbacks.setOnEscKeydownHandler = cb;
    document.addEventListener(`keydown`, cb);
  }

  setToggleEventComponents(cb) {
    this._callbacks.toggleEventComponent = cb;
  }

  setReplaceItemWithForm(cb) {
    this._callbacks.replaceItemWithForm = cb;
    this._eventComponents.forEach(
        (tripEventElement, index) => tripEventElement.setOnRollupButtonClick(() => cb(index))
    );
  }

  setReplaceFormWithItem(cb) {
    this._callbacks.unsetItemEdited = cb;
  }
}


/***/ }),

/***/ "./src/views/layout-views/filters-view.js":
/*!************************************************!*\
  !*** ./src/views/layout-views/filters-view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class FiltersView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
}


/***/ }),

/***/ "./src/views/layout-views/menu-view.js":
/*!*********************************************!*\
  !*** ./src/views/layout-views/menu-view.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class MenuView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<div class="trip-main__trip-controls  trip-controls">
             <h2 class="visually-hidden">Switch trip view</h2>
             <nav class="trip-controls__trip-tabs  trip-tabs">
               <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
               <a class="trip-tabs__btn" href="#">Stats</a>
             </nav>
           </div>`;
  }
}


/***/ }),

/***/ "./src/views/layout-views/sort-view.js":
/*!*********************************************!*\
  !*** ./src/views/layout-views/sort-view.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class SortView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
}


/***/ }),

/***/ "./src/views/layout-views/trip-info-view.js":
/*!**************************************************!*\
  !*** ./src/views/layout-views/trip-info-view.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfoView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class TripInfoView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({trip}) {
    super();
    this._trip = trip;
  }

  getTemplate() {
    const {route, price, startDate, endDate} = this._trip;
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


/***/ }),

/***/ "./src/views/trip-event-form/event-destination-group-view.js":
/*!*******************************************************************!*\
  !*** ./src/views/trip-event-form/event-destination-group-view.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventDestinationGroupView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class TripEventDestinationGroupView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(destinationGroup) {
    super();
    this._destinationGroup = destinationGroup;
  }

  getTemplate() {
    const {type, destination} = this._destinationGroup;
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
}


/***/ }),

/***/ "./src/views/trip-event-form/event-price-field-group-view.js":
/*!*******************************************************************!*\
  !*** ./src/views/trip-event-form/event-price-field-group-view.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventPriceFieldGroupView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class TripEventPriceFieldGroupView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(price) {
    super();
    this._price = price;
  }

  getTemplate() {
    const {price} = this._price;
    return `<div class="event__field-group  event__field-group--price">
             <label class="event__label" for="event-price-1">
               <span class="visually-hidden">Price</span>
               &euro;
             </label>
             <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}"></input>
           </div>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-form/event-time-group-view.js":
/*!************************************************************!*\
  !*** ./src/views/trip-event-form/event-time-group-view.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventTimeGroupView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class TripEventTimeGroupView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(time) {
    super();
    this._time = time;
  }

  getTemplate() {
    const {startDate, endDate} = this._time;
    return `<div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-1">From</label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate.format(`DD/MM/YY HH:mm`)}">
                &mdash;
              <label class="visually-hidden" for="event-end-time-1">To</label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate.format(`DD/MM/YY HH:mm`)}"></input>
            </div>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-form/event-type-group-view.js":
/*!************************************************************!*\
  !*** ./src/views/trip-event-form/event-type-group-view.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventTypeGroupView; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const */ "./src/const.js");
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");



class TripEventTypeGroupView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type} = this._event;
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

                ${_const__WEBPACK_IMPORTED_MODULE_0__["TRIP_EVENT_TYPES"].map((tripEventType) => {
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
}


/***/ }),

/***/ "./src/views/trip-event-form/form-view.js":
/*!************************************************!*\
  !*** ./src/views/trip-event-form/form-view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventFormView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");
/* harmony import */ var _event_type_group_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-type-group-view */ "./src/views/trip-event-form/event-type-group-view.js");
/* harmony import */ var _event_destination_group_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-destination-group-view */ "./src/views/trip-event-form/event-destination-group-view.js");
/* harmony import */ var _event_time_group_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-time-group-view */ "./src/views/trip-event-form/event-time-group-view.js");
/* harmony import */ var _event_price_field_group_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-price-field-group-view */ "./src/views/trip-event-form/event-price-field-group-view.js");
/* harmony import */ var _trip_event_details_trip_event_details_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-event-details/trip-event-details-view */ "./src/views/trip-event-form/trip-event-details/trip-event-details-view.js");







class TripEventFormView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({event}) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type, destination, price, description, photos, startDate, endDate, offers} = this._event;
    return `<li class="trip-events__item">
             <form class="event event--edit" action="#" method="post">
               <header class="event__header">
                 ${new _event_type_group_view__WEBPACK_IMPORTED_MODULE_1__["default"]({type}).getTemplate()}
                 ${new _event_destination_group_view__WEBPACK_IMPORTED_MODULE_2__["default"]({type, destination}).getTemplate()}
                 ${new _event_time_group_view__WEBPACK_IMPORTED_MODULE_3__["default"]({startDate, endDate}).getTemplate()}
                 ${new _event_price_field_group_view__WEBPACK_IMPORTED_MODULE_4__["default"]({price}).getTemplate()}

                 <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                 <button class="event__reset-btn" type="reset">Delete</button>

                 <button class="event__rollup-btn" type="button">
                   <span class="visually-hidden">Open event</span>
                 </button>

               </header>
               ${new _trip_event_details_trip_event_details_view__WEBPACK_IMPORTED_MODULE_5__["default"]({description, photos, offers}).getTemplate()}
             </form>
           </li>`;
  }

  setOnSubmitHandler(cb) {
    this._callbacks.submitHandler = cb;
    this._element.addEventListener(`submit`, cb);
  }

  setOnResetHandler(cb) {
    this._callbacks.resetHandler = cb;
    this._element.addEventListener(`reset`, cb);
  }

  setOnEventRollupButtonClickHandler(cb) {
    this._callbacks.onEventRollupButtonClickHandler = cb;
    this._element.querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }
}


/***/ }),

/***/ "./src/views/trip-event-form/trip-event-details/offer-view.js":
/*!********************************************************************!*\
  !*** ./src/views/trip-event-form/trip-event-details/offer-view.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OfferView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstract-view */ "./src/views/abstract-view.js");


class OfferView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(offer) {
    super();
    this._offer = offer;
  }

  getTemplate() {
    const {name, title, price, isSelected} = this._offer;
    return `<div class="event__offer-selector">
             <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isSelected ? `checked` : ``}>
             <label class="event__offer-label" for="event-offer-${name}-1">
               <span class="event__offer-title">${title}</span>
               &plus;&euro;&nbsp;
               <span class="event__offer-price">${price}</span>
             </label>
           </div>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-form/trip-event-details/trip-event-details-view.js":
/*!*********************************************************************************!*\
  !*** ./src/views/trip-event-form/trip-event-details/trip-event-details-view.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventDetailsView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstract-view */ "./src/views/abstract-view.js");
/* harmony import */ var _offer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-view */ "./src/views/trip-event-form/trip-event-details/offer-view.js");




class TripEventDetailsView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(tripEventDetails) {
    super();
    this._tripEventDetails = tripEventDetails;
  }

  getTemplate() {
    const {description, photos, offers} = this._tripEventDetails;
    return `<section class="event__details">
             <section class="event__section  event__section--offers">
               <h3 class="event__section-title  event__section-title--offers">Offers</h3>
               <div class="event__available-offers">
                 ${offers.map((offer) => new _offer_view__WEBPACK_IMPORTED_MODULE_1__["default"](offer).getTemplate()).join(``)}
               </div>
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
}


/***/ }),

/***/ "./src/views/trip-event-item/add-to-favourites-button-view.js":
/*!********************************************************************!*\
  !*** ./src/views/trip-event-item/add-to-favourites-button-view.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToFavouritesButtonView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class AddToFavouritesButtonView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(addToFavouritesButton) {
    super();
    this._addToFavouritesButton = addToFavouritesButton;
  }

  getTemplate() {
    const {isFavouriteClassName} = this._addToFavouritesButton;
    return `<button class="event__favorite-btn ${isFavouriteClassName}" type="button">
             <span class="visually-hidden">Add to favorite</span>
             <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
               <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
             </svg>
           </button>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-item/event-item-view.js":
/*!******************************************************!*\
  !*** ./src/views/trip-event-item/event-item-view.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEventItemView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");
/* harmony import */ var _offers_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers-list-view */ "./src/views/trip-event-item/offers-list-view.js");
/* harmony import */ var _event_schedule_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-schedule-view */ "./src/views/trip-event-item/event-schedule-view.js");
/* harmony import */ var _price_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price-view */ "./src/views/trip-event-item/price-view.js");
/* harmony import */ var _add_to_favourites_button_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-to-favourites-button-view */ "./src/views/trip-event-item/add-to-favourites-button-view.js");







class TripEventItemView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({event}) {
    super();
    this._event = event;
  }

  getTemplate() {
    const {type, destination, price, startDate, endDate, offers, isFavourite} = this._event;
    const isFavouriteClassName = isFavourite ? `event__favorite-btn--active` : ``;
    const startDateFormatted = startDate.format(`MMM D`);
    const lowerCaseType = type.toLowerCase();

    return `<li class="trip-events__item">
              <div class="event">

                <time class="event__date" datetime="2019-03-18">${startDateFormatted}</time>

                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${lowerCaseType}.png" alt="${type}icon">
                </div>

                <h3 class="event__title">${type} ${destination}</h3>

                ${new _event_schedule_view__WEBPACK_IMPORTED_MODULE_2__["default"]({startDate, endDate}).getTemplate()}
                ${new _price_view__WEBPACK_IMPORTED_MODULE_3__["default"]({price}).getTemplate()}

                <h4 class="visually-hidden">Offers:</h4>

                ${new _offers_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]({offers}).getTemplate()}
                ${new _add_to_favourites_button_view__WEBPACK_IMPORTED_MODULE_4__["default"]({isFavouriteClassName}).getTemplate()}

                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>

              </div>
            </li>`;
  }

  setOnRollupButtonClickHandler(cb) {
    this._callbacks.onRollupButtonClickHandler = cb;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }

  setOnFavouriteButtonClickHandler(cb) {
    const onFavouriteButtonClickHandler = () => {
      cb();
      this.getElement().querySelector(`.event__favorite-btn`).classList.toggle(`event__favorite-btn--active`);
    };
    this._callbacks.onFavouriteButtonClickHandler = onFavouriteButtonClickHandler;
    this.getElement().querySelector(`.event__favorite-btn `).addEventListener(`click`, onFavouriteButtonClickHandler);
  }
}


/***/ }),

/***/ "./src/views/trip-event-item/event-schedule-view.js":
/*!**********************************************************!*\
  !*** ./src/views/trip-event-item/event-schedule-view.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventScheduleView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


const getTimeDifference = (minutes) => {
  return `${Math.floor(minutes / 60)}H ${minutes % 60}M`;
};

class EventScheduleView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(eventDates) {
    super();
    this._eventDates = eventDates;
  }

  getTemplate() {
    const {startDate, endDate} = this._eventDates;
    return `<div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${startDate.toDate()}">${startDate.format(`HH:mm`)}</time>
                &mdash;
                <time class="event__end-time" datetime="${endDate.toDate()}">${endDate.format(`HH:mm`)}</time>
              </p>
              <p class="event__duration">${getTimeDifference(endDate.diff(startDate, `m`))}</p>
           </div>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-item/offers-list-view.js":
/*!*******************************************************!*\
  !*** ./src/views/trip-event-item/offers-list-view.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OffersListMarkupView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class OffersListMarkupView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({offers}) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    const offers = this._offers;
    return `<ul class="event__selected-offers">
             ${offers.map(({isSelected, title, price}) => isSelected ? `
               <li class="event__offer">
                 <span class="event__offer-title">${title}</span>
                 &plus;&euro;&nbsp;
                 <span class="event__offer-price">${price}</span>
               </li>` : ``).join(``)}
           </ul>`;
  }
}


/***/ }),

/***/ "./src/views/trip-event-item/price-view.js":
/*!*************************************************!*\
  !*** ./src/views/trip-event-item/price-view.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventPriceView; });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-view */ "./src/views/abstract-view.js");


class EventPriceView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({price}) {
    super();
    this._price = price;
  }

  getTemplate() {
    const price = this._price;
    return `<p class="event__price">
             &euro;&nbsp;<span class="event__price-value">${price}</span>
           </p>`;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map