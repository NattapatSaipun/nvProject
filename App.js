
import { View , Button,Text,StyleSheet,SafeAreaView,Image} from 'react-native';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import React from 'react';
import HomeScreen from './screens/HomeScreen';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem

} from '@react-navigation/drawer'
import ProductScreen from './screens/ProductScreen';
import PageDetailScreen from './screens/PageDetailScreen';
import DetailScreen from './screens/DetailScreen';


const Mytheme = {
  ...DefaultTheme,
  colors:{...DefaultTheme.colors,
  primary: 'rgb(255,45,85)'}
}

function Feed ({navigation}){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
     <Text>
      Feed Sceen
     </Text>
       <Button 
       title='Open drawer' 
        onPress={()=>navigation.openDrawer()}/>
         <Button 
       title='Toggle drawer' 
        onPress={()=>navigation.toggleDrawer()}/>
    </View>
  );
}
function Noncification (){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
     <Text>
     Noncification Sceen
     </Text>
       
    </View>
  );
}
function CustomDrawerContent(props){
   return(
   <SafeAreaView style={{flex:1}}> 
    <Image  source={require('C:/nvProject/assets/react_logo.png')}
    style={styles.sideMenuProfileIcon}/>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      {/* <DrawerItem label="ToggleDrawer" onPress={()=>props.navigation.toggleDrawer()}/> */}
      <DrawerItem label="CloseDrawer" onPress={()=>props.navigation.closeDrawer()}/>
      
    </DrawerContentScrollView>
    </SafeAreaView>
   )
}

const Stack = createNativeStackNavigator();
function ProductStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#0096DA'
      },
      headerTintColor:'#ffff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    >
      <Stack.Screen name='Product' component={ProductScreen}/>
      <Stack.Screen name='Detail' component={DetailScreen}/>
    </Stack.Navigator>

      
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=> <CustomDrawerContent {...props}/>}
    screenOptions={{
      drawerStyle:{

        width:240
      }
    }}
    >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Product" component={ProductStack}/>
      </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer theme={Mytheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({sideMenuProfileIcon: {resizeMode: 'center',width: 100,height: 100,borderRadius: 100 / 2,alignSelf: 'center',},})

export default App