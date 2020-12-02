/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconFanhui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M625.777778 1014.857143 201.142857 590.222222c-42.666667-42.666667-42.666667-112.761905 0-155.428571L626.793651 9.142857c11.174603-12.190476 30.47619-12.190476 42.666667 0 12.190476 11.174603 12.190476 30.47619 0 42.666667l-425.650794 426.666667c-9.142857 9.142857-14.222222 21.333333-14.222222 34.539683 0 13.206349 5.079365 25.396825 14.222222 34.539683l424.634921 424.634921c12.190476 11.174603 12.190476 30.47619 0 42.666667-6.095238 6.095238-13.206349 9.142857-21.333333 9.142857C638.984127 1024 631.873016 1020.952381 625.777778 1014.857143z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFanhui.defaultProps = {
  size: 18,
};

IconFanhui = React.memo ? React.memo(IconFanhui) : IconFanhui;

export default IconFanhui;
