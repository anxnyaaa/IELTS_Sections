import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Examdata } from './Examdata';

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

const renderItem = ({ item, index, onPress, isSelected }) => (
  <TouchableOpacity onPress={() => onPress(index)} style={[styles.item, isSelected ? styles.selectedItem : null]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const keyExtractor = (item) => item.key;

const Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(Examdata.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentQuestion === Examdata.length - 1) {
      setLastQuestion(true);
    } else {
      setLastQuestion(false);
    }
  }, [currentQuestion]);

  const [stopTimer, setStopTimer] = useState(false);

  const handleAnswer = () => {
    //console.log('Handle answer called');
    setStopTimer(true)
    if (lastQuestion) {
      //console.log('Last question reached');
      let newScore = 0;
      ;
      selectedOptions.forEach((selectedOption, index) => {
        if (selectedOption === Examdata[index].correctAnswer) {
          newScore++;
        }
      });
      setQuizCompleted(true);
      const percentage = (newScore / Examdata.length) * 100;
      clearInterval(timer); // Stop the timer
      Alert.alert('Quiz Result', `Your score: ${percentage.toFixed(2)}%`, [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to Module.js page after displaying the result
            navigation.navigate('Module 1');
          },
        },
      ]);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
   
  
  const handleOptionSelect = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => renderItem({ item, index, onPress: handleQuestionSelect, isSelected: index === currentQuestion })}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {quizCompleted ? (
        <View>
          <Text style={styles.score}>Quiz Completed</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.question}>
            {Examdata[currentQuestion].question}
          </Text>
          {Examdata[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOptions[currentQuestion] === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={() => handleOptionSelect(null)}>
              <Text style={[styles.buttonText, styles.clearButtonText]}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton, lastQuestion ? null : styles.disabledButton]}
              onPress={handleAnswer}
              disabled={!lastQuestion}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
  },
  number: {
    flex: 1,
    paddingVertical: 25
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
  selectedItem: {
    backgroundColor: '#1F41BB', // Highlight color for selected number
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  question: {
    backgroundColor: 'white',
    borderColor: '#E8ECF4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    color: '#1F41BB',
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: 'white',
    borderColor: '#E8ECF4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  selectedOption: {
    backgroundColor: '#1F41BB', // Change the background color for selected option
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Adjust text color for better visibility
  },
  clearButtonText: {
    color: '#1F41BB', // Blue color for clear button text
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    width: '48%',
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderColor: '#1F41BB',
    borderWidth: 2,
  },
  submitButton: {
    backgroundColor: '#1F41BB',
  },
  disabledButton: {
    opacity: 0.75, // Reduce opacity by 25% when disabled
  },
});
