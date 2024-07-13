import { StyleSheet, View, Text } from 'react-native'
import React from 'react'



type AppHeaderProps = {
  text:string //ถ้ามีเครื่องหมายคำถาม เช่น year? แปลว่า props ไม่จำเป็นต้องส่งค่ามาก็ได้
}

const AppHeader = ({text}:AppHeaderProps/*any*/):React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
      <Text style={styles.subtitleText}>Message from App.tsx</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
  backgroundColor: '#AEC6CF',
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
  headerText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  },
  subtitleText: {
  fontSize: 16,
  color: '#fff',
  },
  });
  