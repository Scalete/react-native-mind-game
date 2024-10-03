import {FontsBaloo2, text} from '@/modules/fonts';
import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    centerdView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      maxWidth: 283,
      width: '80%',
      height: 182,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 3,
      borderRadius: 21,
    },
    modalLabel: {
      width: 190,
      paddingVertical: 21,
      paddingHorizontal: 28,
      borderRadius: 14,
    },
    modalLabelText: {
      textAlign: 'center',
      textTransform: 'uppercase',
      ...text(FontsBaloo2.Font400, 26, 43, '#FFFFFF'),
    },
    modalBtns: {
      width: 160,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
  });

  return styles;
};
