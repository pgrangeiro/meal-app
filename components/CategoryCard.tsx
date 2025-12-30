import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Color } from "../utils/colors";

interface CategoryCardInput extends PropsWithChildren {
  color: string;
  onPress: () => void;
}

function CategoryCard({ children, color, onPress }: CategoryCardInput) {
  return (
    <View style={styles.card}>
      <Pressable
        style={[styles.innerContainer, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.title}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Color.BLACK,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryCard;
