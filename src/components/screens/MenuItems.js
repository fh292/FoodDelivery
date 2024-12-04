import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuItems = ({ route }) => {
  const navigation = useNavigation();
  const { restaurant } = route.params;
  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DishDetails", { dish: item })}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.menuDetails}>
          <Text style={styles.menuName}>{item.name}</Text>
          <Text style={styles.menuDescription}>{item.description}</Text>
          <Text style={styles.menuPrice}>Price: {item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.restaurantImage}
        />
        <View style={styles.headerDetails}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.restaurantInfo}>
            ⭐ {restaurant.rating} | ⏱ {restaurant.deliveryTime}
          </Text>
        </View>
      </View>

      <FlatList
        data={restaurant.menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0E8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E1DA",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#B3C8CF",
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  headerDetails: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#447E9D",
  },
  restaurantInfo: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#E5E1DA",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 150,
  },
  menuDetails: {
    flex: 1,
    padding: 10,
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5898BA",
  },
  menuDescription: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  menuPrice: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#B3C8CF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#447E9D",
    fontSize: 14,
    fontWeight: "bold",
  },
});
