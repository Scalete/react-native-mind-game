import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });

  return styles;
};
