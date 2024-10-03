import {IGameState} from '@/types/state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IGameState = {
  currentLevel: null,
  currentCards: [],
  selectedCard: null,
  selectedCardArrIndex: null,
  currentImageSize: 150,
  cuurentProgress: 0,
  gameLoading: false,
  lifes: 1,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload;
    },
    setCurrentCards: (state, action: PayloadAction<any[]>) => {
      state.currentCards = action.payload;
    },
    setCurrentProgress: (state, action) => {
      state.cuurentProgress = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    setSelectedCardArrIndex: (state, action) => {
      state.selectedCardArrIndex = action.payload;
    },
    setCurrentImageSize: (state, action) => {
      state.currentImageSize = action.payload;
    },
    setGameLoading: (state, action) => {
      state.gameLoading = action.payload;
    },
    setLifes: (state, action) => {
      state.lifes = action.payload;
    },
    resetGame: state => {
      state.currentCards = [];
      state.selectedCard = null;
      state.cuurentProgress = 0;
      state.lifes = 1;
    },
  },
});

export const {
  setCurrentLevel,
  setCurrentCards,
  setSelectedCard,
  resetGame,
  setCurrentImageSize,
  setSelectedCardArrIndex,
  setCurrentProgress,
  setGameLoading,
  setLifes,
} = gameSlice.actions;

export default gameSlice.reducer;
