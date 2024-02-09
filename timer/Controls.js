import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Controls({ status, handleStart, handleStop, time }) {
    return (
        <View style={styles.row}>
            <TouchableOpacity
                disabled={status !== -1}
                style={status !== -1 ? { ...styles.button, opacity: 0.5 } : styles.button}
                onPress={handleStart}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={status === -1 || time > 10000} // Disable Stop button if status is -1 or time is more than 10 seconds
                style={(status === -1 || time > 10000) ? { ...styles.button, opacity: 0.5 } : styles.button}
                onPress={handleStop}
            >
                <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        width: '100%',
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#1F41BB',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFF',
        fontWeight: 'bold',
    },
});
