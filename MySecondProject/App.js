import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View } from 'react-native';
import React from "react";

export default function App() {


 
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello. {"\n"}
      
      </Text>
   <TextInput 
   style ={{
     height: 40, 
     borderColor: "gray",
     borderWidth: 1
   }}

   defaultValue = "Enter Input: "></TextInput>
   </View>
  );
}


