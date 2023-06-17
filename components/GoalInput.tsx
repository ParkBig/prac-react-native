import { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface GoalList {
  id: string;
  text: string;
}

interface Props {
  isModalOpen: boolean;
  toggleModalHandler: () => void;
  setGoalList: React.Dispatch<React.SetStateAction<GoalList[]>>;
}

const GoalInput = (props: Props) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (goalText: string) => {
    setGoalText(goalText);
  };

  const addGoalHandler = (ttt: GestureResponderEvent) => {
    props.setGoalList((prev) => [
      ...prev,
      { id: Math.random().toString(), text: goalText },
    ]);
    setGoalText("");
  };

  return (
    <Modal visible={props.isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Yr course goal!"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.toggleModalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
