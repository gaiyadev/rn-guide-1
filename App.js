import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoal([
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  const onDeleteHandler = (id) => {
    setCourseGoal((curr) => {
      return courseGoal.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.screen}>
      <Button onPress={() => setIsAddMode(true)} title="Add New Goal" />
      <GoalInput visible= {isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={onDeleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
