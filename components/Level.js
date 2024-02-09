import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

function Level({ lno, progress }) {
  return (
    <View style={styles.level}>
        <View>
            <Text style={styles.levelHeading}>Level {lno}</Text>
        </View>
        <Progress.Bar progress={progress} width={340} color="#385682" />
        <Text style={styles.levelText}>33% completed</Text>
    </View>

  );
}

export default Level;

const styles = StyleSheet.create({
      level: {
        alignItems: "center",
        gap: 6,
        marginTop: 10,
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
      },
});