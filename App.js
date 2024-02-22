import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllModules from "./Pages/AllModules";
import Module from "./Pages/Module";
import Analytics from "./Pages/Analytics";
import Testpage from "./Pages/Testpage";
import Passage from "./Pages/Passage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Modules'>
          <Stack.Screen name="Modules" component={AllModules}/>
          <Stack.Screen name="Module 1" component={Module}/>
          <Stack.Screen name="Module Analytics" component={Analytics}/>
          <Stack.Screen name="Passage" component={Passage}/>
          <Stack.Screen name="Test" component={Testpage}/>                    
        </Stack.Navigator>
      </NavigationContainer> 
    </>
  ) 
};

