import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { Navigation, NavigationRouter } from "../utils/navigation";

import Card from "../components/Category/Card";

type CategoriesScreeenProps = NativeStackScreenProps<
  NavigationRouter,
  Navigation.CATEGORIES
>;

function CategoriesScreen({ navigation }: CategoriesScreeenProps) {
  function onPressHandler(categoryId: string) {
    navigation.navigate(Navigation.MEALS_OVERVIEW, { categoryId });
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={(data) => (
        <Card
          color={data.item.color}
          onPress={() => onPressHandler(data.item.id)}
        >
          {data.item.name}
        </Card>
      )}
    ></FlatList>
  );
}

export default CategoriesScreen;
