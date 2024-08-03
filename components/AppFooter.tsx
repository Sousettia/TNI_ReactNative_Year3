//rnfes
import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AppFooterProps = {
  footerMessage: string; //ถ้ามีเครื่องหมายคำถาม เช่น year? แปลว่า props ไม่จำเป็นต้องส่งค่ามาก็ได้
};

const AppFooter = ({ footerMessage }: AppFooterProps): React.JSX.Element => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{footerMessage}</Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
