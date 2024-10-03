import {
  resetGame,
  setCurrentCards,
  setCurrentImageSize,
  setCurrentLevel,
} from '@/store/game';
import {NumberedImage} from '@/templates/GridTemplate';
import {Dispatch} from '@reduxjs/toolkit';
import {getImagesForLevel} from './constants';
import {resetModal} from '@/store/modal';

export const renderImageGrid = (images: any[]) => {
  const numberedImages: NumberedImage[] = images.map((image, index) => ({
    id: index + 1,
    image,
    active: false,
  }));

  const doubledImages = numberedImages.concat(numberedImages);
  return shuffleArray(doubledImages);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const onRenderGameGrid = (level: number, dispatch: Dispatch) => {
  dispatch(resetGame());
  dispatch(resetModal());
  dispatch(setCurrentLevel(level));
  const images = getImagesForLevel(level);
  dispatch(setCurrentImageSize(Math.min(images.length > 4 ? 102 : 150)));
  dispatch(setCurrentCards(renderImageGrid(images)));
};
