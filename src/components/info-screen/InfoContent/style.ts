import {FontsBaloo2, text} from '@/modules/fonts';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 25,
      paddingTop: 30,
      gap: 10,
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      ...text(FontsBaloo2.Font600, 22, 35, '#fff'),
    },
    descr: {
      ...text(FontsBaloo2.Font400, 18, 29, '#fff'),
    },
  });

  return styles;
};
