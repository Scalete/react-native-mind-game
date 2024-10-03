export type BackgroundImages = {
  [key: string]: any;
};

export const getImagesForLevel = (currentLevel: number | null): any[] => {
  const levelImagesMap: {[key: number]: any[]} = {
    1: gameZeusImages,
    2: gameDogsImages,
    3: gameTigerImages,
    4: gameCandyImages,
    5: gameSpaceImages,
    6: gameJellyImages,
    7: gameMagicImages,
    8: gameRobotsImages,
  };

  return levelImagesMap[currentLevel || 1] || gameSpaceImages;
};

//render images grids
export const levelsImages = [
  require('@/assets/img/levels/1.png'),
  require('@/assets/img/levels/2.png'),
  require('@/assets/img/levels/3.png'),
  require('@/assets/img/levels/4.png'),
  require('@/assets/img/levels/5.png'),
  require('@/assets/img/levels/6.png'),
  require('@/assets/img/levels/7.png'),
  require('@/assets/img/levels/8.png'),
];

export const backgroundGameImages: BackgroundImages = {
  1: require('@/assets/img/game/bg/1.jpg'),
  2: require('@/assets/img/game/bg/2.jpg'),
  3: require('@/assets/img/game/bg/3.jpg'),
  4: require('@/assets/img/game/bg/4.jpg'),
  5: require('@/assets/img/game/bg/5.jpg'),
  6: require('@/assets/img/game/bg/6.jpg'),
  7: require('@/assets/img/game/bg/7.jpg'),
  8: require('@/assets/img/game/bg/8.jpg'),
};

export const gameZeusImages: any[] = [
  require('@/assets/img/game/content/zeus/1.png'),
  require('@/assets/img/game/content/zeus/2.png'),
];

export const gameDogsImages: any[] = [
  require('@/assets/img/game/content/dogs/1.png'),
  require('@/assets/img/game/content/dogs/2.png'),
  require('@/assets/img/game/content/dogs/3.png'),
  require('@/assets/img/game/content/dogs/4.png'),
];

export const gameTigerImages: any[] = [
  require('@/assets/img/game/content/tiger/1.png'),
  require('@/assets/img/game/content/tiger/2.png'),
  require('@/assets/img/game/content/tiger/3.png'),
  require('@/assets/img/game/content/tiger/4.png'),
];

export const gameCandyImages: any[] = [
  require('@/assets/img/game/content/candy/1.png'),
  require('@/assets/img/game/content/candy/2.png'),
  require('@/assets/img/game/content/candy/3.png'),
  require('@/assets/img/game/content/candy/4.png'),
  require('@/assets/img/game/content/candy/5.png'),
  require('@/assets/img/game/content/candy/6.png'),
];

export const gameSpaceImages: any[] = [
  require('@/assets/img/game/content/space/1.png'),
  require('@/assets/img/game/content/space/2.png'),
  require('@/assets/img/game/content/space/3.png'),
];

export const gameJellyImages: any[] = [
  require('@/assets/img/game/content/jelly/1.png'),
  require('@/assets/img/game/content/jelly/2.png'),
  require('@/assets/img/game/content/jelly/3.png'),
];

export const gameMagicImages: any[] = [
  require('@/assets/img/game/content/magic/1.png'),
  require('@/assets/img/game/content/magic/2.png'),
  require('@/assets/img/game/content/magic/3.png'),
];

export const gameRobotsImages: any[] = [
  require('@/assets/img/game/content/robots/1.png'),
  require('@/assets/img/game/content/robots/2.png'),
  require('@/assets/img/game/content/robots/3.png'),
  require('@/assets/img/game/content/robots/4.png'),
  require('@/assets/img/game/content/robots/5.png'),
  require('@/assets/img/game/content/robots/6.png'),
];
