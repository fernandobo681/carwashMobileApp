import { View, Text } from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <FlashMessage
        position="top"
      />
    </View>
  )
}