import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation, NavigationRouter } from "../utils/navigation";
import { MEALS } from "../data/dummy-data";
import Summary from "../components/Meal/Summary";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Color } from "../utils/colors";
import Subtitle from "../components/Meal/Subtitle";
import List from "../components/Meal/List";
import { useLayoutEffect } from "react";

type MealDetailsScreenProps = NativeStackScreenProps<
  NavigationRouter,
  Navigation.MEAL_DETAILS
>;

function MealDetailsScreen({ navigation, route }: MealDetailsScreenProps) {
  const { id } = route.params;
  const meal = MEALS.filter((item) => item.id === id)[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [navigation, meal]);

  return (
    <ScrollView style={styles.container}>
      <Summary
        title={meal.title}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        imageUrl={meal.imageUrl}
      ></Summary>
      <List data={meal.ingredients}>Ingredients</List>
      <List data={meal.steps} isIndexed={true}>
        Steps
      </List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
});

export default MealDetailsScreen;
