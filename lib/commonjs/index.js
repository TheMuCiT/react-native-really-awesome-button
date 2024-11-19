"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = exports.default = exports.ThemedButton = void 0;
var _Button = _interopRequireDefault(require("./Button"));
var _ThemedButton = _interopRequireDefault(require("./themed/ThemedButton"));
var _themes = _interopRequireDefault(require("./themed/themes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ThemedButton = exports.ThemedButton = _ThemedButton.default;
const getTheme = exports.getTheme = _themes.default;
var _default = exports.default = _Button.default;
//# sourceMappingURL=index.js.map