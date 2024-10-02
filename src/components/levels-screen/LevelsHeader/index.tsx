import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowBackSvg, InfoSvg} from '@/assets/svg';
import CustomBtn from '../../shared/CustomBtn';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ILevelsHeader {
  type: 'levels' | 'info';
}

const LevelsHeader: FC<ILevelsHeader> = ({type}) => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#43BCF0', '#571280']} style={styles.container}>
      {type === 'info' ? (
        <CustomBtn
          content={<ArrowBackSvg />}
          containerStyles={{width: 30, height: 30}}
          btnStyles={{width: 28, height: 28}}
          action={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <View style={{width: 30, height: 30}}></View>
      )}
      <Image source={require('@/assets/img/header_logo.png')} />

      {type === 'levels' ? (
        <CustomBtn
          containerStyles={{width: 30, height: 30}}
          btnStyles={{width: 28, height: 28}}
          content={<InfoSvg />}
          action={() => {
            navigation.navigate('InfoScreen');
          }}
        />
      ) : (
        <View style={{width: 30, height: 30}}></View>
      )}
    </LinearGradient>
  );
};

export default LevelsHeader;
