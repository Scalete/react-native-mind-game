import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import ReduxView from '@/components/shared/ReduxView';
import GeoLocationWrapper from '@/templates/GeoLocationWrapper';
import AnaliticsWrapper from '@/templates/AnaliticsWrapper';

const App = () => {
  return (
    <AnaliticsWrapper>
      <GeoLocationWrapper>
        <ReduxView>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </ReduxView>
      </GeoLocationWrapper>
    </AnaliticsWrapper>
  );
};

export default App;
