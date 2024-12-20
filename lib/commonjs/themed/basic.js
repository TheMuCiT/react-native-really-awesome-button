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
  height: 60,
  raiseLevel: 12
};
const SOCIAL_TYPES = (0, _social.default)(COMMON);
const primary = '#4688C5';
const anchor = '#46C578';
const danger = '#B13A3A';
const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: primary,
    backgroundDarker: (0, _colors.default)(-0.5, primary),
    backgroundActive: (0, _colors.default)(-0.3, primary),
    backgroundProgress: (0, _colors.default)(-0.65, primary),
    textColor: '#FFF',
    activityColor: '#b3e5e1'
  },
  secondary: {
    ...COMMON,
    backgroundColor: '#FFF',
    backgroundDarker: (0, _colors.default)(-0.1, primary),
    backgroundActive: (0, _colors.default)(0.85, primary),
    backgroundProgress: '#c8e3f5',
    backgroundPlaceholder: '#1e88e5',
    textColor: '#1e88e5',
    borderWidth: 1,
    borderColor: '#1e88e5',
    activityColor: '#1e88e5'
  },
  anchor: {
    ...COMMON,
    backgroundColor: anchor,
    backgroundDarker: (0, _colors.default)(-0.5, anchor),
    backgroundProgress: (0, _colors.default)(-0.65, anchor),
    textColor: '#FFF',
    activityColor: '#FFF'
  },
  danger: {
    ...COMMON,
    backgroundColor: danger,
    backgroundDarker: (0, _colors.default)(-0.5, danger),
    backgroundProgress: (0, _colors.default)(-0.65, danger),
    textColor: '#FFF',
    activityColor: '#FFF'
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
    width: 60,
    height: 60,
    textSize: 12,
    paddingHorizontal: 4
  },
  small: {
    width: 120,
    height: 44,
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
  title: 'Basic Theme',
  background: '#1775c8',
  color: '#FFF',
  buttons: BUTTONS,
  size: SIZE
};
//# sourceMappingURL=basic.js.map