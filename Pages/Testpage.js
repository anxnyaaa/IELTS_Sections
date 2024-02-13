import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Stopclock from '../timer/Stopclock';
import Button from '../components/Button';
import Examtest from "../exam/Examtest"

function Testpage({navigation}) {
  
  const handleTimerEnd = () => {
    navigation.navigate('Levels'); // Navigate to "Levels" screen
  };

  return (
    <View style={styles.testContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.first}>
            <Button name="Submit"/>               
            <Stopclock onTimerEnd={handleTimerEnd} />
                           
        </View>
        <View style= {styles.tab}>
          <View style={styles.tabRow}>
            <Pressable style= {styles.qsNo} name={1}/>
            <Pressable style= {styles.qsNo} name={2}/>
            <Pressable style= {styles.qsNo} name={3}/>            
            <Pressable style= {styles.qsNo} name={4}/>            
            <Pressable style= {styles.qsNo} name={5}/>        
          </View>
          <View style={styles.tabRow}>
            <Pressable style= {styles.qsNo} name={6}/>
            <Pressable style= {styles.qsNo} name={7}/>
            <Pressable style= {styles.qsNo} name={8}/>            
            <Pressable style= {styles.qsNo} name={9}/>            
            <Pressable style= {styles.qsNo} name={10}/>        
          </View>
        </View>
        {/*<View style={styles.qs}>
          <Text>Question 1:</Text>
          <Text>A word or law no longer in use ?  </Text>
        </View>*/}
        <Examtest/>
        <View style={styles.footer}>
          <View style={styles.left}>
            <Button name='Previous'/>
            <Button name='Mark for Review'/>
          </View>
          <Button name='Next'/>
        </View>
        <StatusBar style="auto" />         
      </ScrollView>
    </View>
  );
}

export default Testpage;

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    justifyContent: 'center'
  }, 
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  left: {
    flexDirection: 'row',
  },
  tab: {
    padding: 10,
    flex: 1,
    gap: 10,
    alignItems: 'c',
    justifyContent: 'space-between'
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  qsNo: {
    borderColor: '#ebebeb',
    backgroundColor: '#ffff',
    borderRadius: 0,
  },
  qs: {

  }
});
