import {useEffect} from 'react';
import {StatusBar} from 'react-native';

const useStatusBarVisibility = (
  isHidden: boolean,
  isBackNavTransparent: boolean = false,
) => {
  useEffect(() => {
    StatusBar.setHidden(isHidden);
    return () => {
      StatusBar.setHidden(isBackNavTransparent ? isHidden : !isHidden);
    };
  }, [isHidden]);
};

export default useStatusBarVisibility;
