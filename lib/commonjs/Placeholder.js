"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _helpers = require("./helpers");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Placeholder = ({
  animated,
  style
}) => {
  const animating = (0, _react.useRef)(false);
  const [width, setWidth] = (0, _react.useState)(0);
  const animatedValue = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  (0, _react.useEffect)(() => {
    if (width > 0 && animating.current === false && animated === true) {
      animating.current = true;
      (0, _helpers.animateLoop)({
        variable: animatedValue,
        toValue: 1
      });
    }
  }, [width]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [_styles.styles.container__placeholder, ...style],
    onLayout: event => {
      setWidth(event.nativeEvent.layout.width);
    },
    children: animated === true && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      testID: "aws-btn-content-placeholder",
      style: [...style, _styles.styles.container__placeholder__bar, {
        transform: [{
          translateX: animatedValue.interpolate({
            inputRange: [0, 0.2, 0.5, 0.7, 1],
            outputRange: [width * -1, width * -1, width, width, width * -1]
          })
        }]
      }]
    })
  });
};
var _default = exports.default = Placeholder;
//# sourceMappingURL=Placeholder.js.map