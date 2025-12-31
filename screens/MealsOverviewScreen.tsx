import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import { Navigation, NavigationRouter } from "../utils/navigation";

import MealCard from "../components/MealCard";

type MealsOverviewScreenProps = NativeStackScreenProps<
  NavigationRouter,
  Navigation.MEALS_OVERVIEW
>;

function MealsOverviewScreen({ route }: MealsOverviewScreenProps) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  return (
    <FlatList
      data={meals}
      renderItem={(data) => (
        <MealCard
          title={data.item.title}
          duration={data.item.duration}
          complexity={data.item.complexity}
          affordability={data.item.affordability}
          imageUrl={data.item.imageUrl}
        ></MealCard>
      )}
    ></FlatList>
  );
}

export default MealsOverviewScreen;
