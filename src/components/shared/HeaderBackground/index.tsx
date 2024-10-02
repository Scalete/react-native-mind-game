import {FC, PropsWithChildren, useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getStyle} from './style';

const HeaderBackground: FC<PropsWithChildren> = props => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);

  return (
    <LinearGradient colors={['#43BCF0', '#571280']} style={styles.container}>
      {props.children}
    </LinearGradient>
  );
};

export default HeaderBackground;
