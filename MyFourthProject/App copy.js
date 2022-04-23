import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default class MyApp extends Component {
  render(){
  return (
    <View style={{padding: 60}}>
      <Text>I am here!</Text>
      <Text>I am using the class component!</Text>
    </View>
  );
}
}

