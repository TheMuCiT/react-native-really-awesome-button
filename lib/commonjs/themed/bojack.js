"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _social = _interopRequireDefault(require("./social"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const blue = '#6678C5';
const grey = '#848289';
const pink = '#EBA0BD';
const teal = '#3eb7b9';
const white = '#FFFFFF';
const COMMON = {
  borderRadius: 4,
  height: 55,
  activityColor: white,
  textColor: white,
  raiseLevel: 6,
  paddingHorizontal: 20
};
const SOCIAL_TYPES = (0, _social.default)(COMMON);
const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: blue,
    backgroundDarker: (0, _colors.default)(-0.3, blue),
    backgroundProgress: '#2a4284'
  },
  secondary: {
    ...COMMON,
    backgroundColor: grey,
    backgroundDarker: (0, _colors.default)(-0.3, grey),
    backgroundProgress: '#3f3f3f'
  },
  anchor: {
    ...COMMON,
    backgroundColor: teal,
    backgroundDarker: (0, _colors.default)(-0.3, teal),
    backgroundProgress: (0, _colors.default)(-0.6, teal)
  },
  danger: {
    ...COMMON,
    backgroundColor: (0, _colors.default)(-0.1, pink),
    backgroundDarker: (0, _colors.default)(-0.3, pink),
    backgroundProgress: (0, _colors.default)(-0.5, pink)
  },
  disabled: {
    ...COMMON,
    backgroundColor: '#DFDFDF',
    backgroundDarker: '#CACACA',
    textColor: '#B6B6B6'
  },
  flat: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundDarker: 'rgba(0, 0, 0, 0)',
    backgroundShadow: 'rgba(0, 0, 0, 0)',
    raiseLevel: 0,
    borderRadius: 0
  },
  ...SOCIAL_TYPES
};
const SIZE = {
  icon: {
    width: 55,
    height: 55,
    textSize: 12,
    paddingHorizontal: 4
  },
  small: {
    width: 120,
    height: 42,
    textSize: 12
  },
  medium: {
    width: 200,
    height: 55
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16
  }
};
var _default = exports.default = {
  title: 'Bojack Theme',
  background: '#4f6fc4',
  color: '#fff',
  buttons: BUTTONS,
  size: SIZE
};
//# sourceMappingURL=bojack.js.map