import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Heading from "../components/Heading";
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
        <View style={styles.header}>
          <Pressable android_ripple={{color: '#839efc'}}>
            <Ionicons name="menu-outline" size={28} color="#1F41BB" />
          </Pressable>
          <Heading icon= "reader-outline" heading="Reading"/>
        </View>  
        
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
  }, 
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 80
  }  
});
