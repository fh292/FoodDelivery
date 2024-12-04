import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      <View style={styles.cartInfo}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleDecrement(item.id)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleIncrement(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => Alert.alert("Checkout", "Proceed to payment?")}
      >
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0E8",
    padding: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#447E9D",
    marginBottom: 20,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#E5E1DA",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cartImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 10,
  },
  cartInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  cartName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#89A8B2",
    marginBottom: 5,
  },
  cartPrice: {
    fontSize: 16,
    color: "#447E9D",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#B3C8CF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    color: "#333",
    marginHorizontal: 15,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#447E9D",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#447E9D",
  },
  checkoutButton: {
    backgroundColor: "#89A8B2",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
