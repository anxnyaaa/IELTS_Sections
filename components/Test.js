import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Test({ level, navigation }) {
  
  return (    
    <View style={styles.cardAdvance}>
      <View style={styles.cardAdvanceContent}>
        <View style={styles.cardAdvanceContentHeading}>
          <Ionicons
            name="reader-outline"
            size={20}
            color="white"
            style={{
              backgroundColor: "#1F41BB",
              borderRadius: 50,
              padding: 8,
            }}
          />
          <View style={styles.cardAdvanceContentHeadingText}>
            <Text style={styles.cardAdvanceContentHeadingTextHead}>
              Level {level}
            </Text>
            <Text style={styles.cardAdvanceContentHeadingTextBody}>
              ADVANCE READING SKILLS
            </Text>
          </View>
        </View>
        <View style={styles.cardAdvanceActivity}>
          <View style={styles.cardContentParts}>
            <Ionicons name="calendar-clear-outline" size={16} color="gray" />
            <Text>Quiz</Text>
          </View>
          <View style={styles.cardContentParts}>
            <Ionicons name="time-outline" size={16} color="gray" />
            <Text>45 Min</Text>
          </View>
        </View>
      </View>

      <Pressable style={[styles.button, { padding: 10 }]} onPress={() => navigation.navigate("Test")} android_ripple={{color: '#839efc'}}>
        <View style={styles.testButton}>
          <Text style={{ color: "white", fontWeight: 500 }}>Take Test</Text>
          <Ionicons name="lock-closed-outline" size={18} color="white" />
        </View>
      </Pressable>
        
    </View>
  );
}

export default Test;

const styles = StyleSheet.create({
  cardAdvance: {
    width: "100%",
    backgroundColor: "#e0edff",
    gap: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 4,
  },
  cardAdvanceContent: {
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  cardAdvanceContentHeading: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  cardAdvanceContentHeadingText: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardAdvanceContentHeadingTextHead: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
  },
  cardAdvanceContentHeadingTextBody: {
    color: "#1F41BB",
    fontSize: 12,
    fontWeight: "400",
  },
  cardAdvanceActivity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  button: {
    opacity: .75,
    backgroundColor: "#1F41BB",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  testButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  cardContentParts: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
});
