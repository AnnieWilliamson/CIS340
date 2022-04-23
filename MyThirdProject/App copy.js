import React from 'react';
import {text, Image, View } from 'react-native';



function Student(props){
  return(
    <View>
    <Text>Hey, my name is {props.name}, I am a student in 340</Text>
    </View>
  );
  }
   

export default function MultiComp() {
 return(
   <View style={{
  flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
  <Text> Welcome</Text>
  <Student name= "Annie W"/>
  <Student name= "Alice ###"/>
  <Student name= "Bob ###"/>
  <Student name= "JonClarkW"/>
  </View>
 );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
