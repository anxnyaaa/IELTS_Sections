import React from 'react';
import { Pressable, Text, StyleSheet} from 'react-native';

const Button3 = ({ disabled }) => {
  return (
    <Pressable 
      style={[styles.button, disabled ? styles.disabled : styles.enabled]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Button 3</Text>
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
    backgroundColor: 'green',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
});

export default Button3;
