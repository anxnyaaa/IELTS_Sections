import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = () => {
  const [button1Enabled, setButton1Enabled] = useState(true);
  const [button2Enabled, setButton2Enabled] = useState(false);
  const [button3Enabled, setButton3Enabled] = useState(false);

  const handleButton1Click = () => {
    // Enable button 2 and keep button 1 enabled
    setButton2Enabled(true);
  };

  const handleButton2Click = () => {
    // Enable button 3 and keep button 2 enabled
    setButton3Enabled(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, button1Enabled ? styles.enabled : styles.disabled]}
        onPress={handleButton1Click}
        disabled={!button1Enabled}
      >
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, button2Enabled ? {backgroundColor: 'red'} : styles.disabled]}
        onPress={handleButton2Click}
        disabled={!button2Enabled}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, button3Enabled ? {backgroundColor: 'green'} : styles.disabled]}
        disabled={!button3Enabled}
      >
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  enabled: {
    backgroundColor: '#007AFF',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
});

export default ButtonComponent;
