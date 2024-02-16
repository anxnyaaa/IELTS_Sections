import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Button2 = ({ enableButton3, disabled }) => {
  const handlePress = () => {
    enableButton3();
  };
  
  return (
    <Pressable
      style={[styles.button, disabled ? styles.disabled : styles.enabled]}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Button 2</Text>
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
    backgroundColor: 'red',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
});

export default Button2;
