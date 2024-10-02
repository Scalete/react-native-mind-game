import {FC, useMemo} from 'react';
import {getStyle} from './style';
import {Text, View} from 'react-native';

const InfoContent: FC = () => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rules</Text>
      <Text style={styles.descr}>
        Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit
        tincidunt praesent adipiscing in magna erat enim nec urna. Aliquet
        volutpat id arcu fames varius mus ultricies mollis. Adipiscing blandit
        cursus faucibus vel ullamcorper dignissim at...
      </Text>
    </View>
  );
};

export default InfoContent;
