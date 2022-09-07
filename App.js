import { View, Text,Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Home!</Text>
      <Button 
       title='Go to Setting' 
        onPress={()=>navigation.navigate("Setting")}/>

    </View>
  )
}

function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Settings!</Text>
      <Button 
       title='Go to Home' 
        onPress={()=>navigation.goBack()}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Setting' component={SettingScreen}/>
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
      
    </NavigationContainer>
  )
}

export default App