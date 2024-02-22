import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";

const Examtest = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "http://192.168.90.24:3000/exam/module1/level1/questions"
        );
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0 && currentQuestion === questions.length - 1) {
      setLastQuestion(true);
    } else {
      setLastQuestion(false);
    }
  }, [currentQuestion, questions]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswer = () => {
    const selectedOption = selectedOptions[currentQuestion]?.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    //const handleAnswer = () => {
    //setStopTimer(true);
    if (lastQuestion) {
      let newScore = 0;
      Object.entries(selectedOptions).forEach(([index, selectedOption]) => {
        if (questions[index].correctAnswer === selectedOption?.value) {
          newScore++;
        }
      });
      setQuizCompleted(true);
      const percentage = (newScore / questions.length) * 100;
      clearInterval(timer); // Stop the timer
      Alert.alert("Quiz Result", `Your score: ${percentage.toFixed(2)}%`, [
        {
          text: "OK",
          onPress: () => {
            // Navigate to Module.js page after displaying the result
            navigation.navigate("Module 1");
          },
        },
      ]);
    } else {
      setCurrentQuestion(currentQuestion);
    }
  };

  const handleOptionSelect = (option, index) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: { value: option, index },
    });
  };

  const handleQuestionSelect = (index) => {
    console.log(index);
    setCurrentQuestion(index);
  };

  if (!questions || questions.length === 0) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    // console.log("Ayush-chan");
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleQuestionSelect(index)}
      style={[styles.item, index === currentQuestion && styles.selectedItem]}
    >
      <Text style={styles.title}>{index + 1}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = (_, index) => index.toString();

  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* <Text>{JSON.stringify(questions)}</Text> */}
      {quizCompleted ? (
        <View>
          <Text style={styles.score}>Quiz Completed</Text>
        </View>
      ) : (
        <View>
          {questions[currentQuestion]?.question && (
            <Text style={styles.question}>
              {questions[currentQuestion].question}
            </Text>
          )}
          {questions[currentQuestion]?.options &&
            questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.option,
                  selectedOptions[currentQuestion]?.index === index &&
                    styles.selectedOption,
                ]}
                onPress={() => handleOptionSelect(option, index)}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={() => handleOptionSelect(null)}
            >
              <Text style={[styles.buttonText, styles.clearButtonText]}>
                Clear
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.submitButton,
                lastQuestion ? null : styles.disabledButton,
              ]}
              onPress={handleAnswer}
              disabled={!lastQuestion}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Examtest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    width: "100%",
  },
  number: {
    flex: 1,
    paddingVertical: 25,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    width: 40,
    height: 40,
    padding: 5,
    borderColor: "#E8ECF4",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedItem: {
    backgroundColor: "#1F41BB", // Highlight color for selected number
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  question: {
    backgroundColor: "white",
    borderColor: "#E8ECF4",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "baseline",
    justifyContent: "flex-start",
    color: "#1F41BB",
    fontSize: 18,
    fontWeight: "bold",
  },
  option: {
    backgroundColor: "white",
    borderColor: "#E8ECF4",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: "flex-start",
  },
  selectedOption: {
    backgroundColor: "#1F41BB", // Change the background color for selected option
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Adjust text color for better visibility
  },
  clearButtonText: {
    color: "#1F41BB", // Blue color for clear button text
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    width: "48%",
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: "#1F41BB",
    borderWidth: 2,
  },
  submitButton: {
    backgroundColor: "#1F41BB",
  },
  disabledButton: {
    opacity: 0.75, // Reduce opacity by 25% when disabled
  },
});
