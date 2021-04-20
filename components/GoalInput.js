import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enterText) => {
    setEnterGoal(enterText);
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enterGoal}
          onChangeText={goalInputHandler}
          placeholder="Course goal"
          style={styles.input}
        />
        <Button onPress={() => props.onAddGoal(enterGoal)} title="Add" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 42,
    width: 200,
    margin: 10,
  },
});

export default GoalInput;
