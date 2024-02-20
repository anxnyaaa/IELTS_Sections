import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Examdata } from './Examdata';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const handleAnswer = () => {
    if (selectedOption === Examdata[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < Examdata.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for the next question
      setTimeLeft(10);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {quizCompleted ? (
        <View>
          <Text style={styles.score}>Your Score: {score}</Text>
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
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleAnswer}
            disabled={!selectedOption}>
            <Text style={styles.buttonText}>Submit Answer</Text>
          </TouchableOpacity>
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
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#1F41BB',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
});
