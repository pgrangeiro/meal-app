import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import Subtitle from "./Subtitle";

interface ListProps extends PropsWithChildren {
  isIndexed?: boolean;
  data: string[];
}

function List({ children, data, isIndexed }: ListProps) {
  return (
    <>
      <Subtitle>{children}</Subtitle>
      <View style={styles.container}>
        {data.map((item, index) => (
          <Text style={styles.container} key={index}>
            {isIndexed && `${index + 1}. `}
            {item}
          </Text>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 12,
    marginVertical: 2,
  },
});

export default List;
