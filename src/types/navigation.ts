import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTab: undefined;
  LevelsScreen: undefined;
  InfoScreen: undefined;
  GameScreen: undefined;
};

export type HomeTabRouteProp = RouteProp<RootStackParamList, 'HomeTab'>;
export type LevelsScreenRouteProp = RouteProp<
  RootStackParamList,
  'LevelsScreen'
>;
export type InfoScreenRouteProp = RouteProp<RootStackParamList, 'InfoScreen'>;
export type GameScreenRouteProp = RouteProp<RootStackParamList, 'GameScreen'>;
