import React from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ModuleCard({name, icon}) {
    return (
        <View style={styles.moduleContainer}>

          <View style={styles.moduleCardContentParts}>
            <Ionicons name={icon} size={20} color="white" style={{ backgroundColor: "#1F41BB", borderRadius: 50, padding: 5 }}/>
            <Text style={styles.moduleCardContentHeading}>{name}</Text>
            <Ionicons name="open-outline" size={26} color="black"/>
          </View>

          <View style={styles.line}></View>

          <View style={styles.moduleContent}>
            <View style={styles.moduleCardContentParts}>
              <Pressable style={styles.button} android_ripple={{color: '#839efc'}}>
                <Text style={styles.buttonText}>Number of Tests</Text>
              </Pressable>
            </View>
            <View style={styles.moduleCardContentParts}>
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
    backgroundColor: '#DDE2FF',
    gap: 10,
    padding: 15,
    marginBottom: 30,
    borderRadius: 10,
    elevation: 4,
  },
  moduleCardContentParts: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  moduleCardContentHeading: {
    color: "#0e0e0e",
    fontSize: 22,
    fontWeight: "700",
  },  
  line: {
    marginLeft: 20,
    margin: 8,
    height: 1,
    width: '87%',
    backgroundColor: '#0e0e0e',
    opacity: .75,
  },
  moduleContent: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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