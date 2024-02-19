import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Module from "./Pages/Module";
import Testpage from "./Pages/Testpage";
import Modules from "./Pages/AllModules";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Modules'>
          <Stack.Screen name="Modules" component={Modules}/>
          <Stack.Screen name="Module 1" component={Module}/>
          <Stack.Screen name="Test" component={Testpage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  ) 
};

