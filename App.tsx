import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CreatePostScreen from "./screens/CreatePostScreen";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home"
        screenOptions={{//Global
          headerStyle:{backgroundColor:'#f1f'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
        }}
        >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "หน้าหลัก",
          }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          /*           options={{
          title:'เกี่ยวกับเรา',
          headerStyle:{backgroundColor:'#f1f'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center'
         }} */
        />
        <HomeStack.Screen name="Post" component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
