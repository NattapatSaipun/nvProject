import { View, Text, Button } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
    
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="register" iconName="person-add" onPress={() => alert('regis')} />
         
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name='home' size={30} color='#00ced1' />
      <Text>
        Home Screen
      </Text>
      <Button
        title='Open Drawer'
        onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default HomeScreen