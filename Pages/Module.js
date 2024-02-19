import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Alert } from "react-native";

import Header from "../components/Header";
import Progress from "../components/Progress"
import Test from "../components/Test";
import ButtonBordered from '../components/ButtonBordered';

function Levels({navigation, name}) {
  const [cardLockedEnabled, setCardLockedEnabled] = useState(false);
  const [testEnabled, setTestEnabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const unlockCardLocked = () => {
    setCardLockedEnabled(true);
    updateProgress();
  };

  const enableTest = () => {
    setTestEnabled(true);
    updateProgress();
  };

  const updateProgress = () => {
    setProgress(prevProgress => prevProgress + (100/3));
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header icon= "reader-outline" heading="Reading"/>
        <Progress /> 
        <ButtonBordered name = 'View Module Analytics'/>  

        <View style={styles.line}></View>

        {/*Level 1*/}        
        <Test level="1" navigation={navigation} /*unlocked={testEnabled} updateProgress={updateProgress}*/ />
        
        {/*Level 2*/}
        <Test level="2" navigation={navigation} /*handleStart={enableTest}*//>        

        <StatusBar style="auto" />        
      </ScrollView>
    </View>
  );
}

export default Levels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
  },
  line: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#0e0e0e',
  },
});