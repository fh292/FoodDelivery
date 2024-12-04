import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const DishDetails = ({ route }) => {
  const navigation = useNavigation();
  const { dish } = route.params;
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    Alert.alert("Added to Cart");
    setQuantity(quantity + 1);
    navigation.navigate("Cart");
  };
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = dish.price * quantity;
  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.backgroundImage} />

      <View style={styles.card}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>Price: ${totalPrice.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0E8",
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  card: {
    marginTop: -50,
    marginHorizontal: 20,
    backgroundColor: "#E5E1DA",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#447E9D",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5898BA",
    textAlign: "center",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: "#B3C8CF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#F1F0E8",
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#89A8B2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addToCartText: {
    fontSize: 16,
    color: "#F1F0E8",
    fontWeight: "bold",
  },
});
