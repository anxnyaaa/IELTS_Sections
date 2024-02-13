import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ModuleCard({name, icon}) {
    return (
        <View style={styles.moduleContainer}>
          <View style={styles.cardContentParts}>
            <Ionicons name={icon} size={20} color="white" style={{ backgroundColor: "#1F41BB", borderRadius: 50, padding: 5 }}/>
            <Text style={styles.cardContentHeading}>{name}</Text>
            <Ionicons name="open-outline" size={26} color="black"/>
          </View>
          <View style={styles.line}></View>
          <View style={styles.moduleContent}>
            <View style={styles.cardContentParts}>
              <Pressable style={styles.button} android_ripple={{color: '#839efc'}}>
                <Text style={styles.buttonText}>Number of Tests</Text>
              </Pressable>
            </View>
            <View style={styles.cardContentParts}>
              <Pressable style={styles.button} android_ripple={{color: '#839efc'}}>
                <Text style={styles.buttonText}>Number of Levels</Text>
              </Pressable>
            </View>
          </View>          
        </View>
    );
}

export default ModuleCard;

const styles = StyleSheet.create({
  moduleContainer: {
    width: "100%",
    backgroundColor: "#c7d7f2",
    gap: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 4,
  },
  moduleContent: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContentParts: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  cardContentHeading: {
    color: "#0e0e0e",
    fontSize: 22,
    fontWeight: "700",
  },
  line: {
    marginLeft: 20,
    margin: 8,
    height: 1,
    width: '90%',
    backgroundColor: 'black',
    opacity: .75
  },
  button: {
    backgroundColor: "#1F41BB",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});
