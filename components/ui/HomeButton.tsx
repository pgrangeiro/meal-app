import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import { Navigation, NavigationRouter } from "../../utils/navigation";
import { Color } from "../../utils/colors";

function HomeButton() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationRouter>>();

  function onHomeButtonPressHandler() {
    navigation.navigate(Navigation.CATEGORIES, {});
  }

  return (
    <Pressable onPress={onHomeButtonPressHandler}>
      <FontAwesome
        name="home"
        color={Color.WHITE}
        style={styles.icon}
      ></FontAwesome>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    marginLeft: 4,
  },
});

export default HomeButton;
