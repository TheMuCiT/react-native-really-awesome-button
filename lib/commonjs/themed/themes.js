"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bojack = _interopRequireDefault(require("./bojack"));
var _c = _interopRequireDefault(require("./c137"));
var _bruce = _interopRequireDefault(require("./bruce"));
var _cartman = _interopRequireDefault(require("./cartman"));
var _mysterion = _interopRequireDefault(require("./mysterion"));
var _summer = _interopRequireDefault(require("./summer"));
var _rick = _interopRequireDefault(require("./rick"));
var _basic = _interopRequireDefault(require("./basic"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const themes = {
  basic: _basic.default,
  bojack: _bojack.default,
  cartman: _cartman.default,
  mysterion: _mysterion.default,
  c137: _c.default,
  rick: _rick.default,
  summer: _summer.default,
  bruce: _bruce.default
};
const getThemeByIndex = (index = 0) => {
  const keys = Object.keys(themes);
  if (index === null || !keys[index]) {
    return null;
  }
  return {
    ...themes[keys[index]],
    next: !!keys[index + 1],
    prev: !!keys[index - 1],
    name: keys[index]
  };
};
const getThemeByName = name => {
  const keys = Object.keys(themes);
  const index = keys.indexOf(name);
  if (index === -1) {
    return null;
  }
  return getThemeByIndex(index);
};
const getTheme = (index = 0, name = null) => {
  return name ? getThemeByName(name) : getThemeByIndex(index);
};
var _default = exports.default = getTheme;
//# sourceMappingURL=themes.js.map