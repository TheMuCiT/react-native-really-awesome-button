"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateElastic = animateElastic;
exports.animateLoop = animateLoop;
exports.animateSpring = animateSpring;
exports.animateTiming = animateTiming;
var _reactNative = require("react-native");
var _constants = require("./constants");
function animateTiming({
  variable,
  toValue,
  duration = _constants.ANIMATED_TIMING_IN,
  delay = 0,
  easing = _reactNative.Easing.out(_reactNative.Easing.cubic)
}) {
  return _reactNative.Animated.timing(variable, {
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver: true
  });
}
function animateLoop({
  variable,
  toValue,
  duration = 3223,
  easing = _reactNative.Easing.linear
}) {
  const animation = _reactNative.Animated.loop(_reactNative.Animated.timing(variable, {
    toValue,
    duration,
    easing,
    isInteraction: false,
    useNativeDriver: true
  }));
  animation.start();
  return animation;
}
function animateSpring({
  variable,
  toValue,
  delay = 0,
  tension = _constants.ANIMATED_SPRING_TENSION,
  friction = _constants.ANIMATED_SPRING_FRICTION
}) {
  return _reactNative.Animated.spring(variable, {
    toValue,
    tension,
    friction,
    delay,
    useNativeDriver: true
  });
}
function animateElastic(params) {
  return animateTiming({
    duration: _constants.ANIMATED_ELASTIC_DURATION,
    easing: _reactNative.Easing.elastic(_constants.ANIMATED_ELASTIC_BOUNCINESS),
    ...params
  });
}
//# sourceMappingURL=helpers.js.map