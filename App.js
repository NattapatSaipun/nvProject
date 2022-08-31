import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import React from 'react';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';



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
        <Stack.Screen name='First Page' component={FirstPage}/>
        <Stack.Screen name='Second Page' component={SecondPage}/>
        <Stack.Screen name='Third Page' component={ThirdPage}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
