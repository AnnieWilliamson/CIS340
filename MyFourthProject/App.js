import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function WordConverter() {
 const[text, setText] = useState('');
  return (
    <View style={{padding: 60}}>
      <TextInput 
      style = {{height: 40}}
      placeholder = "Input your text here!"
      onChangeText = {text => setText(text)}
      defaultValue = {text}
      />

      <Text style = {{padding:10, fontSize:42}}></Text>
        {text.split(' ').map((word) => word &&'*').join(' ')}
    </View>
  );

}

