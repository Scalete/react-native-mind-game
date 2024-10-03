import {useAppDispatch, useGame, useModal} from '@/hooks/reduxHook';
import {useTypedNavigation} from '@/hooks/useTypedNavigation';
import {Modal, Text, View} from 'react-native';
import Overlay from './Overlay';
import {useMemo, useState} from 'react';
import {getStyle} from './style';
import CustomBtn from '../CustomBtn';
import {ArrowBackSvg, HomeSvg} from '@/assets/svg';
import LinearGradient from 'react-native-linear-gradient';
import {resetModal, setModalVisible} from '@/store/modal';
import {onRenderGameGrid} from '@/utils/helper';
import {setGameLoading} from '@/store/game';

const CustomModal = () => {
  const navigation = useTypedNavigation();
  const dispatch = useAppDispatch();
  const styles = useMemo(() => getStyle(), []);
  const {modalVisible, text} = useModal();
  const {currentLevel, gameLoading} = useGame();

  const onCloseModal = () => {
    dispatch(resetModal());
  };

  const onHome = () => {
    onCloseModal();
    navigation.navigate('HomeTab');
  };

  const arrowAction = () => {
    dispatch(setGameLoading(true));
    if (text === 'You Won!') {
      setTimeout(() => {
        onRenderGameGrid((currentLevel as number) + 1, dispatch);
        dispatch(setGameLoading(false));
      }, 100);
    } else {
      setTimeout(() => {
        onRenderGameGrid(
          currentLevel === 1 ? 1 : (currentLevel as number) - 1,
          dispatch,
        );
        dispatch(setGameLoading(false));
      }, 100);
    }
    onCloseModal();
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          dispatch(setModalVisible(!modalVisible));
        }}>
        <View style={styles.centerdView}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#2BD5E8', '#8864E8']}
            style={styles.modalView}>
            <LinearGradient
              colors={['#43BCF0', '#541896', '#711280']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 2}}
              style={styles.modalLabel}>
              <Text style={styles.modalLabelText}>{text}</Text>
            </LinearGradient>
          </LinearGradient>
          <View
            style={[
              styles.modalBtns,
              text === 'You Won!' &&
                currentLevel === 8 && {justifyContent: 'center'},
            ]}>
            <CustomBtn
              content={<HomeSvg />}
              action={onHome}
              btnStyles={{width: 40, height: 40}}
            />
            {text === 'You Won!' && currentLevel === 8 ? (
              <></>
            ) : (
              <CustomBtn
                content={<ArrowBackSvg />}
                action={arrowAction}
                btnStyles={[
                  {width: 40, height: 40},
                  text === 'You Won!' && {
                    transform: [{rotate: '180deg'}],
                  },
                ]}
              />
            )}
          </View>
        </View>
      </Modal>
      {modalVisible && <Overlay />}
    </>
  );
};

export default CustomModal;
