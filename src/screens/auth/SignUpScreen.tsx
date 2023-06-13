import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>SignUpScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#30A2FF'
  },
  textInput: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  inputStyle: {
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20
  }
});