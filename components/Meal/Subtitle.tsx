import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../utils/colors";

function Subtitle({ children }: PropsWithChildren) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderColor: Color.BLACK,
    borderBottomWidth: 2,
  },
});

export default Subtitle;
