import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

const onClickMe = () => {
  Alert.alert("Hi", "Hello React.js");
};

type ContextProps = {
  message: string;
  //fullname: string;
  onButtonClick: () => void;
};

const Context = ({
  message,
  onButtonClick,
}: ContextProps): React.JSX.Element => {
  const [displayFullname, setdisplayFullname] = React.useState("");
  
    /*const handleButtonClick = () => {
    setdisplayFullname(fullname);
    Alert.alert("Hello",`Fullname has changed to : ${fullname}`)
  }*/
  

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button
        title="Click Me"
        onPress={onButtonClick}
        color="#F74DFF"
        /* onPress={() => Alert.alert("Hi", "React Native is Fun!!")}*/
      ></Button>
    </View>
  );
};

export default Context;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    marginBottom: 20,
  },
});
