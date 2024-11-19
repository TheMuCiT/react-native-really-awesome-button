"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _helpers = require("./helpers");
var _lodash = _interopRequireDefault(require("lodash.debounce"));
var _styles = require("./styles");
var _constants = require("./constants");
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AwesomeButton = ({
  activityColor = _constants.DEFAULT_ACTIVITY_COLOR,
  activeOpacity = _constants.DEFAULT_ACTIVE_OPACITY,
  animatedPlaceholder = true,
  backgroundActive = _constants.DEFAULT_BACKGROUND_ACTIVE,
  backgroundColor = _constants.DEFAULT_BACKGROUND_COLOR,
  backgroundDarker = _constants.DEFAULT_BACKGROUND_DARKER,
  backgroundPlaceholder = _constants.DEFAULT_BACKGROUND_SHADOW,
  backgroundProgress = _constants.DEFAULT_BACKGROUND_SHADOW,
  backgroundShadow = _constants.DEFAULT_BACKGROUND_SHADOW,
  borderColor,
  borderRadius = _constants.DEFAULT_BORDER_RADIUS,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth = _constants.DEFAULT_BORDER_WIDTH,
  children = null,
  before = null,
  after = null,
  disabled = false,
  height = _constants.DEFAULT_HEIGHT,
  hitSlop = null,
  debouncedPressTime = _constants.DEFAULT_DEBOUNCED_PRESS_TIME,
  paddingHorizontal = _constants.DEFAULT_HORIZONTAL_PADDING,
  onPress = () => null,
  onPressIn = () => null,
  onPressedIn = () => null,
  onPressOut = () => null,
  onPressedOut = () => null,
  onProgressStart = () => null,
  onProgressEnd = () => null,
  onLongPress = null,
  delayLongPress = 500,
  dangerouslySetPressableProps = {},
  progress = false,
  paddingBottom = 0,
  paddingTop = 0,
  progressLoadingTime = _constants.ANIMATED_TIMING_LOADING,
  raiseLevel = _constants.DEFAULT_RAISE_LEVEL,
  springRelease = true,
  stretch = false,
  style = null,
  textColor = _constants.DEFAULT_TEXT_COLOR,
  textLineHeight = _constants.DEFAULT_LINE_HEIGHT,
  textSize = _constants.DEFAULT_TEXT_SIZE,
  textFontFamily,
  width = _constants.DEFAULT_WIDTH,
  extra = null
}) => {
  const loadingOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(1)).current;
  const textOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(1)).current;
  const activityOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const animatedActive = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const animatedValue = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const animatedLoading = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const animatedOpacity = (0, _react.useRef)(new _reactNative.Animated.Value(width === null && !stretch === true ? 0 : 1)).current;
  const pressing = (0, _react.useRef)(false);
  const pressed = (0, _react.useRef)(false);
  const actioned = (0, _react.useRef)(false);
  const progressing = (0, _react.useRef)(false);
  const timeout = (0, _react.useRef)(null);
  const containerWidth = (0, _react.useRef)(null);
  const pressAnimation = (0, _react.useRef)(null);
  const [activity, setActivity] = (0, _react.useState)(false);
  const [stateWidth, setStateWidth] = (0, _react.useState)(null);
  const debouncedPress = debouncedPressTime ? (0, _lodash.default)(animateProgressEnd => onPress(animateProgressEnd), debouncedPressTime, {
    trailing: false,
    leading: true
  }) : onPress;
  const layout = {
    backgroundActive,
    backgroundColor,
    backgroundDarker,
    backgroundPlaceholder,
    backgroundProgress,
    backgroundShadow,
    borderColor,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
    height,
    paddingBottom,
    paddingHorizontal,
    paddingTop,
    raiseLevel,
    stateWidth,
    stretch,
    textColor,
    textFontFamily,
    textLineHeight,
    textSize,
    width
  };
  const dynamicStyles = (0, _react.useMemo)(() => {
    return (0, _styles.getStyles)(layout);
  }, [backgroundActive, backgroundColor, backgroundDarker, backgroundPlaceholder, backgroundProgress, backgroundShadow, borderColor, borderRadius, borderBottomLeftRadius, borderBottomRightRadius, borderTopLeftRadius, borderTopRightRadius, borderWidth, height, paddingBottom, paddingHorizontal, paddingTop, raiseLevel, stateWidth, stretch, textColor, textFontFamily, textLineHeight, textSize, width]);
  const getAnimatedValues = () => {
    let width = containerWidth.current ? containerWidth.current * -1 : 0;
    return {
      animatedContainer: {
        opacity: animatedOpacity
      },
      animatedShadow: {
        transform: [{
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -raiseLevel / 2]
          })
        }]
      },
      animatedContent: {
        transform: [{
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, raiseLevel]
          })
        }]
      },
      animatedActive: {
        opacity: animatedActive
      },
      animatedActivity: {
        opacity: activityOpacity,
        transform: [{
          scale: activityOpacity
        }]
      },
      animatedProgress: {
        opacity: loadingOpacity,
        transform: [{
          translateX: animatedLoading.interpolate({
            inputRange: [0, 1],
            outputRange: [width, 0]
          })
        }]
      }
    };
  };
  const onTextLayout = event => {
    containerWidth.current = event.nativeEvent.layout.width;
    animatedOpacity.setValue(1);
    if (width !== null && stretch === false) {
      return;
    }
    if (stateWidth !== event.nativeEvent.layout.width && (stateWidth === null || stateWidth < event.nativeEvent.layout.width)) {
      setStateWidth(event.nativeEvent.layout.width);
    }
  };
  const animatePressIn = (0, _react.useCallback)(() => {
    pressing.current = true;
    pressAnimation.current = _reactNative.Animated.parallel([(0, _helpers.animateTiming)({
      variable: animatedValue,
      toValue: 1,
      duration: _constants.ANIMATED_TIMING_OFF
    }), (0, _helpers.animateTiming)({
      variable: animatedActive,
      toValue: 1,
      duration: _constants.ANIMATED_TIMING_OFF
    }), (0, _helpers.animateTiming)({
      variable: animatedOpacity,
      toValue: progress ? 1 : activeOpacity,
      duration: _constants.ANIMATED_TIMING_OFF
    })]);
    pressAnimation.current.start(() => {
      pressed.current = true;
      onPressedIn && onPressedIn();
    });
  }, []);
  const animateLoadingStart = () => {
    animatedLoading.setValue(0);
    (0, _helpers.animateTiming)({
      variable: animatedLoading,
      toValue: 1,
      duration: progressLoadingTime
    }).start();
  };
  const animateContentOut = () => {
    _reactNative.Animated.parallel([(0, _helpers.animateTiming)({
      variable: loadingOpacity,
      toValue: 1
    }), (0, _helpers.animateElastic)({
      variable: textOpacity,
      toValue: 0
    }), (0, _helpers.animateElastic)({
      variable: activityOpacity,
      toValue: 1
    })]).start();
  };
  const animateProgressEnd = callback => {
    if (progress !== true) {
      return;
    }
    if (timeout?.current) {
      clearTimeout(timeout.current);
    }
    requestAnimationFrame(() => {
      (0, _helpers.animateTiming)({
        variable: animatedLoading,
        toValue: 1
      }).start(() => {
        _reactNative.Animated.parallel([(0, _helpers.animateElastic)({
          variable: textOpacity,
          toValue: 1
        }), (0, _helpers.animateElastic)({
          variable: activityOpacity,
          toValue: 0
        }), (0, _helpers.animateTiming)({
          variable: loadingOpacity,
          toValue: 0,
          delay: 100
        })]).start(() => {
          animateRelease(() => {
            progressing.current = false;
            callback && callback();
            onProgressEnd && onProgressEnd();
          });
        });
      });
    });
  };
  const animateRelease = callback => {
    if (pressAnimation.current) {
      pressAnimation.current.stop();
    }
    pressed.current = false;
    pressing.current = false;
    const end = () => {
      pressed.current = false;
      pressing.current = false;
      callback && callback();
      onPressedOut && onPressedOut();
    };
    if (springRelease === true) {
      _reactNative.Animated.parallel([(0, _helpers.animateSpring)({
        variable: animatedActive,
        toValue: 0
      }), (0, _helpers.animateSpring)({
        variable: animatedValue,
        toValue: 0
      }), (0, _helpers.animateTiming)({
        variable: animatedOpacity,
        toValue: 1
      })]).start(end);
      return;
    }
    _reactNative.Animated.parallel([(0, _helpers.animateTiming)({
      variable: animatedActive,
      toValue: 0,
      duration: _constants.ANIMATED_TIMING_OFF
    }), (0, _helpers.animateTiming)({
      variable: animatedValue,
      toValue: 0,
      duration: _constants.ANIMATED_TIMING_OFF
    }), (0, _helpers.animateTiming)({
      variable: animatedOpacity,
      toValue: 1
    })]).start(end);
  };
  const startProgress = () => {
    progressing.current = true;
    onProgressStart && onProgressStart();
    setActivity(true);
    animateLoadingStart();
    animateContentOut();
  };
  const press = () => {
    actioned.current = true;
    if (progressing.current === true) {
      return;
    }
    if (progress === true) {
      requestAnimationFrame(startProgress);
    }
    debouncedPress(animateProgressEnd);
  };
  const handlePressIn = (0, _react.useCallback)(event => {
    if (disabled === true || !children || progressing.current === true || pressed.current === true) {
      return;
    }
    onPressIn && onPressIn(event);
    animatePressIn();
  }, [disabled, children, onPressIn]);
  const handlePressOut = (0, _react.useCallback)(event => {
    if (disabled === true || !children || progressing.current === true) {
      return;
    }
    onPressOut && onPressOut(event);

    // @ts-ignore
    if (event?.nativeEvent?.contentOffset) {
      animateRelease();
      return;
    }
    if (pressing.current === true || raiseLevel === 0) {
      press();
      if (progress === true) {
        return;
      }
    }
    animateRelease();
  }, [raiseLevel, children, progress, onPress]);
  const animatedValues = getAnimatedValues();
  const renderActivity = (0, _react.useMemo)(() => {
    if (activity === false) {
      return null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        testID: "aws-btn-progress",
        style: [_styles.styles.progress, dynamicStyles.progress, animatedValues.animatedProgress]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        testID: "aws-btn-activity-indicator",
        style: [_styles.styles.container__activity, animatedValues.animatedActivity],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          color: activityColor
        })
      })]
    });
  }, [activity]);
  const renderContent = (0, _react.useMemo)(() => {
    const animatedStyles = {
      opacity: textOpacity,
      transform: [{
        scale: textOpacity
      }]
    };
    if (!children) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Placeholder.default, {
        animated: animatedPlaceholder,
        style: [dynamicStyles.container__placeholder]
      });
    }
    let content = children;
    if (typeof children === 'string') {
      content = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        testID: "aws-btn-content-text",
        style: [_styles.styles.container__text, dynamicStyles.container__text],
        children: children
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
      style: [_styles.styles.container__view, dynamicStyles.container__view, animatedStyles],
      children: [before, content, after]
    });
  }, [children, before, after, textColor]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    testID: "aws-btn-content-view",
    hitSlop: hitSlop,
    onLongPress: onLongPress,
    ...dangerouslySetPressableProps,
    onPressIn: handlePressIn,
    delayLongPress: delayLongPress,
    onPressOut: handlePressOut,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
      testID: "aws-btn-content-2",
      style: [_styles.styles.container, dynamicStyles.container, animatedValues.animatedContainer, style],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        testID: "aws-btn-shadow",
        style: [_styles.styles.shadow, dynamicStyles.shadow, animatedValues.animatedShadow]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        testID: "aws-btn-bottom",
        style: [_styles.styles.bottom, dynamicStyles.bottom]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        testID: "aws-btn-content",
        style: [_styles.styles.content, dynamicStyles.content, animatedValues.animatedContent],
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          testID: "aws-btn-text",
          style: [_styles.styles.text, dynamicStyles.text],
          onLayout: onTextLayout,
          children: [extra, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
            testID: "aws-btn-active-background",
            style: [_styles.styles.activeBackground, dynamicStyles.activeBackground, animatedValues.animatedActive]
          }), renderActivity, renderContent]
        })
      })]
    })
  });
};
var _default = exports.default = AwesomeButton;
//# sourceMappingURL=Button.js.map