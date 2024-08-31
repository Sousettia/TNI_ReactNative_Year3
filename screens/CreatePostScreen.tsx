import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({ navigation, route }: any): React.JSX.Element => {
  const [postText, setPostText] = useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="Tell Something...?"
        style={{height:200,padding:10,backgroundColor:'white'}}
        value={postText}
        onChangeText={setPostText}
        />
      <Button title="DONE" onPress={()=>{
        navigation.navigate({
            name:'Home',
            params:{post:postText}
        })
      }}></Button>
    </>
  );
};

export default CreatePostScreen;
