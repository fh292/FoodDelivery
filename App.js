import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getToken } from "./src/api/storage";
import { useEffect, useState } from "react";
import UserContext from "./src/context/UserContext";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";

export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false); //keep track of the user status
  const checkToken = async () => {
    // check if the token exists
    const token = await getToken();
    // exists ? setAuth to true : null
    if (token) setAuthenticated(true);
  };

  // useEffect
  useEffect(() => {
    checkToken();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent />
        {/* header */}

        {/* <MainNavigation /> */}

        <UserContext.Provider value={[authenticated, setAuthenticated]}>
          {authenticated ? <MainNavigation /> : <AuthNavigation />}
        </UserContext.Provider>
      </NavigationContainer>
    </QueryClientProvider>
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
