import React from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Heading from '../components/Heading';
import ModuleCard from '../components/ModuleCard';

function Modules({ navigation }) {
  const handleNavigateToLevels = () => {
    navigation.navigate('Levels');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={handleNavigateToLevels}>
          <ModuleCard navigation={navigation} name="Reading" icon="reader-outline" />
        </Pressable>
        <ModuleCard navigation={navigation} name="Listening" icon="ear-outline" />
        <ModuleCard navigation={navigation} name="Speaking" icon="mic-outline" />
        <ModuleCard navigation={navigation} name="Writing" icon="pencil-outline" />
      </ScrollView>
    </View>
  );
}

export default Modules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 20,
  },
});
