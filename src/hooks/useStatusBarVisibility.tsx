import {useEffect} from 'react';
import {StatusBar} from 'react-native';

const useStatusBarVisibility = (isHidden: boolean) => {
  useEffect(() => {
    StatusBar.setHidden(isHidden);
    return () => {
      StatusBar.setHidden(!isHidden);
    };
  }, [isHidden]);
};

export default useStatusBarVisibility;
