import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#30A2FF"
        barStyle="dark-content"
      />
      <View>
        <Image
          source={require('../../assets/images/icon-carwash.png')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30A2FF',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
