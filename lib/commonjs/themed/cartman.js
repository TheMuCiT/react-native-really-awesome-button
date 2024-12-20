"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _social = _interopRequireDefault(require("./social"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const COMMON = {
  borderRadius: 8,
  height: 55,
  activityColor: '#FFE11D',
  raiseLevel: 8
};
const SOCIAL_TYPES = (0, _social.default)(COMMON);
const blue = '#00B8C4';
const red = '#DB4557';
const yellow = '#FDF353';
const brown = '#876753';
const dark = '#2D2D3A';
const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: blue,
    backgroundDarker: (0, _colors.default)(-0.35, yellow),
    textColor: yellow,
    borderWidth: 2,
    borderColor: yellow
  },
  secondary: {
    ...COMMON,
    backgroundColor: red,
    backgroundDarker: (0, _colors.default)(-0.35, yellow),
    textColor: yellow,
    borderWidth: 2,
    borderColor: (0, _colors.default)(-0.1, yellow)
  },
  anchor: {
    ...COMMON,
    backgroundColor: dark,
    backgroundDarker: (0, _colors.default)(-0.3, brown),
    textColor: (0, _colors.default)(0.1, brown),
    backgroundProgress: (0, _colors.default)(0.025, dark),
    borderWidth: 2,
    borderColor: brown,
    activityColor: (0, _colors.default)(0.1, brown)
  },
  danger: {
    ...COMMON,
    backgroundColor: (0, _colors.default)(-0.1, dark),
    backgroundDarker: (0, _colors.default)(-0.5, red),
    backgroundProgress: (0, _colors.default)(0.025, dark),
    textColor: red,
    borderColor: red,
    borderWidth: 2,
    activityColor: (0, _colors.default)(0.1, red)
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
  title: 'Cartman Theme',
  background: '#EE3253',
  color: '#FFE11D',
  buttons: BUTTONS,
  size: SIZE
};
//# sourceMappingURL=cartman.js.map