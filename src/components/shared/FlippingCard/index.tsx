import React, {FC, ReactNode, useMemo} from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {getStyle} from './style';

interface IFlippingCardProps {
  isFlipped: Animated.SharedValue<boolean>;
  cardStyle: ViewStyle | ViewStyle[];
  direction?: 'x' | 'y';
  duration?: number;
  RegularContent: ReactNode;
  FlippedContent: ReactNode;
}

const FlippingCard: FC<IFlippingCardProps> = ({
  isFlipped,
  cardStyle,
  direction = 'y',
  duration = 500,
  RegularContent,
  FlippedContent,
}) => {
  const isDirectionX = direction === 'x';
  const styles = useMemo(() => getStyle(), []);

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, {duration});

    return {
      transform: [
        isDirectionX ? {rotateX: rotateValue} : {rotateY: rotateValue},
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, {duration});

    return {
      transform: [
        isDirectionX ? {rotateX: rotateValue} : {rotateY: rotateValue},
      ],
    };
  });

  return (
    <>
      <Animated.View
        style={[styles.regularCard, cardStyle, regularCardAnimatedStyle]}>
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[styles.flippedCard, cardStyle, flippedCardAnimatedStyle]}>
        {FlippedContent}
      </Animated.View>
    </>
  );
};

export default FlippingCard;
