import React from "react";
import Levels from "./Levels";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stopclock from "./timer/Stopclock";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Levels'>
        <Stack.Screen name="Levels" component={Levels}/>
        <Stack.Screen name="Exam" component={Stopclock}/>
      </Stack.Navigator>
    </NavigationContainer> 
  ) 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center',
  }  
});
