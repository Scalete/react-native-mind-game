import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {View} from 'react-native';
import GridTemplate from '@/templates/GridTemplate';

const GameContent: FC = () => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <GridTemplate />
    </View>
  );
};

export default GameContent;
