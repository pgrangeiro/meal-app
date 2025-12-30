import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Navigation, NavigationRouter } from "../utils/navigation";

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
      renderItem={(data) => <Text>{data.item.title}</Text>}
    ></FlatList>
  );
}

export default MealsOverviewScreen;
