import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Image, View} from 'react-native';
import {ArrowBackSvg, InfoSvg} from '@/assets/svg';
import CustomBtn from '../../shared/CustomBtn';
import HeaderBackground from '@/components/shared/HeaderBackground';
import {useTypedNavigation} from '@/hooks/useTypedNavigation';

interface ILevelsHeader {
  type: 'levels' | 'info';
}

const LevelsHeader: FC<ILevelsHeader> = ({type}) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation = useTypedNavigation();

  const renderLeftBtn = () => {
    return type === 'info' ? (
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
    );
  };

  const renderRightBtn = () => {
    return type === 'levels' ? (
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
    );
  };

  return (
    <HeaderBackground>
      {renderLeftBtn()}
      <Image source={require('@/assets/img/header_logo.png')} />
      {renderRightBtn()}
    </HeaderBackground>
  );
};

export default LevelsHeader;
