import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" translucent />
        {/* header */}

        <MainNavigation />
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
