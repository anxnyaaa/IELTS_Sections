import React from 'react';
import { StyleSheet, View, ScrollView, Pressable, Alert } from 'react-native';

import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';

function AllModules({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading="Modules"/>
        <View style={styles.moduleCardContainer}>
        <Pressable onPress={() => { navigation.navigate('Module 1')}}>
          <ModuleCard navigation={navigation} name="Reading" icon="reader-outline" isLocked={false} onPress={() => {}} />
        </Pressable>
        <Pressable onPress={() => {
          Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
        }}>
          <ModuleCard navigation={navigation} name="Listening" icon="ear-outline" isLocked={true} onPress={() => {}} />
        </Pressable>
        <Pressable onPress={() => {
          Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
        }}>
          <ModuleCard navigation={navigation} name="Speaking" icon="mic-outline" isLocked={true} onPress={() => {}} />
        </Pressable>
        <Pressable onPress={() => {
          Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
        }}>
          <ModuleCard navigation={navigation} name="Writing" icon="pencil-outline" isLocked={true} onPress={() => {}} />
        </Pressable> 

      </View>
      </ScrollView>      
    </View>
  ); 
}

export default AllModules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    paddingTop: 20,    
  },
  moduleCardContainer: {
    marginTop: 20
  }
});