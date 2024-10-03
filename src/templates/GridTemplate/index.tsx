import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {getStyle} from './style';
import GameButtonWrapper from '../GameButtonWrapper';
import {useDispatch} from 'react-redux';
import {
  setCurrentProgress,
  setLifes,
  setSelectedCard,
  setSelectedCardArrIndex,
} from '@/store/game';
import {useGame} from '@/hooks/reduxHook';
import {useSharedValue} from 'react-native-reanimated';
import {setModalText, setModalVisible} from '@/store/modal';

export interface NumberedImage {
  id: number;
  image: any;
  active: boolean;
}

const GridTemplate: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useDispatch();
  const {
    currentCards,
    selectedCard,
    currentImageSize,
    selectedCardArrIndex,
    cuurentProgress,
    lifes,
  } = useGame();
  const isFlippedArray = currentCards.map(() => useSharedValue(false));

  useEffect(() => {
    if (cuurentProgress === currentCards.length) {
      dispatch(setModalText('You Won!'));
      dispatch(setModalVisible(true));
    }
  }, [cuurentProgress]);

  const onTouchCardLogic = useCallback(
    (imageId: number, imageIndex: number) => {
      if (!selectedCard) {
        //flipping card first time
        dispatch(setSelectedCard(imageId));
        dispatch(setSelectedCardArrIndex(imageIndex));
      } else {
        if (selectedCard !== imageId) {
          //if wrong then card flips to normal
          setTimeout(() => {
            handleFlip(imageIndex);
            handleFlip(selectedCardArrIndex as number);
          }, 800);

          if (lifes) {
            dispatch(setLifes(lifes - 1));
          } else {
            dispatch(setModalVisible(true));
            dispatch(setModalText('You lost!'));
          }
        } else {
          // if true then progress adds
          dispatch(setCurrentProgress(cuurentProgress + 2));
        }

        dispatch(setSelectedCard(null));
        dispatch(setSelectedCardArrIndex(null));
      }
    },
    [dispatch, selectedCard],
  );

  const handleFlip = (index: number) => {
    isFlippedArray[index].value = !isFlippedArray[index].value;
  };

  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {currentCards.map((image, index) => (
        <GameButtonWrapper
          key={index}
          imgSize={currentImageSize}
          image={image}
          imageIndex={index}
          onTouchCardLogic={onTouchCardLogic}
          waitingTime={
            currentCards.length < 5
              ? 2000
              : currentCards.length < 10
              ? 4000
              : 6000
          }
          isFlipped={isFlippedArray[index]}
          onFlip={() => handleFlip(index)}
        />
      ))}
    </ScrollView>
  );
};

export default GridTemplate;
