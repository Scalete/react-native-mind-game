import React, {FC, useMemo} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {getStyle} from './style';
import LinearGradient from 'react-native-linear-gradient';

interface ICustomBtn {
  content: string | React.ReactNode;
  action: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  btnStyles?: StyleProp<ViewStyle>;
  isText?: boolean;
}

const CustomBtn: FC<ICustomBtn> = props => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <LinearGradient
      colors={['#43BCF0', '#541896', '#711280']}
      style={[styles.container, props.containerStyles]}>
      <TouchableOpacity
        style={[styles.btn, props.btnStyles]}
        onPress={props.action}>
        {props.isText ? (
          <Text style={styles.btnText}>{props.content}</Text>
        ) : (
          props.content
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomBtn;
