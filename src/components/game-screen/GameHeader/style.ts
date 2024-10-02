import {FontsBaloo2, text} from '@/modules/fonts';
import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    progress: {
      width: 48,
      borderRadius: 71,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressText: {
      textAlign: 'center',
      ...text(FontsBaloo2.Font400, 18, 29, '#fff'),
    },
  });

  return styles;
};
