import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../components/style'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>This Is Second Page</Text>
      <Button
        title="go to First page"
        onPress={() => navigation.navigate("First Page")}
      />
      <Button
        title="go to third page"
        onPress={() => navigation.navigate("Third Page")}
      />
    </View>
    <Text style={styles.textBottomSytel}>
      thai-nichi institute of technology
    </Text>
  </View>
  )
}

export default SecondPage