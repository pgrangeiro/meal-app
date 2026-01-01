import { Pressable, StyleSheet } from "react-native";
import { Color } from "../../utils/colors";
import Summary from "./Summary";

interface CardProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress: () => void;
}

function Card({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}: CardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Summary
        title={title}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        imageUrl={imageUrl}
      ></Summary>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});

export default Card;
