import { View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps = {
  title:string;
  year?:number; //ถ้ามีเครื่องหมายคำถาม เช่น year? แปลว่า props ไม่จำเป็นต้องส่งค่ามาก็ได้
}

const AppHeader = ({title,year}:AppHeaderProps/*any*/):React.JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{year && year + 543}</Text>
    </View>
  )
}

export default AppHeader