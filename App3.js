
import { View , Button,Text} from 'react-native';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';



import React from 'react';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem

} from '@react-navigation/drawer'


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
function Artical (){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
     <Text>
     Artical Sceen
     </Text>
       
    </View>
  );
}
function CustomDrawerContent(props){
   return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label="ToggleDrawer" onPress={()=>props.navigation.toggleDrawer()}/>
      <DrawerItem label="CloseDrawer" onPress={()=>props.navigation.closeDrawer()}/>
      
    </DrawerContentScrollView>
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
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Artical" component={Artical}/>
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

export default App