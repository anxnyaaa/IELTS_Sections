import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CardLocked({ icon, topic, unlocked }) {
  const lockVideoAlert = () => {
    if (!unlocked) {
      Alert.alert('No Cheating!', 'You must complete the previous lectures.', [
        {
          text: 'Watch',
          onPress: () => console.log('Watching Previous Lectures'),
          style: 'destructive'
        },
      ]);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.cardContentParts}>
          <Ionicons
            name={icon}
            size={12}
            color="white"
            style={{
              backgroundColor: "#1F41BB",
              borderRadius: 50,
              padding: 3,
            }}
          />
          <Text style={styles.cardContentHeading}>{topic}</Text>
        </View>
        <View style={styles.cardContentParts}>
          <Ionicons name="videocam-outline" size={16} color="gray" />
          <Text>Video</Text>
        </View>
        <View style={styles.cardContentParts}>
          <Ionicons name="time-outline" size={16} color="gray" />
          <Text>45 Min</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          unlocked ? styles.buttonUnlocked : styles.buttonLocked,
          pressed && unlocked && styles.buttonPressed,
        ]}
        onPress={unlocked ? null : lockVideoAlert}
        android_ripple={{ color: '#839efc'}}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Watch Video</Text>
          {!unlocked && <Ionicons name="lock-closed-outline" size={18} color="white" />}
        </View>
      </Pressable>
    </View>
  );
}

export default CardLocked;


const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#edebeb",
    gap: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContentParts: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  cardContentHeading: {
    color: "#1F41BB",
    fontSize: 16,
    fontWeight: "700",
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
  buttonLocked: {
    opacity: .75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  buttonUnlocked: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});