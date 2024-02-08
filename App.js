import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.heading}>
        <Ionicons name="reader-outline" size={24} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} />
        <Text style={styles.headingText}>Reading</Text>
      </View>

      <View style={styles.level}>
        <View><Text style={styles.levelHeading}>Level 1</Text></View>
        <Progress.Bar progress={0.5} width={340} color='#385682'/>
        <Text style={styles.levelText}>50% completed</Text>
      </View>

      <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.cardContentParts}><Ionicons name="reader-outline" size={12} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} /><Text style={styles.cardContentHeading}>Scanning</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="videocam-outline" size={16} color='gray' /><Text>Video</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="time-outline" size={16} color='gray' /><Text>50 Min</Text></View>
          </View>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Watch Video</Text></Pressable>
      </View>

      <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.cardContentParts}><Ionicons name="reader-outline" size={12} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} /><Text style={styles.cardContentHeading}>Skimming</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="videocam-outline" size={16} color='gray' /><Text>Video</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="time-outline" size={16} color='gray' /><Text>45 Min</Text></View>
          </View>
        <Pressable style={styles.button}><View style={styles.buttonLocked}><Text style={styles.buttonText}>Watch Video</Text><Ionicons name="lock-closed-outline" size={18} color='white'/></View></Pressable>
      </View>

      <View style={styles.cardAdvance}>
          <View style={styles.cardAdvanceContent}>
            <View style={styles.cardAdvanceContentHeading}>
              <Ionicons name="reader-outline" size={20} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:8}} />
              <View style={styles.cardAdvanceContentHeadingText}>
                <Text style={styles.cardAdvanceContentHeadingTextHead}>Level 1</Text>
                <Text style={styles.cardAdvanceContentHeadingTextBody}>ADVANCE READING SKILLS</Text>
              </View>
            </View>
            <View style={styles.cardAdvanceActivity}>
              <View style= {styles.cardContentParts}><Ionicons name="calendar-clear-outline" size={16} color='gray' /><Text>Quiz</Text></View>
              <View style= {styles.cardContentParts}><Ionicons name="time-outline" size={16} color='gray' /><Text>45 Min</Text></View>
            </View>
          </View>
        <Pressable style={[styles.button, {padding: 10}]}><View style={styles.testButton}><Text style={{color: 'white', fontWeight: 500}}>Take Test</Text><Ionicons name="lock-closed-outline" size={18} color='white'/></View></Pressable>
      </View>


      {/*Level 2*/}
      
      <View style={styles.level}>
        <View style={[styles.level, styles.levelLocked]}>
          <Text style={styles.levelHeading}>Level 2</Text>
          <Ionicons name="lock-closed-outline" size={22} color='#001AA1' />
        </View>
        <Progress.Bar progress={0} width={340} color='#385682'/>
        <Text style={styles.levelText}>0% completed</Text>
      </View>

      <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.cardContentParts}><Ionicons name="reader-outline" size={12} color='white' style={{backgroundColor:'#1F41BB', borderRadius:50, padding:3}} /><Text style={styles.cardContentHeading}>In-notation</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="videocam-outline" size={16} color='gray' /><Text>Video</Text></View>
            <View style={styles.cardContentParts}><Ionicons name="time-outline" size={16} color='gray' /><Text>45 Min</Text></View>
          </View>
        <Pressable style={styles.button}><View style={styles.buttonLocked}><Text style={styles.buttonText}>Watch Video</Text><Ionicons name="lock-closed-outline" size={18} color='white'/></View></Pressable>
      </View>
      
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 20,
    marginTop: 50
  },
  heading: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6,
  },
  headingText: {
    color: '#1F41BB', 
    fontSize: 24, 
    fontWeight: '700',
  },
  level: {
    alignItems: 'center', 
    gap: 6, 
    marginTop: 10,
  },
  levelLocked: {
    flexDirection: 'row', 
  },
  levelHeading: {
    fontSize: 15, 
    color: '#1F41BB', 
    fontSize: 20, 
    fontWeight: '700', 
  },
  levelText: {
    fontSize: 15, 
    color: '#1F41BB', 
    fontSize: 14, 
    fontWeight: '400', 
    marginBottom: 10,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#edebeb',
    gap: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  cardContentParts: {
    flexDirection: 'row', 
    justifyContent: "flex-start", 
    alignItems: 'center', 
    gap: 5,
  },
  cardContentHeading: {
    color: '#1F41BB', 
    fontSize: 16, 
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#1F41BB',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 30
  },  
  buttonLocked: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 5
  },
  buttonText: {
    color: 'white', 
    fontWeight: '500',
  },
  testButton: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    gap: 5
  },
  cardAdvance: {
    width: '100%',
    backgroundColor: '#e0edff',
    gap: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardAdvanceContent: { 
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  cardAdvanceContentHeading: {
    flexDirection: 'row', 
    justifyContent: "flex-start", 
    alignItems: 'center', 
    gap: 6, 
    marginBottom: 16
  },
  cardAdvanceContentHeadingText: {
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
  },
  cardAdvanceContentHeadingTextHead: {
    color: 'black', 
    fontSize: 16, 
    fontWeight: '700'
  },
  cardAdvanceContentHeadingTextBody: {
    color: '#1F41BB', 
    fontSize: 12, 
    fontWeight: '400',
  },
  cardAdvanceActivity: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: 'center',
  },
});