"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.getStyles = void 0;
var _reactNative = require("react-native");
const getStyles = ({
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
}) => {
  const calcHeight = height + paddingBottom + paddingTop;
  const calcWidth = stretch ? '100%' : width || stateWidth || null;
  const borderRadiusObject = {};
  borderRadiusObject.borderRadius = borderRadius;
  borderRadiusObject.borderBottomLeftRadius = borderBottomLeftRadius;
  borderRadiusObject.borderBottomRightRadius = borderBottomRightRadius;
  borderRadiusObject.borderTopLeftRadius = borderTopLeftRadius;
  borderRadiusObject.borderTopRightRadius = borderTopRightRadius;
  const dimensionsDiff = {
    width: calcWidth,
    height: calcHeight - raiseLevel
  };
  const value = {
    container: {
      height: calcHeight,
      width: calcWidth
    },
    container__text: {
      color: textColor,
      fontSize: textSize,
      fontFamily: textFontFamily
    },
    container__placeholder: {
      height: textLineHeight,
      backgroundColor: backgroundPlaceholder
    },
    container__view: {
      paddingBottom,
      paddingTop,
      paddingHorizontal
    },
    shadow: {
      bottom: -raiseLevel / 2,
      height: height - raiseLevel,
      ...borderRadiusObject,
      backgroundColor: backgroundShadow
    },
    bottom: {
      ...borderRadiusObject,
      backgroundColor: backgroundDarker,
      ...dimensionsDiff
    },
    progress: {
      ...dimensionsDiff,
      backgroundColor: backgroundProgress
    },
    content: {
      ...dimensionsDiff,
      ...borderRadiusObject
    },
    activeBackground: {
      ...dimensionsDiff,
      backgroundColor: backgroundActive
    },
    text: {
      borderColor,
      borderWidth,
      ...borderRadiusObject,
      backgroundColor
    }
  };
  return value;
};
exports.getStyles = getStyles;
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    zIndex: 10
  },
  container__text: {
    fontWeight: 'bold',
    zIndex: 10,
    textAlign: 'center'
  },
  container__view: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container__placeholder: {
    width: '55%',
    overflow: 'hidden'
  },
  container__placeholder__bar: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    width: '100%'
  },
  container__activity: {
    position: 'absolute',
    zIndex: 5
  },
  shadow: {
    width: '98%',
    position: 'absolute',
    left: '1%'
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  progress: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  activeBackground: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=styles.js.map