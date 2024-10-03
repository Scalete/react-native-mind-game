import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import ReduxView from '@/components/shared/ReduxView';
import GeoLocationWrapper from '@/templates/GeoLocationWrapper';

const App = () => {
  return (
    <GeoLocationWrapper>
      <ReduxView>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ReduxView>
    </GeoLocationWrapper>
  );
};

export default App;
