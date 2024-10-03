import React, {FC, PropsWithChildren, useEffect} from 'react';
import appsFlyer from 'react-native-appsflyer';
import analytics from '@react-native-firebase/analytics';
import {OneSignal} from 'react-native-onesignal';

const options = {
  devKey: 'fake_dev_key',
  isDebug: true,
};

const AnaliticsWrapper: FC<PropsWithChildren> = ({children}) => {
  useEffect(() => {
    // Initialization AppsFlyer
    appsFlyer.initSdk(
      options,
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
      },
    );

    // Initialization OneSignal
    OneSignal.initialize('3cd1c430-58c5-417c-bf27-670c4db25471');

    // Logging события
    const logEvent = async () => {
      await analytics().logEvent('app_open', {
        fake_event_id: '123456',
      });
    };

    logEvent();
  }, []);

  return <>{children}</>;
};

export default AnaliticsWrapper;
