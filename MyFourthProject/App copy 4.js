
import { Text, View, FLatList } from 'react-native';
import { TextInput } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function StatesApp() {
 return (
   <View style = {{flex:1, paddingTop:22}}>
    sections = {[
      {title: 'A', data: ['Alabama', 'Alaska', 'A]}rizona', 'Arkansas']},
      {title: 'C', data: ['California']},
    {title: 'D', data: ['delaware']}
 ]}
      renderItem={({item}) => <Text style = {{padding: 10, fontSize:20, height: 44}}/>{item.key}</Text>}
      paddingRight:10, 
      paddingBottom: 40, 
      fontSize: 14, 
      fontWeight: 'bold', 
      backgroundColor='blue'
]}
/>
 </View>
  );

}

