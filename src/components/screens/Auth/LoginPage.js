import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { React, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../api/auth";
import UserContext from "../../../context/UserContext";
const LoginPage = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    username: username,
    password: password,
  };

  const { mutate } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      console.log("done");
      setAuthenticated(true);
    },
  });

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Username and/or Password cannot be empty");
      return;
    }
    Alert.alert("Login Successful");
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log In</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>
            Don’t have an account?{" "}
            <Text style={styles.registerLink}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#B3C8CF",
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#89A8B2",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#F1F0E8",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },

  registerLink: {
    fontWeight: "bold",
    color: "#447E9D",
  },
});
