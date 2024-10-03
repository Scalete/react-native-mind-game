import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      gap: 15,
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  });

  return styles;
};
