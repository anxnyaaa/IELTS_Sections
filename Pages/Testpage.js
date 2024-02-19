import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Stopclock from '../timer/Stopclock';
import Examtest from "../exam/Examtest"
import Questions from '../exam/Questions';

function Testpage({navigation}) {
  
  const handleTimerEnd = () => {
    navigation.navigate('Module 1'); // Navigate to "Module 1" screen
  };

  return (
    <View style={styles.testContainer}>     
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.first}>
          <Text style={styles.heading}>Questions</Text>
          <View style={[styles.heading, {gap: 15}]}>
            <View style={styles.iconContainer}>
              <Pressable android_ripple={{color: '#839efc'}}>
                <Ionicons name="eye-outline" size={22} color="#1F41BB" />
              </Pressable>
            </View>
            <Stopclock onTimerEnd={handleTimerEnd} />
          </View>                     
        </View>
        <Questions/>
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
          <Pressable style={[styles.button, {borderWidth: 2, paddingHorizontal: '15%', paddingVertical: '2%'}]} android_ripple={{color: '#839efc'}}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: "#1F41BB"}]} android_ripple={{color: '#839efc'}}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Submit</Text>
          </Pressable>
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
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#1F41BB",
    fontSize: 28,
    fontWeight: "900",
  },
  iconContainer: {
    backgroundColor: '#ffffff',
    width: 36,
    height: 36,
    padding: 5,
    borderColor: '#1F41BB',
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    borderColor: "#1F41BB",
    paddingVertical: "2%",
    paddingHorizontal: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    borderRadius: 50, 
  },
  buttonText: {
    color: "#1f41bb",
    fontWeight: "500",
    fontSize: 18
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
