import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Time from './Time';

export default function StopClock({ onTimerEnd }) {
  const initialTime = 2 * 60 * 1000; // 2m in milliseconds
  const [time, setTime] = useState(initialTime);
  const [status, setStatus] = useState(1); // -1 => stopped, 1 => playing
  const showAlertRef = useRef(false);

  useEffect(() => {
    let timerID;

    if (status === 1) {
      timerID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerID);
            setStatus(-1);            
            onTimerEnd();
            return 0;
          } 
          
          else if (prevTime <= 20000 && !showAlertRef.current) {
            showAlertRef.current = true;
            showAlert();
          }

          return prevTime - 20;
        });
      }, 20);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [status]);


  const showAlert = () => {
    Alert.alert('Warning!', 'Last 20 seconds left!');
  };

  return (
    <View style={styles.container}>
      <Time time={time} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
