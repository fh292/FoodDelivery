import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "./src/components/screens/CategoryList";
import RestaurantList from "./src/components/screens/RestaurantList";
import LoginPage from "./src/components/screens/LoginPage";
import RegisterPage from "./src/components/screens/RegisterPage";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#89A8B2" }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Sufra</Text>
        </View>
        {/* <RegisterPage />
        <LoginPage /> */}
        <CategoryList />
        <RestaurantList />
      </SafeAreaView>
    </SafeAreaView>
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
    paddingTop: (StatusBar.currentHeight || 24) + 20,
  },
  headerText: {
    color: "#F1F0E8",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
});
