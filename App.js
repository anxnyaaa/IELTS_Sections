import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Heading from "./components/Heading";
import Level from "./components/Level";
import Card from "./components/Card";
import Test from "./components/Test";
import CardLocked from "./components/CardLocked";
import LevelLocked from "./components/LevelLocked";

import Stopclock from "./timer/Stopclock";

export default function App() {

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
        <Card icon= "reader-outline" topic="Scanning" />
        <CardLocked icon= "reader-outline" topic = "Skimming"/>
        
        <Test level="1"/>

        <Stopclock/>

        {/*Level 2*/}
        <LevelLocked lno="2" progress={0.03}/>
        <CardLocked icon= "reader-outline" topic="In-Notation"/>
        <StatusBar style="auto" />

        <Test level="2"/>     

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 20,
    marginTop: 50,
  }, 
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 90
  }  
});
