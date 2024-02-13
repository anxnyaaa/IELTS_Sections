import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Button({ name }) {
  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.button} android_ripple={{color: '#839efc'}}>
        <Text style={styles.buttonText}>{name}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1F41BB",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 14
  },
});
