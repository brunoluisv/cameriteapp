import * as React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import { Header } from '../../components/Header';
import { styles } from './styles';

export default function VideoPlayer({ route }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState();

  const { videoUrl } = route.params;

  return (
    <>
      <Header showBackButton={true} goTo='Mp4' />
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoUrl,
          }}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          shouldPlay={true}
          usePoster={false}
        />
      </View>
    </>
  );
}