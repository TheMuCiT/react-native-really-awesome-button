"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _social = _interopRequireDefault(require("./social"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const dark = '#3a3a3a';
const white = '#FBFBFB';
const purple = '#733086';
const green = '#77CD38';
const yellow = '#FFE727';
const COMMON = {
  borderRadius: 8,
  height: 62,
  raiseLevel: 10,
  borderWidth: 2
};
const SOCIAL_TYPES = (0, _social.default)(COMMON);
const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: dark,
    backgroundDarker: (0, _colors.default)(-0.38, dark),
    backgroundProgress: (0, _colors.default)(-0.62, dark),
    borderColor: (0, _colors.default)(-0.38, dark),
    textColor: white,
    activityColor: white
  },
  secondary: {
    ...COMMON,
    backgroundColor: white,
    backgroundDarker: dark,
    backgroundProgress: (0, _colors.default)(-0.38, white),
    backgroundPlaceholder: dark,
    textColor: dark,
    borderColor: (0, _colors.default)(-0.38, dark),
    activityColor: dark
  },
  anchor: {
    ...COMMON,
    backgroundColor: yellow,
    backgroundDarker: (0, _colors.default)(-0.38, dark),
    backgroundProgress: '#404040',
    textColor: (0, _colors.default)(-0.38, dark),
    borderColor: dark,
    borderWidth: 2,
    activityColor: dark
  },
  danger: {
    ...COMMON,
    backgroundColor: purple,
    backgroundDarker: (0, _colors.default)(-0.62, purple),
    backgroundProgress: (0, _colors.default)(-0.62, purple),
    textColor: green,
    borderColor: (0, _colors.default)(-0.62, purple),
    activityColor: green
  },
  disabled: {
    ...COMMON,
    backgroundColor: (0, _colors.default)(0.38, dark),
    backgroundDarker: (0, _colors.default)(0.13, dark),
    textColor: (0, _colors.default)(0.13, dark),
    borderColor: (0, _colors.default)(0.13, dark)
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
    width: 60,
    height: 60,
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
    height: 60
  },
  large: {
    width: 250,
    height: 60,
    textSize: 16
  }
};
var _default = exports.default = {
  title: 'Bruce Theme',
  background: '#2f2f2f',
  color: '#FFF',
  buttons: BUTTONS,
  size: SIZE
};
//# sourceMappingURL=bruce.js.map