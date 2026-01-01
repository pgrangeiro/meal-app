import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import { Navigation, NavigationRouter } from "../utils/navigation";

import Card from "../components/Meal/Card";

type MealsOverviewScreenProps = NativeStackScreenProps<
  NavigationRouter,
  Navigation.MEALS_OVERVIEW
>;

function MealsOverviewScreen({ navigation, route }: MealsOverviewScreenProps) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  function onSelectMeal(id: string) {
    navigation.navigate(Navigation.MEAL_DETAILS, { id });
  }

  return (
    <FlatList
      data={meals}
      renderItem={(data) => (
        <Card
          title={data.item.title}
          duration={data.item.duration}
          complexity={data.item.complexity}
          affordability={data.item.affordability}
          imageUrl={data.item.imageUrl}
          onPress={() => onSelectMeal(data.item.id)}
        ></Card>
      )}
    ></FlatList>
  );
}

export default MealsOverviewScreen;
