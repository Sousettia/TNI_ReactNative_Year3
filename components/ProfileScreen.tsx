import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {

  const Image_1 = require("../assets/Profile_1.jpg");
  const Image_2 = require("../assets/Profile_2.jpg");
  const [name, setName] = useState("Jirapat Anantasirijinda");
  const [profileImage, setImg] = useState(Image_1);
  const handleChangeName = () => {
    setName(name == "Ping"?"Jirapat Anantasirijinda":"Ping")
  };
  const handleChangeImage = () => {
    setImg(profileImage === Image_1?Image_2:Image_1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName}></Button>
          <Text></Text>
          <Button title="Change Image" onPress={handleChangeImage}></Button>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
