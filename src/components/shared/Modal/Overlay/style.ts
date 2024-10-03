import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      top: 0,
      left: 0,
    },
  });

  return styles;
};
