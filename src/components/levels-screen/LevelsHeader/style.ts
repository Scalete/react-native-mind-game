import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const getStyle = (insets: EdgeInsets) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 10,
      paddingTop: insets.top,
    },
  });

  return styles;
};
