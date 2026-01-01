import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";

import List from "../components/meal/List";
import Summary from "../components/meal/Summary";
import HomeButton from "../components/ui/HomeButton";
import { MEALS } from "../data/dummy-data";
import { Color } from "../utils/colors";
import { Navigation, NavigationRouter } from "../utils/navigation";

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
      headerRight: () => <HomeButton></HomeButton>,
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
