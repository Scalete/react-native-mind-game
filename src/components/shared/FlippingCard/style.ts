import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    regularCard: {
      position: 'absolute',
      zIndex: 1,
    },
    flippedCard: {
      backfaceVisibility: 'hidden',
      zIndex: 2,
    },
  });

  return styles;
};
