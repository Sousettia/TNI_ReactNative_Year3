import { StyleSheet, View, Text } from "react-native";
import React from "react";

type AppHeaderProps = {
  fullname: string;
  message: string;
};

const AppHeader = (
  { fullname, message }: AppHeaderProps /*any*/
): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Input your fullname :</Text>
      <Text style={styles.headerText}>{fullname}</Text>
      <Text style={styles.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop:100,
    marginBottom:50
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});
