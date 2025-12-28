import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridCard from "../components/CategoryGridCard";

function CategoriesScreen() {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={(data) => (
        <CategoryGridCard color={data.item.color}>
          {data.item.name}
        </CategoryGridCard>
      )}
    ></FlatList>
  );
}

export default CategoriesScreen;
