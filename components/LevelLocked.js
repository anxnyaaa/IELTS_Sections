import { Text, View, StyleSheet} from "react-native";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";

function LevelLocked({ lno, progress }) {
  return (
        <View style={styles.level}>
          <View style={[styles.level, styles.levelLocked]}>
            <Text style={styles.levelHeading}>Level {lno}</Text>
            <Ionicons name="lock-closed-outline" size={22} color="#001AA1" />
          </View>
          <Progress.Bar progress={progress} width={340} color="#385682" />
          <Text style={styles.levelText}>0% completed</Text>
        </View>
  );
}

export default LevelLocked;

const styles = StyleSheet.create({
      level: {
        alignItems: "center",
        gap: 6,
        marginTop: 10,
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
      levelText: {
        fontSize: 15,
        color: "#1F41BB",
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 10,
      }
});