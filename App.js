
import { View , Button,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';



import React from 'react';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem

} from '@react-navigation/drawer'

function Feed (){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
     <Text>
      Feed Sceen
     </Text>
       
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
      <DrawerItem label="help" onPress={()=>alert('Link to help')}/>
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
        backgroundColor:'skyblue',
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
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

export default App