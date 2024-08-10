import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface News{
    title:string
    publishedAt:string
    url:string
    description:string
}

const NewsApp = () => {
  //กำหนด state เก็บข้อมูลผู้ใช้และสถานะการโหลด
  const [data, setData] = useState<News[]>([]);
  const [loading, setloading] = useState(true);
  //const [error,setError] = useState(false);

  useEffect(() => {
    const API_KEY = '653e6c13f9fe4d7fa18459b44ac215e4'; // ใส่ API Key ของนักศึกษาที่นี่
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.articles);
        setloading(false);
      })
      .catch((error) => {
        console.error(error.errorText);
        setloading(false);
      });
  }, []);
  type RenderItemProps = { item: News };
  const _renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "pink",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
