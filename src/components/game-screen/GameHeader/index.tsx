import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Image, Text} from 'react-native';
import {ArrowBackSvg} from '@/assets/svg';
import CustomBtn from '../../shared/CustomBtn';
import HeaderBackground from '@/components/shared/HeaderBackground';
import LinearGradient from 'react-native-linear-gradient';
import {useTypedNavigation} from '@/hooks/useTypedNavigation';
import {useAppDispatch, useGame} from '@/hooks/reduxHook';
import {resetGame} from '@/store/game';

const GameHeader: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation = useTypedNavigation();
  const dispatch = useAppDispatch();
  const {cuurentProgress, currentCards, lifes} = useGame();

  return (
    <HeaderBackground>
      <CustomBtn
        content={<ArrowBackSvg />}
        containerStyles={{width: 30, height: 30}}
        btnStyles={{width: 28, height: 28}}
        action={() => {
          dispatch(resetGame());
          navigation.goBack();
        }}
      />
      {lifes ? <Image source={require('@/assets/img/heart.png')} /> : <></>}
      <LinearGradient colors={['#00FFB3', '#24BFC9']} style={styles.progress}>
        <Text style={styles.progressText}>
          {cuurentProgress}/{currentCards.length}
        </Text>
      </LinearGradient>
    </HeaderBackground>
  );
};

export default GameHeader;
