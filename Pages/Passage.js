import React, { useEffect } from "react";
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

function Passage(props) {
  const handleTimerEnd = () => {
    props.navigation.navigate("Module 1");
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>{props.passage}</Text>
    </View>
  );
  //   return (
  //     <View style={styles.testContainer}>
  //       <ScrollView showsVerticalScrollIndicator={false}>
  //         <View style={styles.first}>
  //           <Text style={styles.heading}>Passage</Text>
  //           <View style={[styles.heading, { gap: 15 }]}>
  //             <View style={styles.iconContainer}>
  //               <Pressable
  //                 // navigation={"Passage"}
  //                 android_ripple={{ color: "#839efc" }}
  //                 onPress={() => {
  //                   Alert.alert("Clicked");
  //                 }}
  //               >
  //                 <Ionicons name="eye-outline" size={22} color="white" />
  //               </Pressable>
  //             </View>
  //             <Stopclock
  //               onTimerEnd={handleTimerEnd}
  //               navigation={props.navigation}
  //             />
  //           </View>
  //         </View>
  //         <Examtest navigation={props.navigation} />

  //         <StatusBar style="auto" />
  //       </ScrollView>
  //     </View>
  //   );
}

export default Passage;

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
    backgroundColor: "#1f41bb",
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
