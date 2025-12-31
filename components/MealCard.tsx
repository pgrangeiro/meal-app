import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Color } from "../utils/colors";

interface MealCardProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

function MealCard({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealCardProps) {
  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image}></Image>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.tag}>{duration}m</Text>
        <Text style={styles.tag}>{complexity.toUpperCase()}</Text>
        <Text style={styles.tag}>{affordability.toUpperCase()}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: Color.WHITE,
    elevation: 4,
    shadowColor: Color.BLACK,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  tag: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealCard;
