import {StyleSheet} from 'react-native';
import {FontsBaloo2, text} from '../../../modules/fonts';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      marginTop: 'auto',
      borderRadius: 50,
    },
    btn: {
      backgroundColor: '#6EBCF7',
      borderRadius: 50,
    },
    btnText: {
      textAlign: 'center',
      textTransform: 'uppercase',
      ...text(FontsBaloo2.Font400, 24, 38, '#FFFFFF'),
    },
  });

  return styles;
};
