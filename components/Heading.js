import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Heading({ icon, heading }) {
  return (
    <View style={styles.heading}>
      <Ionicons
        name={icon}
        size={24}
        color="white"
        style={{ backgroundColor: "#1F41BB", borderRadius: 50, padding: 3 }}
      />
      <Text style={styles.headingText}>{heading}</Text>
    </View>
  );
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  headingText: {
    color: "#1F41BB",
    fontSize: 24,
    fontWeight: "900",
  },
});
