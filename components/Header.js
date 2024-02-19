import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Heading({ heading }) {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Pressable android_ripple={{color: '#839efc'}}>
          <Ionicons name="menu-outline" size={24} color="#0e0e0e" />
        </Pressable>
      </View>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.iconContainer}>
        <Pressable android_ripple={{color: '#839efc'}}><Ionicons name="log-out-outline" size={24} color="#0e0e0e" /></Pressable>
      </View>
    </View>  
    
  );
}

export default Heading;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    padding: 5,
    borderColor: '#E8ECF4',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#1F41BB",
    fontSize: 28,
    fontWeight: "900",
  },
});
