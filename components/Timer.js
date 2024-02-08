import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Timer} from 'react-native-stopwatch-timer';

const App = () => {
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(90000);
    const [resetTimer, setResetTimer] = useState(false);

    const options = {
        container: {
          backgroundColor: '#566573',
          padding: 5,
          borderRadius: 5,
          width: 200,
          alignItems: 'center',
        },
        text: {
          fontSize: 25,
          color: '#fff',
          marginLeft: 7,
        },
      };

      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
           React Native  Timer
            </Text>
    
            <View style={styles.sectionStyle}>
      <Timer
        totalDuration={timerDuration}
        msecs
        
        start={isTimerStart}
        
        reset={resetTimer}
       
        options={options}
     
        handleFinish={() => {
          alert('Completion Function');
        }}
      
        getTime={(time) => {
          console.log(time);
        }}
      />

<TouchableHighlight
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}>
        <Text style={styles.buttonText}>
          {!isTimerStart ? 'START' : 'STOP'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(false);
          setResetTimer(true);
        }}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableHighlight>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});
