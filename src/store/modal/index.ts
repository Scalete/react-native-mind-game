import {IModalState} from '@/types/state';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IModalState = {
  modalVisible: false,
  text: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state, action: PayloadAction<boolean>) => {
      state.modalVisible = action.payload;
    },
    setModalText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    resetModal: state => {
      state.modalVisible = false;
      state.text = '';
    },
  },
});

export const {setModalVisible, setModalText, resetModal} = modalSlice.actions;

export default modalSlice.reducer;
