import React from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';

import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';

function Modules({ navigation }) {
  const handleNavigateToLevels = () => {
    navigation.navigate('Module 1');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading="Modules"  />
        <View style={styles.moduleCardContainer}>
          <Pressable onPress={handleNavigateToLevels}>
            <ModuleCard navigation={navigation} name="Reading" icon="reader-outline" />
          </Pressable>
          <ModuleCard navigation={navigation} name="Listening" icon="ear-outline" />
          <ModuleCard navigation={navigation} name="Speaking" icon="mic-outline" />
          <ModuleCard navigation={navigation} name="Writing" icon="pencil-outline" />
      </View>
      </ScrollView>      
    </View>
  );
}

export default Modules;

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