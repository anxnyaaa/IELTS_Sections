// StopClock.js
import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Controls from './Controls';
import Time from './Time';

export default function StopClock() {
    const initialTime = 1 * 30 * 1000; // 1m in milliseconds
    const [time, setTime] = useState(initialTime);
    const [status, setStatus] = useState(-1); // -1 => stopped, 1 => playing
    const showAlertRef = useRef(false);

    useEffect(() => {
        let timerID;

        if (status === 1) {
            timerID = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(timerID);
                        setStatus(-1);
                        return 0;
                    } else if (prevTime <= 10000 && !showAlertRef.current) {
                        showAlertRef.current = true;
                        showAlert();
                    }
                    return prevTime - 10;
                });
            }, 10);
        }

        return () => {
            clearInterval(timerID);
        };
    }, [status]);

    const handleStart = () => {
        setStatus(1);
    };

    const handleStop = () => {
        setStatus(-1);
        setTime(initialTime);
        showAlertRef.current = false; // Reset showAlertRef
    };

    const showAlert = () => {
        Alert.alert('Warning!', 'Last 10 seconds left!');
    };

    return (
        <View style={styles.container}>
            <Time time={time} />
            <Controls status={status} handleStart={handleStart} handleStop={handleStop} time={time} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
