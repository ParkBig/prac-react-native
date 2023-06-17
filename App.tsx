import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface GoalList {
  id: string;
  text: string;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalList, setGoalList] = useState<GoalList[]>([]);


  const toggleModalHandler = () => {
    setIsModalOpen(prev => !prev)
  }

  const deleteGoalHandler = (id: string) => {
    setGoalList(prev => prev.filter((goal) => goal.id !== id))
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={toggleModalHandler} />
        <GoalInput isModalOpen={isModalOpen} setGoalList={setGoalList} toggleModalHandler={toggleModalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            alwaysBounceVertical={false}
            renderItem={({ item }: { item: GoalList }) => (
              <GoalItem onDelete={deleteGoalHandler} item={item} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
