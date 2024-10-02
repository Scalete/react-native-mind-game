import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {ImageBackground, StatusBar} from 'react-native';
import useStatusBarVisibility from '@/hooks/useStatusBarVisibility';
import GameHeader from '@/components/game-screen/GameHeader';
import {GameScreenRouteProp} from '@/types/navigation';
import {backgroundGameImages} from '@/utils/constants';

interface GameScreenProps {
  route: GameScreenRouteProp;
}

const GameScreen: FC<GameScreenProps> = ({route}) => {
  const styles = useMemo(() => getStyle(), []);
  const {bgIndex} = route.params;

  useStatusBarVisibility(false, true);

  return (
    <ImageBackground
      source={backgroundGameImages[bgIndex]}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <GameHeader />
    </ImageBackground>
  );
};

export default GameScreen;
