import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../../components/screens/Auth/RegisterPage";
import LoginPage from "../../components/screens/Auth/LoginPage";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#89A8B2" },
          title: "Sufra",
          headerTitleStyle: { color: "#F1F0E8", fontSize: 24 },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
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

export default AuthNavigation;
