import {FC, useEffect, useMemo, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import FlippingCard from '@/components/shared/FlippingCard';
import {getStyle} from './style';
import {NumberedImage} from '../GridTemplate';

interface IGameButtonWrapper {
  imgSize: number;
  image: NumberedImage;
  onTouchCardLogic: (imageId: number, imageIndex: number) => void;
  waitingTime: 2000 | 4000 | 6000;
  isFlipped: any;
  onFlip: () => void;
  imageIndex: number;
}

const GameButtonWrapper: FC<IGameButtonWrapper> = props => {
  const styles = useMemo(() => getStyle(), []);

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      props.onFlip();

      const resetTimeout = setTimeout(() => {
        props.onFlip();
      }, props.waitingTime);

      return () => clearTimeout(resetTimeout);
    }, 300);

    return () => clearTimeout(flipTimeout);
  }, [props.waitingTime]);

  const handlePress = () => {
    if (!props.isFlipped.value) {
      props.onFlip();
      props.onTouchCardLogic(props.image.id, props.imageIndex);
    }
  };

  const RegularContent = () => {
    return (
      <Image
        style={{width: props.imgSize, height: props.imgSize}}
        source={require('@/assets/img/game/content/template.png')}
      />
    );
  };

  const FlippedContent = () => {
    return (
      <Image
        style={{width: props.imgSize, height: props.imgSize}}
        source={props.image.image}
      />
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <FlippingCard
        isFlipped={props.isFlipped}
        cardStyle={[{width: props.imgSize, height: props.imgSize}]}
        FlippedContent={<FlippedContent />}
        RegularContent={<RegularContent />}
      />
    </TouchableOpacity>
  );
};

export default GameButtonWrapper;
