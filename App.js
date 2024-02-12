import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Levels from "./Levels";
import Test from "./components/Test";
import Stopclock from "./timer/Stopclock";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Levels'>
        <Stack.Screen name="Levels" component={Levels}/>
        <Stack.Screen name="Test" component={Test}/>
        <Stack.Screen name="Exam" component={Stopclock}/>
      </Stack.Navigator>
    </NavigationContainer> 
  ) 
};

