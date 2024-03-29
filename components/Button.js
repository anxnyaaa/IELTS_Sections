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
    paddingVertical: "2.5%",
    paddingHorizontal: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "#1F41BB",
    borderWidth: 1,
    marginVertical: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18
  },
});
