import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
// import restaurants from "../../data/restaurants";
import { useNavigation } from "@react-navigation/native";
import { getResturants } from "../../../api/items";
import { useQuery } from "@tanstack/react-query";

const RestaurantList = () => {
  const navigation = useNavigation();
  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("MenuItems", { restaurant: item })}
    >
      <Image source={{ uri: item.image }} style={styles.picture} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>Rating ⭐: {item.rating}</Text>
        <Text style={styles.deliveryTime}>
          Delivery Time 🕒: {item.deliveryTime}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getResturants,
  });
  if (isLoading) return <Text>Loading...</Text>;
  console.log("rests");
  console.log(restaurants);
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#F1F0E8",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E1DA",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#B3C8CF",
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#89A8B2",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  deliveryTime: {
    fontSize: 12,
    color: "#555",
  },
});
