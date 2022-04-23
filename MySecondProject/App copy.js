import {Text, TextInput, View } from 'react-native';
import React from "react";

export default function App() {
  return (
    <View>
      <Text>
        
        Hello. 
      
      </Text>

   </View>
  );
}

export default function MultiComp(){
  return( 
    <View style = {{
      flex:1, 
      justifyContent: 'center',
      alignIssues: 'center'
    }}>
    <Text>Welcome to class </Text>
    <MyApp />
    <MyApp />
    <MyApp />
    <MyApp />
    <MyApp />
    </View>
  )

}


