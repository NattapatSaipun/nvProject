import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import React from 'react';


function HomeScreen({navigation,route}){

  React.useEffect(()=>{
    if(route.params?.post){
      //Post 
    }
  },[route.params?.post]);
 return(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button 
    title='Create Post'
    onPress={()=>navigation.navigate ('CreatePost')}/>
    <Text style={{margin: 10}}>
      Post:{route.params?.post}
    </Text>
  </View>
 );
}

function CreatePostScreen({navigation,route}){
  const [postText,setPostText] = React.useState('');
  return(
    // Use fragment
    <> 
      <TextInput 
        multiline
        placeholder='Please Text here'
        style = {{height:200, padding:10, backgroundColor:'white'}}
        onChangeText={setPostText}
        value = {postText}
        />
        <Button 
          title='Click'
          onPress={()=> {
            // pass params back to HomeScreen funtion
            navigation.navigate('Home',{post: postText})
          }}/>

      
    </>
  );
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#00ced1'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontweith:'bold'}
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
