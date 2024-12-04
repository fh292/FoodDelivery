import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "./src/components/screens/Home/CategoryList";
import RestaurantList from "./src/components/screens/Home/RestaurantList";
import LoginPage from "./src/components/screens/Auth/LoginPage";
import RegisterPage from "./src/components/screens/Auth/RegisterPage";
import MenuItems from "./src/components/screens/MenuItems";
import DishDetails from "./src/components/screens/DishDetails";
import Cart from "./src/components/screens/Cart";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent />
      {/* header */}
      {/* <AuthNavigation /> */}
      {/* <HomeNavigation /> */}
      <MainNavigation />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <CategoryList />
        <RestaurantList /> */}
      {/* <MenuItems /> */}
      {/* <DishDetails /> */}
      {/* <Cart /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0E8",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#89A8B2",
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
    paddingTop: (StatusBar.currentHeight || 24) + 5,
  },
  headerText: {
    color: "#F1F0E8",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
});
