import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Image, Text} from 'react-native';
import {ArrowBackSvg} from '@/assets/svg';
import CustomBtn from '../../shared/CustomBtn';
import HeaderBackground from '@/components/shared/HeaderBackground';
import LinearGradient from 'react-native-linear-gradient';
import {useTypedNavigation} from '@/hooks/useTypedNavigation';

const GameHeader: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation = useTypedNavigation();

  return (
    <HeaderBackground>
      <CustomBtn
        content={<ArrowBackSvg />}
        containerStyles={{width: 30, height: 30}}
        btnStyles={{width: 28, height: 28}}
        action={() => {
          navigation.goBack();
        }}
      />
      <Image source={require('@/assets/img/heart.png')} />
      <LinearGradient colors={['#00FFB3', '#24BFC9']} style={styles.progress}>
        <Text style={styles.progressText}>2/8</Text>
      </LinearGradient>
    </HeaderBackground>
  );
};

export default GameHeader;
