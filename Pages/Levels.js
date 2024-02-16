import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Alert } from "react-native";

import Header from "../components/Header";
import Level from "../components/Level";
import Card from "../components/Card";
import Test from "../components/Test";
import CardLocked from "../components/CardLocked";
import LevelLocked from "../components/LevelLocked";

function Levels({navigation}) {
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
        
        {/*Level 1*/}
        <Level lno="1" progress={progress} />        
        <Card icon= "reader-outline" topic="Scanning" unlockFunction={unlockCardLocked}/>        
        <CardLocked icon= "reader-outline" topic = "Skimming" unlocked={cardLockedEnabled} onPress={enableTest}/>
        <Test level="1" navigation={navigation} unlocked={testEnabled} updateProgress={updateProgress} />
        
        {/*Level 2*/}
        <LevelLocked lno="2" progress={0.03}/>
        <CardLocked icon= "reader-outline" topic="In-Notation"/>
        <StatusBar style="auto" />

        <Test level="2" navigation={navigation} handleStart={enableTest}/>     

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
  }
});