import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { React, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../api/auth";
import UserContext from "../../../context/UserContext";
import AntDesign from "@expo/vector-icons/AntDesign";
const RegisterPage = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const userInfo = {
    username: username,
    password: password,
  };

  const { mutate } = useMutation({
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      setAuthenticated(true);
    },
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!username || !password) {
      Alert.alert("Username and/or Password cannot be empty");
      return;
    }
    Alert.alert("Registered Successful");
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#B3C8CF"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B3C8CF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{ marginTop: 20, flexDirection: "row" }}
          onPress={pickImage}
        >
          <AntDesign name="picture" size={18} color="#447E9D" />
          <Text
            style={{
              color: "#447E9D",
              fontSize: 16,
              marginBottom: 15,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Upload Profile Image
          </Text>
        </TouchableOpacity>

        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F0E8",
    padding: 20,
  },
  card: {
    backgroundColor: "#E5E1DA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: 320,
    height: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#447E9D",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#B3C8CF",
    fontSize: 16,
    color: "#333",
  },
  registerButton: {
    backgroundColor: "#89A8B2",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  registerButtonText: {
    color: "#F1F0E8",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },

  loginLink: {
    fontWeight: "bold",
    color: "#447E9D",
  },
});
