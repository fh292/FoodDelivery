import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../components/screens/Home/HomePage";
import MenuItems from "../../components/screens/MenuItems";
import DishDetails from "../../components/screens/DishDetails";
import Cart from "../../components/screens/Cart";
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#89A8B2" },
          title: "Sufra",
          headerTitleStyle: { color: "#F1F0E8", fontSize: 24 },
        }}
      />
      <Stack.Screen
        name="MenuItems"
        component={MenuItems}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#89A8B2" },
          title: "Sufra",
          headerTitleStyle: { color: "#F1F0E8", fontSize: 24 },
        }}
      />
      <Stack.Screen
        name="DishDetails"
        component={DishDetails}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#89A8B2" },
          title: "Sufra",
          headerTitleStyle: { color: "#F1F0E8", fontSize: 24 },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#89A8B2" },
          title: "Sufra",
          headerTitleStyle: { color: "#F1F0E8", fontSize: 24 },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
