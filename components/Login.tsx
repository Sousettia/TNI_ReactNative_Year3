import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email:string) : boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  const handleLogin = () => {
    let errorMessage = "";
    if (!name) {
      errorMessage += "Please Enter Name\n"; /*Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]); return;*/
    }
    if (!email) {
      errorMessage += "Please Enter Email\n";
    }
    else if (!validateEmail(email)){
      errorMessage += "Invalid Email Format\n"
    }
    if (!password) {
      errorMessage += "Please Enter Password";
    } 
    else if (password.length < 6){
      errorMessage += "Password must be at least 6 characters long";
    }
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert","Success",[{text:"OK"}])
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="SUBMIT" onPress={handleLogin}></Button>
    </View>
  );
};

export default Login;
