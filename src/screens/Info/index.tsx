import {useMemo} from 'react';
import {getStyle} from './style';
import {StatusBar} from 'react-native';
import LevelsHeader from '@/components/levels-screen/LevelsHeader';
import useStatusBarVisibility from '@/hooks/useStatusBarVisibility';
import LinearGradient from 'react-native-linear-gradient';
import InfoContent from '@/components/info-screen/InfoContent';

const InfoScreen = () => {
  const styles = useMemo(() => getStyle(), []);

  useStatusBarVisibility(false, true);

  return (
    <LinearGradient
      colors={['#43BCF0', '#471280']}
      start={{x: 0, y: 1}}
      end={{x: 2, y: 0}}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LevelsHeader type="info" />
      <InfoContent />
    </LinearGradient>
  );
};

export default InfoScreen;
