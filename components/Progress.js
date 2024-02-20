import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

function Level({ progress }) {
  return (
    <View style={styles.level}>
        <Text style={styles.levelText}>{/*{progress.toFixed(2)}*/}50% completed</Text>
        {/*<Progress.Bar progress={progress / 100} width={340} color="#385682" />*/}
        <Progress.Bar progress={0.5} width={370} color="#385682" />        
    </View>

  );
}

export default Level;

const styles = StyleSheet.create({
      level: {
        alignItems: "center",
        gap: 6,
        marginVertical: 15,
      },
      levelText: {
        fontSize: 15,
        color: "#1F41BB",
        fontSize: 15,
        fontWeight: "400",
      },
});