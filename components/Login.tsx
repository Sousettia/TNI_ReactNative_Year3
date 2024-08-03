import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";

const Login = () => {
  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder="Enter Name" />
      <TextInput style={stylesLogin.input} placeholder="Enter Email" />
      <Button title="SUBMIT"></Button>
    </View>
  );
};

export default Login;
