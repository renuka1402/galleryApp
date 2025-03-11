import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumScreen from "./Album";
import PhotoScreen from "./photoscreen";

const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Photo" component={PhotoScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
      </Stack.Navigator>
   
  );
}
