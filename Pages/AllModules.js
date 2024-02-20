import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Pressable, Alert } from 'react-native';

import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';

function AllModules({ navigation }) {
  // {const [cardLockedEnabled, setCardLockedEnabled] = useState(false);
  // const [testEnabled, setTestEnabled] = useState(false);
  // const [progress, setProgress] = useState(0);

  // const unlockCardLocked = () => {
  //   setCardLockedEnabled(true);
  //   updateProgress();
  // };

  // const enableTest = () => {
  //   setTestEnabled(true);
  //   updateProgress();
  // };

  // const updateProgress = () => {
  //   setProgress(prevProgress => prevProgress + (100/3));
  // };

  // const lockTestAlert = () => {
  //   if (!unlocked) {
  //     Alert.alert('No Cheating!', 'You must complete the previous lectures.', [
  //       {
  //         text: 'Watch',
  //         onPress: () => console.log('Watching Previous Lectures'),
  //         style: 'destructive'
  //       },
  //     ]);
  //   }
  // };

  // const handleTestPress = () => {
  //   if (unlocked) {
  //     navigation.navigate("Exam", { navigation });
  //     enableTest();
  //     updateProgress();
  //   } else {
  //     lockTestAlert();
  //   }
  // };}
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading="Modules"/>
        <View style={styles.moduleCardContainer}>
          <Pressable onPress={() => {  navigation.navigate('Module 1')}}>
            <ModuleCard navigation={navigation} name="Reading" icon="reader-outline" />
          </Pressable>
          <Pressable onPress={() => {
            Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
          }}>
            <ModuleCard navigation={navigation} name="Listening" icon="ear-outline" />
          </Pressable>
          <Pressable onPress={() => {
            Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
          }}>
            <ModuleCard navigation={navigation} name="Speaking" icon="mic-outline" />
          </Pressable>
          <Pressable onPress={() => {
            Alert.alert('No Cheating!', 'You must complete the previous module to unlock this one.');
          }}>
            <ModuleCard navigation={navigation} name="Writing" icon="pencil-outline" />
          </Pressable> 
          {/* {<ModuleCard navigation={navigation} name="Listening" icon="ear-outline" />
          <ModuleCard navigation={navigation} name="Speaking" icon="mic-outline" />
          <ModuleCard navigation={navigation} name="Writing" icon="pencil-outline" />} */}
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