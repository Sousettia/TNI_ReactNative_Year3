import { StyleSheet, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import {stylesPractice} from "./styles/styles";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-nichi Institute of Technology"
  );
  useEffect(() => {
    console.log("Component has mounted");
  },[]);
  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  },[fullname]); //run when fullname changed
  return (
    <View style={styles.container}>
      <AppHeader fullname = {fullname} message={message}/>
      <Content message={message} fullname={fullname}/>
      <TextInput
        style = {stylesPractice.input}
        placeholder="Enter your Fullname"
        value={fullname}
        onChangeText={setFullname}
      />
      <AppFooter footerMessage={footerMessage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
  },
});
