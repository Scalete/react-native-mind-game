import {Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStyle} from './style';
import {useMemo} from 'react';
import CustomBtn from '@/components/shared/CustomBtn';
import {useNavigation} from '@react-navigation/native';
import useStatusBarVisibility from '@/hooks/useStatusBarVisibility';

const HomeTab = () => {
  const styles = useMemo(() => getStyle(), []);
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const logoSize = width * 0.5;
  const logoMarginTop = (height - logoSize) / 2 - height * 0.11;

  useStatusBarVisibility(true);

  return (
    <>
      <LinearGradient
        colors={['#43BCF0', '#541896', '#711280']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            maxHeight: 248,
            maxWidth: 248,
            width: logoSize,
            height: logoSize,
            top: logoMarginTop,
            left: (width - logoSize) / 2,
          }}
          resizeMode="contain"
          source={require('@/assets/img/main_screen_logo.png')}
        />
        <CustomBtn
          containerStyles={{
            width: 160,
            justifyContent: 'flex-end',
            marginBottom: 90,
          }}
          btnStyles={{width: 160}}
          content="start"
          action={() => navigation.navigate('LevelsScreen')}
          isText={true}
        />
      </LinearGradient>
    </>
  );
};

export default HomeTab;
