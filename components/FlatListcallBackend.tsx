import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListcallBackend = () => {
  //กำหนด state เก็บข้อมูลผู้ใช้และสถานะการโหลด
  const [data, setData] = useState<User[]>([]);
  const [loading, setloading] = useState(true);

  //กำหนด useEffect สำหรับเรียกข้อมูล API เมื่อ Component Mount(เมื่อcomponent ถูกรันครั้งแรก)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  type RenderItemProps = { item: User };
  //ฟังก์ชัน _renderitem สำหรับใช้ใน FlatList
  const _renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading?(
        <ActivityIndicator size="large" color="blue"/>

      ):( //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
      )
      }
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
