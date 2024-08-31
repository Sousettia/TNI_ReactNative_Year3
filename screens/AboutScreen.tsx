import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({ route }: any): React.JSX.Element => {
  const { companyName, companyId } = route.params;

  return (
    <ImageBackground
      source={require("../assets/Images/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/Images/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />
        <Text>
          {companyName} {companyId}
        </Text>
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/GWOmPfMakAAMtiW?format=jpg&name=large",
          }}
          resizeMode="contain"
          style={styles.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  myImageNetwork: {
    width: 400,
    height: 400,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
