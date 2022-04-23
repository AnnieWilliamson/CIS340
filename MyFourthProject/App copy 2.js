
import { Text, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-web';

export default function MyScrollViewApp() {

  const dog = {
    url: '',
    width: 64, 
    height: 64,
  }
 
  return (
  <ScrollView>

<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source = {require('./assets/dog2.png')} style = {{width:64, height:64}} />
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fonSsize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style= {{fontSize: 80}} > Try to Scroll Down </Text>
  </ScrollView>
  );

}

