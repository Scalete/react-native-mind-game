import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

const LevelsContent: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const navigation = useNavigation();

  const images = [
    require('@/assets/img/levels/1.png'),
    require('@/assets/img/levels/2.png'),
    require('@/assets/img/levels/3.png'),
    require('@/assets/img/levels/4.png'),
    require('@/assets/img/levels/5.png'),
    require('@/assets/img/levels/6.png'),
    require('@/assets/img/levels/7.png'),
    require('@/assets/img/levels/8.png'),
  ];

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const imageSize = Math.min(130, screenWidth / numColumns - 20);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity key={index} style={styles.imageContainer}>
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
