import { Image, StyleSheet, Text, View } from "react-native";

interface SummaryProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

function Summary({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: SummaryProps) {
  return (
    <>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image}></Image>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.tag}>{duration}m</Text>
        <Text style={styles.tag}>{complexity.toUpperCase()}</Text>
        <Text style={styles.tag}>{affordability.toUpperCase()}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
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

export default Summary;
