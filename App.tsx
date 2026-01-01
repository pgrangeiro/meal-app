import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Color } from "./utils/colors";
import { Navigation, NavigationRouter } from "./utils/navigation";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator<NavigationRouter>();
const navigationOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: Color.LIGHT_BROW },
  headerTintColor: Color.WHITE,
  contentStyle: { backgroundColor: Color.MEDIUM_BROW },
};

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={navigationOptions}>
              <Stack.Screen
                name={Navigation.CATEGORIES}
                component={CategoriesScreen}
              ></Stack.Screen>
              <Stack.Screen
                name={Navigation.MEALS_OVERVIEW}
                component={MealsOverviewScreen}
              ></Stack.Screen>
              <Stack.Screen
                name={Navigation.MEAL_DETAILS}
                component={MealDetailsScreen}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BLACK,
  },
});
