import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/Profile_1.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.profileName}>Jirapat Anantasirijinda</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;