import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Controls from './Controls';
import Time from './Time';

export default function StopClock() {
    const initialTime = 1 * 30 * 1000; // 1m in milliseconds
    const [time, setTime] = useState(initialTime);
    const [status, setStatus] = useState(-1); // -1 => stopped, 1 => playing

    useEffect(() => {
        let timerID;

        if (status === 1) {
            timerID = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(timerID);
                        setStatus(-1);
                        return 0;
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


{/* //initial countdown timer
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Controls from './Controls';
import Time from './Time';

export default function StopClock() {
    const initialTime = 1 * 30 * 1000; // 1m in milliseconds
    const [time, setTime] = useState(initialTime);
    const [status, setStatus] = useState(-1); // -1 => stopped, 1 => playing

    useEffect(() => {
        let timerID;

        if (status === 1) {
            timerID = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(timerID);
                        setStatus(-1);
                        return 0;
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
    };

    return (
        <View style={styles.container}>
            <Time time={time} />
            <Controls status={status} handleStart={handleStart} handleStop={handleStop} />
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

*/}

{/*
import {useState,useEffect} from 'react'
import {View,StyleSheet} from 'react-native';
import Controls from './Controls';
import Time from './Time';
export default function StopClock(){
    const [time,setTime]=useState(0);

    const [status,setStatus]=useState(-1)
    const reset=()=>{
        setTime(0);
    }
    useEffect(()=>{
        let timerID;
        if(status===1){
            timerID = setInterval(()=>{
                setTime((time) => time + 10);
            },10)
        }else{
            clearInterval(timerID)
            if(status===-1)
            reset();
        }
        return ()=>{clearInterval(timerID)}
    },[status])
    const handleStart=()=>{
        setStatus(1);
    }
    const handlePause=()=>{
        setStatus(status===0?1:0);
    }
    const handleStop=()=>{
        setStatus(-1);
    }
    return(
        <View style={styles.container}>
            <Time time={time} />
            <Controls
                status={status}
                handleStart={handleStart}
                handlePause={handlePause}
                handleStop={handleStop}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        width: '100%'
    },
})
*/}