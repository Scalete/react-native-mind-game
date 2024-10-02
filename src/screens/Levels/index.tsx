import {useEffect, useMemo} from 'react';
import {getStyle} from './style';
import {StatusBar, View} from 'react-native';
import LevelsHeader from '@/components/levels-screen/LevelsHeader';
import useStatusBarVisibility from '@/hooks/useStatusBarVisibility';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import LevelsContent from '@/components/levels-screen/LevelsContent';

const LevelsScreen = () => {
  const styles = useMemo(() => getStyle(), []);

  useStatusBarVisibility(false);

  return (
    <LinearGradient
      colors={['#6A6DDA', '#655DD5', '#8043DA']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LevelsHeader type="levels" />
      <LevelsContent />
    </LinearGradient>
  );
};

export default LevelsScreen;
