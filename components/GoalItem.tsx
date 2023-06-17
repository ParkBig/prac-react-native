import { Pressable, StyleSheet, Text, View } from "react-native";

interface GoalList {
  id: string;
  text: string;
}

interface Props {
  item: GoalList;
  onDelete: (id: any) => void;
}

const GoalItem = ({ item, onDelete }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDelete.bind(this, item.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
