import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Levels from "./Pages/Levels";
import Stopclock from "./timer/Stopclock";
import Testpage from "./Pages/Testpage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Levels'>
          <Stack.Screen name="Levels" component={Levels}/>
          <Stack.Screen name="Exam" component={Testpage}/>
        </Stack.Navigator>
      </NavigationContainer> 
    </>
  ) 
};

