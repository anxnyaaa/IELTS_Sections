import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ButtonBordered({ name }) {
  return (
      <Pressable style={styles.button} android_ripple={{color: '#839efc'}}>
        <Text style={styles.buttonText}>{name}</Text>
      </Pressable>
  );
}

export default ButtonBordered;

const styles = StyleSheet.create({
  button: {
    borderColor: "#1F41BB",
    paddingVertical: "2.5%",
    paddingHorizontal: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 8,
  },
  buttonText: {
    color: "#1f41bb",
    fontWeight: "500",
    fontSize: 18
  },
});
