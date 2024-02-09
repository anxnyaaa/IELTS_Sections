import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';
export default function Controls({
    status,
    handleStart,
    handleStop,
    handlePause
}){
    return(
        <View style={styles.row}>
        <TouchableOpacity
            disabled={status===0 || status===1}
            style={(status===0 || status===1)?{...styles.button,opacity:0.5}:styles.button}
            onPress={handleStart}
        >
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
            disabled={status===-1}
            style={(status===-1)?{...styles.button,opacity:0.5}:styles.button}
            onPress={handlePause}
        >
            <Text style={styles.buttonText}>
                {status===0?'Resume':'Pause'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            disabled={status===-1}
            style={(status===-1)?{...styles.button,opacity:0.5}:styles.button}
            onPress={handleStop}
        >
            <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles= StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal:18,
        width: '100%'
    },
    button:{
        paddingHorizontal:25,
        paddingVertical:10,
        backgroundColor:'#1F41BB',
        borderRadius:50
    },
    buttonText:{
        fontSize:20,
        color:'#FFFF',
        fontWeight:'bold',
    }
})