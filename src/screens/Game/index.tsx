import {FC, useEffect, useMemo} from 'react';
import {getStyle} from './style';
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import useStatusBarVisibility from '@/hooks/useStatusBarVisibility';
import GameHeader from '@/components/game-screen/GameHeader';
import {backgroundGameImages} from '@/utils/constants';
import GameContent from '@/components/game-screen/GameContent';
import {useAppDispatch, useGame} from '@/hooks/reduxHook';
import {setCurrentCards, setCurrentLevel} from '@/store/game';
import CustomModal from '@/components/shared/Modal';

const GameScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const {currentLevel, gameLoading} = useGame();

  useStatusBarVisibility(false, true);

  useEffect(() => {
    return () => {
      dispatch(setCurrentCards([]));
      dispatch(setCurrentLevel(null));
    };
  }, []);

  return (
    <ImageBackground
      source={backgroundGameImages[currentLevel as any]}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <GameHeader />
      {gameLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'#8864E8'} />
        </View>
      ) : (
        <GameContent />
      )}
      <CustomModal />
    </ImageBackground>
  );
};

export default GameScreen;
