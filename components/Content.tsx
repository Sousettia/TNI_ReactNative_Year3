import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

const onClickMe = () => {
  Alert.alert("Hi", "Hello React.js");
};

type ContextProps = {
  text: string;
};

const Context = ({text}:ContextProps):React.JSX.Element => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{text}</Text>
      <Button
        title="Click Me"
        onPress={onClickMe}
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
