import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "./src/components/screens/CategoryList";
import RestaurantList from "./src/components/screens/RestaurantList";

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: "#89A8B2" }} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Sufra</Text>
        </View>
        <CategoryList />
        <RestaurantList />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    backgroundColor: "#F1F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 20,
    backgroundColor: "#89A8B2",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    color: "#F1F0E8",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
});
