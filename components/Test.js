import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Test({ level, navigation, enabled, updateResult, firstTestResult }) {
  const lockTestAlert = () => {
    if (!enabled) {
      Alert.alert('No Cheating!', 'You must complete the previous level.', [
        {
          text: 'Watch',
          onPress: () => console.log('Watching Previous Lectures'),
          style: 'destructive'
        },
      ]);
    }
  };

  const handleTestPress = () => {
    if (enabled) {
      navigation.navigate("Test", { navigation });
      //updateProgress();
    } else {
      lockTestAlert();
    }
  };

  return (
    <View style={styles.test}>
      <View style={[styles.level, !enabled && styles.levelLocked]}>
        <Text style={styles.levelHeading}>Level {level}</Text>
        {/* Check if the firstTestResult is less than 70 or not available, then show the lock icon */}
        {!enabled && (!firstTestResult || firstTestResult < 70) && <Ionicons name="lock-closed-outline" size={22} color="#001AA1" />}
      </View>
      <View style={styles.cardAdvance}>
        <View style={styles.cardAdvanceContent}>
          <View style={styles.cardAdvanceContentHeading}>
            <View style={styles.cardAdvanceContentHeadingLeft}>
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
                <Text style={styles.cardAdvanceContentHeadingTextHead}>Level {level}</Text>
                <Text style={styles.cardAdvanceContentHeadingTextBody}>ASSESSMENT</Text>
              </View>
            </View>
            {/* Check if the firstTestResult is less than 70 or not available, then show the lock icon */}
            {!enabled && (!firstTestResult || firstTestResult < 70) && <Ionicons name="lock-closed-outline" size={22} color="#001AA1" />}
          </View>
          <View style={styles.cardAdvanceActivity}>
            <View style={styles.cardContentParts}>
              <Ionicons name="calendar-clear-outline" size={16} color="gray" />
              <Text>40 Questions</Text>
            </View>
            <View style={styles.cardContentParts}>
              <Ionicons name="time-outline" size={16} color="gray" />
              <Text>40 Mins</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={[styles.button, { padding: 10 }]}
          onPress={handleTestPress}
          android_ripple={{ color: '#839efc' }}
        >
          <View style={styles.testButton}>
            <Text style={{ color: "white", fontWeight: 500 }}>Take Test</Text>
            {/* Check if the firstTestResult is less than 70 or not available, then show the lock icon */}
            {!enabled && (!firstTestResult || firstTestResult < 70) && <Ionicons name="lock-closed-outline" size={18} color="white" />}
          </View>
        </Pressable>

      </View>
    </View>
  );
}

export default Test;


const styles = StyleSheet.create({
  test: {
    flex: 1,
  },
  level: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  levelLocked: {
    flexDirection: "row",
  },
  levelHeading: {
    fontSize: 15,
    color: "#1F41BB",
    fontSize: 20,
    fontWeight: "700",
  },
  cardAdvance: {
    width: "100%",
    backgroundColor: "#e0edff",
    gap: 10,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 4,
  },
  cardAdvanceContent: {
    alignItems:'stretch',
    justifyContent: "space-between",
  },
  cardAdvanceContentHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardAdvanceContentHeadingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
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
  buttonLocked: {
    //opacity: .75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonUnlocked: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
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
