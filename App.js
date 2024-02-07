import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: "flex-start"}}><Ionicons name="reader-outline" size={24} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} /><Text style={{color: '#1F41BB', fontWeight: '700'}}>Reading</Text></View>
      <Text>Level 1</Text>
      <Progress.Bar progress={0.5} width={200} color='#385682'/>
      <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={{flexDirection: 'row'}}><Ionicons name="reader-outline" size={16} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} /><Text style={{color: '#1F41BB', fontWeight: '700'}}>Scanning</Text></View>
            <Text>Video</Text>
            <Text>45 Min</Text>
          </View>
        <Pressable style={styles.button}><Text style={{color: 'white'}}>Watch Video</Text></Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '80%',
    backgroundColor: '#edebeb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  button: {
    backgroundColor: '#1F41BB',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    borderRadius: 30
  }
});
