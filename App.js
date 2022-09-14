import { View, Text,Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator,} from '@react-navigation/drawer'

const Mytheme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors,
  primary: 'rgb(255,45,85)'}
}

function HomeScreen({navigation}){
  return(
    
      
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Ionicons name='home' size={30} color='#00ced1'/>
      <Text>
        Home Screen
      </Text>
      </View>
    
  )
}

function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text style={{fontSize:30}}>Settings Screen</Text>
      <Button 
       title='Go to Home' 
        onPress={()=>navigation.goBack()}/>
    </View>
  )
}



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'
          }else if(route.name ==='Setting')
          {
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
          }

          return<Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray'

      })}
    
    >
      <Tab.Screen name='Home' component={ HomeScreen}/>
      <Tab.Screen name='Setting' component={SettingScreen}/>
    </Tab.Navigator>
  )
}
function MyDrawer(){
  return(
    <Drawer.Navigator useLegacyImplementation

    >
      
        <Drawer.Screen name="Home" component={MyTabs}/>
        <Drawer.Screen name="Setting" component={SettingScreen}/>
        
      </Drawer.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer theme={Mytheme}>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App