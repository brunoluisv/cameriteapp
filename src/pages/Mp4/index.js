import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { Header } from '../../components/Header';

import json from '../../services/videos.json'
import { useNavigation } from "@react-navigation/native";

export function Mp4() {
  const navigation = useNavigation();

  return (
    <>
      <Header showBackButton={false} />
      <View style={styles.container}>
        <FlatList
          data={json}
          renderItem={({ item }) =>
          (
            <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', { videoUrl: item.video })}>
              <Card
                code={item.code}
                titulo={item.titulo}
              />
            </TouchableOpacity>
          )
          }
          keyExtractor={item => item.code}
        />
      </View>
    </>

  );
}