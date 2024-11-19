"use strict";

import React from 'react';
import AwesomeButton from '../Button';
import getTheme from './themes';
import { jsx as _jsx } from "react/jsx-runtime";
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
  const theme = config || getTheme(index, name);
  const styles = disabled ? theme.buttons.disabled : theme.buttons[type];
  const sizeObj = size ? theme.size[size] : {};
  return /*#__PURE__*/_jsx(AwesomeButton, {
    ...styles,
    ...sizeObj,
    disabled: disabled,
    ...extra
  });
}
export default Themed;
//# sourceMappingURL=ThemedButton.js.map