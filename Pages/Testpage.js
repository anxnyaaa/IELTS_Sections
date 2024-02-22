import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Stopclock from "../timer/Stopclock";
import Examtest from "../exam/Examtest";
import Passage from "./Passage";

function Testpage(props) {
  const [passage, setPassage] = useState();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "http://192.168.90.24:3000/exam/module1/level1/questions"
        );
        const data = await response.json();
        console.log(data[0].passage);
        setPassage(data[0].passage);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);
  const handleTimerEnd = () => {
    props.navigation.navigate("Module 1");
  };

  return (
    <View style={styles.testContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.first}>
          <Text style={styles.heading}>Questions</Text>
          <View style={[styles.heading, { gap: 15 }]}>
            <View style={styles.iconContainer}>
              <Pressable
                android_ripple={{ color: "#839efc" }}
                onPress={() => {
                  setClicked(clicked ? false : true);
                }}
              >
                <Ionicons name="eye-outline" size={22} color="#1F41BB" />
              </Pressable>
            </View>
            <Stopclock
              onTimerEnd={handleTimerEnd}
              navigation={props.navigation}
            />
          </View>
        </View>
        {clicked === true ? (
          <Passage passage={passage} />
        ) : (
          <Examtest navigation={props.navigation} />
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

export default Testpage;

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#1F41BB",
    fontSize: 28,
    fontWeight: "900",
  },
  iconContainer: {
    backgroundColor: "#ffffff",
    width: 36,
    height: 36,
    padding: 5,
    borderColor: "#1F41BB",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  left: {
    flexDirection: "row",
  },
  tab: {
    padding: 10,
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  tabRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
  },
  qsNo: {
    borderColor: "#ebebeb",
    backgroundColor: "#ffff",
    borderRadius: 0,
  },
});
