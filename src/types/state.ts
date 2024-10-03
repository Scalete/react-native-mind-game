import {NumberedImage} from '@/templates/GridTemplate';

export interface IGameState {
  currentLevel: number | null;
  currentCards: NumberedImage[];
  selectedCard: number | null;
  selectedCardArrIndex: number | null;
  currentImageSize: number;
  cuurentProgress: number;
  gameLoading: boolean;
  lifes: number;
}

export interface IModalState {
  modalVisible: boolean;
  text: string;
}
