import * as React from "react";
import { View, Dimensions } from "react-native";
import { Video } from "expo-av";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

export function Lives() {
  let videoWidth = Dimensions.get('window').width;
  let videoHeight = videoWidth / 11 * 9 ;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState();

  return (
    <>
      <Header showBackButton={false}/>
      <View style={styles.container}>
        <Video
          source={{ uri: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8' }}
          ref={video}
          resizeMode="contain"
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          style={{ width: videoWidth, height: videoHeight }}/>

          <View style={styles.footer}>
            <AntDesign 
              name="fastbackward" 
              size={28} 
              color="black" 
              style={{ marginRight: 20, marginTop: 8 }}
              onPress={() => video.current.setPositionAsync(status.positionMillis - 15000)}
            />
            <AntDesign 
              name={status?.isPlaying ? "pausecircleo" : "playcircleo"} 
              size={48} 
              color="black" 
              onPress={() => status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} 
            />
            <AntDesign 
              name="fastforward" 
              size={28} 
              color="black" 
              style={{ marginLeft: 20, marginTop: 8 }}
              onPress={() => video.current.setPositionAsync(status.positionMillis + 15000)}
            />
          </View>
      </View>
    </>

  );
}