
import { Text, View, FLatList } from 'react-native';
import { TextInput } from 'react-native-web';

export default function StatesApp() {
 return (
   <View style = {{flex:1, paddingTop:22}}>
   <FLatList
      data = {[
        {key: 'Alabama'},
        {key: 'Alaska'}
      ]}
      renderItem={({item}) => <Text style = {{padding: 10, fontSize:20, height: 44}}/>{item.key}</Text>}

   />

 </View>
  );

}

