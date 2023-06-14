import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default function SplashScreen({ navigation }: any) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/icon-carwash.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
