"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
var _themes = _interopRequireDefault(require("./themes"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Themed({
  disabled,
  index = null,
  config,
  name = null,
  transparent = false,
  type = 'primary',
  size = 'medium',
  ...extra
}) {
  const theme = config || (0, _themes.default)(index, name);
  const styles = disabled ? theme.buttons.disabled : theme.buttons[type];
  const sizeObj = size ? theme.size[size] : {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    ...styles,
    ...sizeObj,
    disabled: disabled,
    ...extra
  });
}
var _default = exports.default = Themed;
//# sourceMappingURL=ThemedButton.js.map