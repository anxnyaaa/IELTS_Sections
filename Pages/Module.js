import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Alert, Pressable, Text } from "react-native";

import Header from "../components/Header";
import Progress from "../components/Progress"
import Test from "../components/Test";

function Module({ navigation }) {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header icon= "reader-outline" heading="Reading"/>
        <Progress/>
        <Pressable style={styles.button} onPress={() => { navigation.navigate("Module Analytics")}} android_ripple={{color: '#839efc'}}>
          <Text style={styles.buttonText}>View Module Analytics</Text>
        </Pressable>

        <View style={styles.line}></View>

        {/*Level 1*/}        
        <Test level="1" navigation={navigation}/>{/*unlocked={testEnabled} updateProgress={updateProgress}*/}
        
        {/*Level 2*/}
        <Test level="2" navigation={navigation} /*handleStart={enableTest}*//>  

        <StatusBar style="auto" />        
      </ScrollView>
    </View>
  );
}

export default Module;

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
  button: {
    borderColor: "#1F41BB",
    paddingVertical: "2.5%",
    paddingHorizontal: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 8,
  },
  buttonText: {
    color: "#1f41bb",
    fontWeight: "500",
    fontSize: 18
  },
});
