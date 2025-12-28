import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <CategoriesScreen></CategoriesScreen>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
