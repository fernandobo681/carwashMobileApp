import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navigation from './src/navigation/Navigation';
import FlashMessage from "react-native-flash-message";
import SplashScreen from './src/screens/auth/SplashScreen';

export default function App() {

  const [splashTime, setSplashTime] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setSplashTime(false);
    }, 1000);
  }, []);


  if (splashTime) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
        <FlashMessage
          position="top"
        />
      </View>
    )
  }

}