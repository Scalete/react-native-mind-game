import {useMemo} from 'react';
import {View, Dimensions} from 'react-native';
import {getStyle} from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

const Overlay = () => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View
      style={[styles.overlay, {width: windowWidth, height: windowHeight}]}
    />
  );
};

export default Overlay;
