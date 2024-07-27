import { StyleSheet, Text, View, Image ,Button} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {

  const [name,setName] = useState('Jirapat Anantasirijinda');
  const [profileImage,setImg] = useState(require("../assets/Profile_1.jpg"));
  const handleChangeName = () => {
    setName('Panachai Lormongkhonkit') 
  }
  const handleChangeImage = () => {
    setImg(require("../assets/Profile_2.jpg"))
  }
  
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