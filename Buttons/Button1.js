import React, { useState } from 'react';
import {Text, StyleSheet, Pressable } from 'react-native';

const Button1 = ({ enableButton2 }) => {
  const [enabled, setEnabled] = useState(true);

  const handlePress = () => {
    if (enabled) {
      enableButton2(); // Enable Button 2
    }
  };

  return (
    <Pressable
      style={[styles.button, enabled ? styles.enabled : styles.disabled]}
      onPress={handlePress}
      disabled={!enabled}
    >
      <Text style={styles.buttonText}>Button 1</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default Button1;
