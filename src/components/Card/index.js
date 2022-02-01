import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './styles';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_700Bold
} from '@expo-google-fonts/balsamiq-sans';

export function Card({ code, titulo }) {
  const thumbs = [
    { id: "bigbunny", image: require('../../../assets/thumbnails/big-buck-bunny.jpg') },
    { id: "elephant", image: require('../../../assets/thumbnails/elephant-dream.jpg') },
    { id: "blazes", image: require('../../../assets/thumbnails/bigher-blaze.jpg') },
    { id: "escape", image: require('../../../assets/thumbnails/bigher-escape.jpg') },
    { id: "fun", image: require('../../../assets/thumbnails/bigher-fun.jpg') },
    { id: "joyride", image: require('../../../assets/thumbnails/bigher-joyrides.jpg') },
    { id: "melt", image: require('../../../assets/thumbnails/bigher-meet.jpg') },
    { id: "sintel", image: require('../../../assets/thumbnails/sintel.jpg') },
    { id: "subaru", image: require('../../../assets/thumbnails/subaru.jpg') }
  ];

  const thumb = thumbs.find(t => t.id === code);

  let [fontsLoaded] = useFonts({
    BalsamiqSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Text style={[styles.titulo, {fontFamily: 'BalsamiqSans_700Bold'}]}>{titulo}</Text>
        <View style={styles.container}>
          <Image style={styles.thumb} source={thumb?.image} />
        </View>
      </>
    );
  }

}