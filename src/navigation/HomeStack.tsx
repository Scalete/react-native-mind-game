import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screen from '@/screens';
import {RootStackParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={screen.HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LevelsScreen"
        component={screen.LevelsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoScreen"
        component={screen.InfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameScreen"
        component={screen.GameScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
