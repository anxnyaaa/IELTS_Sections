import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

function Graph() {
  return (    
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{flex: 1}}>   
            <Text style={styles.header}>Module 1</Text>
            <BarChart
                data={{
                labels: ["Correct", "Not Correct"],
                datasets: [{
                    data: [15,25]}
                ]
                }}
                width={Dimensions.get("window").width-50} // from react-native
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 0, // optional, defaults to 2dp
                fromZero: false,
                color: (opacity = 1) => `rgba(0, 26, 161, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 26, 161, ${opacity})`,
                style: { borderRadius: 16 },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
            </SafeAreaView>
          </ScrollView>
      </View>
    
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,    
    
  },
  header: {
    textAlign: 'center',
    color: '#001AA1',
    fontWeight: '700',
    fontSize: 18,
    padding: 16,
    marginTop: 30,
  },
});