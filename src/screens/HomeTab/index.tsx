import {Dimensions, Image, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStyle} from './style';
import {useMemo} from 'react';
import CustomBtn from '../../components/shared/CustomBtn/CustomBtn';

const HomeTab = () => {
  const styles = useMemo(() => getStyle(), []);
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={['#43BCF0', '#541896', '#711280']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            width: 248,
            height: 248,
            top: (height - 248) / 2 - height * 0.11,
            left: (width - 248) / 2,
          }}
          resizeMode="contain"
          source={require('../../assets/img/main_screen_logo.png')}
        />
        <CustomBtn
          containerStyles={{
            width: 160,
            justifyContent: 'flex-end',
            marginBottom: 90,
          }}
          btnStyles={{width: 160}}
          content="start"
          action={() => {}}
          isText={true}
        />
      </LinearGradient>
    </>
  );
};

export default HomeTab;
