import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Lives } from './pages/Lives';
import { Mp4 } from "./pages/Mp4";

import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideoPlayer from "./pages/VideoPlayer";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RoutesBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: 'transparent',
          paddingTop: 5,
          paddingBottom: 5,
          height: 70
        },
        headerShown: false,
        tabBarActiveTintColor: '#1871BC',
        tabBarInactiveTintColor: '#CBCBCB',
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name="Mp4"
        component={Mp4}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="folder-video" size={34} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Lives"
        component={Lives}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="live-tv" size={34} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={RoutesBottomTab}
      />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
}