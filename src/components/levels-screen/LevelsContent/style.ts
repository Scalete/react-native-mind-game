import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      paddingTop: 40,
      gap: 20,
      justifyContent: 'center',
    },
    imageContainer: {
      alignItems: 'center',
    },
  });

  return styles;
};
