"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _social = _interopRequireDefault(require("./social"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const COMMON = {
  borderRadius: 4,
  height: 55,
  raiseLevel: 6
};
const SOCIAL_TYPES = (0, _social.default)(COMMON);
const BUTTONS = {
  primary: {
    ...COMMON,
    backgroundColor: '#1775c8',
    backgroundDarker: '#125a9a',
    backgroundProgress: '#125a9a',
    textColor: '#FFF',
    activityColor: '#b3e5e1'
  },
  secondary: {
    ...COMMON,
    backgroundColor: '#e9f0f5',
    backgroundDarker: '#0e71c8',
    backgroundActive: '#dae8f3',
    backgroundProgress: '#c8e3f5',
    backgroundPlaceholder: '#1e88e5',
    textColor: '#1e88e5',
    borderWidth: 1,
    borderColor: '#1e88e5',
    activityColor: '#1e88e5'
  },
  anchor: {
    ...COMMON,
    backgroundColor: '#0e4f88',
    backgroundDarker: '#083156',
    backgroundProgress: '#083156',
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
  title: 'Blue Theme',
  background: '#1775c8',
  color: '#FFF',
  buttons: BUTTONS,
  size: SIZE
};
//# sourceMappingURL=blue.js.map