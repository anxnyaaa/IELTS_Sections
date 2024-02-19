import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const data = [
  { key: '1', title: '1' },
  { key: '2', title: '2' },
  { key: '3', title: '3' },
  { key: '4', title: '4' },
  { key: '5', title: '5' },
  { key: '6', title: '6' },
  { key: '7', title: '7' },
  { key: '8', title: '8' },
  { key: '9', title: '9' },
  { key: '10', title: '10' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const keyExtractor = (item) => item.key;

const Questions = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 2,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
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
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
});

export default Questions;
