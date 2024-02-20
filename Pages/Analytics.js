import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../components/Header';
import Graph from '../components/Graph';

function Analytics() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading="Reading"/>
        <Graph/>
      </ScrollView>      
    </View>
  ); 
}

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    paddingTop: 20,    
  }
});