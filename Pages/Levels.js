import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/Header";
import Level from "../components/Level";
import Card from "../components/Card";
import Test from "../components/Test";
import CardLocked from "../components/CardLocked";
import LevelLocked from "../components/LevelLocked";

function Levels({navigation}) {
  const [unlocked, setUnlocked] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const unlockFunction = () => {
    setUnlocked(true);
  };

  const handleStart = () => {
    setTimerStarted(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header icon= "reader-outline" heading="Reading"/>
        
        {/*Level 1*/}
        <Level lno="1" progress={0.33} />        
        <Card icon= "reader-outline" topic="Scanning" unlockFunction={unlockFunction}/>
        <CardLocked icon= "reader-outline" topic = "Skimming" unlocked={unlocked}/>
        
        <Test level="1" navigation={navigation} handleStart={handleStart} />

        {/*Level 2*/}
        <LevelLocked lno="2" progress={0.03}/>
        <CardLocked icon= "reader-outline" topic="In-Notation"/>
        <StatusBar style="auto" />

        <Test level="2" navigation={navigation} handleStart={handleStart}/>     

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
