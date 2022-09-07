
import { View , Button,Text,StyleSheet,SafeAreaView,Image} from 'react-native';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';



import React from 'react';
import HomeScreen from './screens/HomeScreen';

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
        <Drawer.Screen name="Noncification" component={Noncification}/>
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