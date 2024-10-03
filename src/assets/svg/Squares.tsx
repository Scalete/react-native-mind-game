import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';
import {SvgProps} from './types';

const SquaresSvg = (props: SvgProps) => {
  return (
    <Svg width="95" height="96" viewBox="0 0 95 96" fill="none" {...props}>
      <Path
        d="M33.2407 35.7552V7.03641C33.2407 4.25488 35.4956 2 38.2771 2H88.6413C91.4228 2 93.6777 4.25488 93.6777 7.03641V57.4005C93.6777 60.1821 91.4228 62.437 88.6413 62.437H59.6605"
        stroke="url(#paint0_linear_2073_407)"
        strokeWidth="2.09335"
      />
      <Rect
        x="1.04667"
        y="-1.04667"
        width="58.3436"
        height="58.3436"
        rx="3.98974"
        transform="matrix(1 0 0 -1 0 93.5839)"
        stroke="url(#paint1_linear_2073_407)"
        strokeWidth="2.09335"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2073_407"
          x1="-71.013"
          y1="98.1955"
          x2="71.1191"
          y2="150.593"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#2BD5E8" />
          <Stop offset="1" stopColor="#8864E8" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2073_407"
          x1="-18.5709"
          y1="120.874"
          x2="79.9825"
          y2="97.1034"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2BD5E8" />
          <Stop offset="1" stopColor="#8864E8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SquaresSvg;
