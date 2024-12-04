import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import restaurantCategories from "../../data/restaurantCategories";

const CategoryList = () => {
  const category = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.categoryImage }} style={styles.picture} />
      <Text style={styles.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantCategories}
        renderItem={category}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    gap: 10,
  },
  categoryName: {
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 8,
      padding: 10,
      width: 100,
      height: 140,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 4,
      borderWidth: 1,
      borderColor: "#f0f0f0",
    },
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  categoryName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
  },
});
