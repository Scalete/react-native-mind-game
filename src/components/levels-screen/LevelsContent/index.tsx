import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import {levelsImages} from '@/utils/constants';
import {useTypedNavigation} from '@/hooks/useTypedNavigation';

const LevelsContent: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation = useTypedNavigation();

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const imageSize = Math.min(130, screenWidth / numColumns - 20);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {levelsImages.map((image, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GameScreen', {bgIndex: index + 1})
          }
          key={index}
          style={styles.imageContainer}>
          <Image
            source={image}
            style={[{width: imageSize, height: imageSize}]}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default LevelsContent;
