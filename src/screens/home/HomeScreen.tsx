import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.mainText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea nobis, ratione optio et repellat perspiciatis quibusdam nostrum odio tempore ipsum excepturi doloribus. Unde nobis, non culpa aperiam temporibus recusandae.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'justify'
  }
});
