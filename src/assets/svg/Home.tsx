import Svg, {Defs, Path} from 'react-native-svg';
import {SvgProps} from './types';

const HomeSvg = (props: SvgProps) => {
  return (
    <Svg
      width="16.399902"
      height="14.844727"
      viewBox="0 0 16.3999 14.8447"
      fill="none"
      {...props}>
      <Defs />
      <Path
        id="Vector"
        d="M6.41 13.95L6.41 9.49L9.98 9.49L9.98 13.95C9.98 14.44 10.38 14.84 10.87 14.84L13.54 14.84C14.03 14.84 14.43 14.44 14.43 13.95L14.43 7.71L15.95 7.71C16.36 7.71 16.55 7.2 16.24 6.93L8.79 0.22C8.45 -0.08 7.93 -0.08 7.6 0.22L0.14 6.93C-0.16 7.2 0.03 7.71 0.44 7.71L1.95 7.71L1.95 13.95C1.95 14.44 2.36 14.84 2.85 14.84L5.52 14.84C6.01 14.84 6.41 14.44 6.41 13.95Z"
        fill="#FFFFFF"
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
    </Svg>
  );
};

export default HomeSvg;
