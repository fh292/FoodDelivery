import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../components/screens/Home/HomePage";
import MenuItems from "../../components/screens/MenuItems";
import DishDetails from "../../components/screens/DishDetails";
import Cart from "../../components/screens/Cart";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../api/storage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={async () => {
                await deleteToken();
                setAuthenticated(false);
              }}
            >
              <MaterialCommunityIcons name="logout" size={24} color="white" />
            </TouchableOpacity>
          );
        },
      }}
    >
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
