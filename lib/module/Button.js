"use strict";

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, View, Animated, Text } from 'react-native';
import { animateTiming, animateElastic, animateSpring } from './helpers';
import debounce from 'lodash.debounce';
import { styles, getStyles } from './styles';
import { ANIMATED_TIMING_LOADING, ANIMATED_TIMING_OFF, DEFAULT_ACTIVITY_COLOR, DEFAULT_ACTIVE_OPACITY, DEFAULT_BACKGROUND_ACTIVE, DEFAULT_BACKGROUND_COLOR, DEFAULT_BACKGROUND_DARKER, DEFAULT_BACKGROUND_SHADOW, DEFAULT_BORDER_RADIUS, DEFAULT_BORDER_WIDTH, DEFAULT_DEBOUNCED_PRESS_TIME, DEFAULT_HEIGHT, DEFAULT_HORIZONTAL_PADDING, DEFAULT_LINE_HEIGHT, DEFAULT_RAISE_LEVEL, DEFAULT_TEXT_COLOR, DEFAULT_TEXT_SIZE, DEFAULT_WIDTH } from './constants';
import Placeholder from './Placeholder';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const AwesomeButton = ({
  activityColor = DEFAULT_ACTIVITY_COLOR,
  activeOpacity = DEFAULT_ACTIVE_OPACITY,
  animatedPlaceholder = true,
  backgroundActive = DEFAULT_BACKGROUND_ACTIVE,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  backgroundDarker = DEFAULT_BACKGROUND_DARKER,
  backgroundPlaceholder = DEFAULT_BACKGROUND_SHADOW,
  backgroundProgress = DEFAULT_BACKGROUND_SHADOW,
  backgroundShadow = DEFAULT_BACKGROUND_SHADOW,
  borderColor,
  borderRadius = DEFAULT_BORDER_RADIUS,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth = DEFAULT_BORDER_WIDTH,
  children = null,
  before = null,
  after = null,
  disabled = false,
  height = DEFAULT_HEIGHT,
  hitSlop = null,
  debouncedPressTime = DEFAULT_DEBOUNCED_PRESS_TIME,
  paddingHorizontal = DEFAULT_HORIZONTAL_PADDING,
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
  progressLoadingTime = ANIMATED_TIMING_LOADING,
  raiseLevel = DEFAULT_RAISE_LEVEL,
  springRelease = true,
  stretch = false,
  style = null,
  textColor = DEFAULT_TEXT_COLOR,
  textLineHeight = DEFAULT_LINE_HEIGHT,
  textSize = DEFAULT_TEXT_SIZE,
  textFontFamily,
  width = DEFAULT_WIDTH,
  extra = null
}) => {
  const loadingOpacity = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;
  const activityOpacity = useRef(new Animated.Value(0)).current;
  const animatedActive = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedLoading = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(width === null && !stretch === true ? 0 : 1)).current;
  const pressing = useRef(false);
  const pressed = useRef(false);
  const actioned = useRef(false);
  const progressing = useRef(false);
  const timeout = useRef(null);
  const containerWidth = useRef(null);
  const pressAnimation = useRef(null);
  const [activity, setActivity] = useState(false);
  const [stateWidth, setStateWidth] = useState(null);
  const debouncedPress = debouncedPressTime ? debounce(animateProgressEnd => onPress(animateProgressEnd), debouncedPressTime, {
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
  const dynamicStyles = useMemo(() => {
    return getStyles(layout);
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
  const animatePressIn = useCallback(() => {
    pressing.current = true;
    pressAnimation.current = Animated.parallel([animateTiming({
      variable: animatedValue,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
      variable: animatedActive,
      toValue: 1,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
      variable: animatedOpacity,
      toValue: progress ? 1 : activeOpacity,
      duration: ANIMATED_TIMING_OFF
    })]);
    pressAnimation.current.start(() => {
      pressed.current = true;
      onPressedIn && onPressedIn();
    });
  }, []);
  const animateLoadingStart = () => {
    animatedLoading.setValue(0);
    animateTiming({
      variable: animatedLoading,
      toValue: 1,
      duration: progressLoadingTime
    }).start();
  };
  const animateContentOut = () => {
    Animated.parallel([animateTiming({
      variable: loadingOpacity,
      toValue: 1
    }), animateElastic({
      variable: textOpacity,
      toValue: 0
    }), animateElastic({
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
      animateTiming({
        variable: animatedLoading,
        toValue: 1
      }).start(() => {
        Animated.parallel([animateElastic({
          variable: textOpacity,
          toValue: 1
        }), animateElastic({
          variable: activityOpacity,
          toValue: 0
        }), animateTiming({
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
      Animated.parallel([animateSpring({
        variable: animatedActive,
        toValue: 0
      }), animateSpring({
        variable: animatedValue,
        toValue: 0
      }), animateTiming({
        variable: animatedOpacity,
        toValue: 1
      })]).start(end);
      return;
    }
    Animated.parallel([animateTiming({
      variable: animatedActive,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
      variable: animatedValue,
      toValue: 0,
      duration: ANIMATED_TIMING_OFF
    }), animateTiming({
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
  const handlePressIn = useCallback(event => {
    if (disabled === true || !children || progressing.current === true || pressed.current === true) {
      return;
    }
    onPressIn && onPressIn(event);
    animatePressIn();
  }, [disabled, children, onPressIn]);
  const handlePressOut = useCallback(event => {
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
  const renderActivity = useMemo(() => {
    if (activity === false) {
      return null;
    }
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Animated.View, {
        testID: "aws-btn-progress",
        style: [styles.progress, dynamicStyles.progress, animatedValues.animatedProgress]
      }), /*#__PURE__*/_jsx(Animated.View, {
        testID: "aws-btn-activity-indicator",
        style: [styles.container__activity, animatedValues.animatedActivity],
        children: /*#__PURE__*/_jsx(ActivityIndicator, {
          color: activityColor
        })
      })]
    });
  }, [activity]);
  const renderContent = useMemo(() => {
    const animatedStyles = {
      opacity: textOpacity,
      transform: [{
        scale: textOpacity
      }]
    };
    if (!children) {
      return /*#__PURE__*/_jsx(Placeholder, {
        animated: animatedPlaceholder,
        style: [dynamicStyles.container__placeholder]
      });
    }
    let content = children;
    if (typeof children === 'string') {
      content = /*#__PURE__*/_jsx(Text, {
        testID: "aws-btn-content-text",
        style: [styles.container__text, dynamicStyles.container__text],
        children: children
      });
    }
    return /*#__PURE__*/_jsxs(Animated.View, {
      style: [styles.container__view, dynamicStyles.container__view, animatedStyles],
      children: [before, content, after]
    });
  }, [children, before, after, textColor]);
  return /*#__PURE__*/_jsx(Pressable, {
    testID: "aws-btn-content-view",
    hitSlop: hitSlop,
    onLongPress: onLongPress,
    ...dangerouslySetPressableProps,
    onPressIn: handlePressIn,
    delayLongPress: delayLongPress,
    onPressOut: handlePressOut,
    children: /*#__PURE__*/_jsxs(Animated.View, {
      testID: "aws-btn-content-2",
      style: [styles.container, dynamicStyles.container, animatedValues.animatedContainer, style],
      children: [/*#__PURE__*/_jsx(Animated.View, {
        testID: "aws-btn-shadow",
        style: [styles.shadow, dynamicStyles.shadow, animatedValues.animatedShadow]
      }), /*#__PURE__*/_jsx(View, {
        testID: "aws-btn-bottom",
        style: [styles.bottom, dynamicStyles.bottom]
      }), /*#__PURE__*/_jsx(Animated.View, {
        testID: "aws-btn-content",
        style: [styles.content, dynamicStyles.content, animatedValues.animatedContent],
        children: /*#__PURE__*/_jsxs(View, {
          testID: "aws-btn-text",
          style: [styles.text, dynamicStyles.text],
          onLayout: onTextLayout,
          children: [extra, /*#__PURE__*/_jsx(Animated.View, {
            testID: "aws-btn-active-background",
            style: [styles.activeBackground, dynamicStyles.activeBackground, animatedValues.animatedActive]
          }), renderActivity, renderContent]
        })
      })]
    })
  });
};
export default AwesomeButton;
//# sourceMappingURL=Button.js.map