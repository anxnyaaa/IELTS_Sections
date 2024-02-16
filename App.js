import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Levels from "./Pages/Levels";
import Testpage from "./Pages/Testpage";
import Modules from "./Pages/Modules";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {<NavigationContainer>
        <Stack.Navigator initialRouteName='Modules'>
          <Stack.Screen name="Modules" component={Modules}/>
          <Stack.Screen name="Levels" component={Levels}/>
          <Stack.Screen name="Exam" component={Testpage}/>
        </Stack.Navigator>
      </NavigationContainer>}
    </>
  ) 
};

