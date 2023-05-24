import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';

export default function SignInScreen() {
  const [email, setEmail] = useState('fernando@gmail.com');
  const [password, setPassword] = useState('123456');
  const [data, setData] = useState();
  

  const handleSignIn = () => {
    axios
      .post('http://192.168.1.187:3001/api/customers/login', { email, password })
      .then(response => {
        // Handle successful sign-in
        console.log(response.data);
        
      })
      .catch(error => {
        // Handle sign-in error
        console.log(error);
        Alert.alert('Sign In Failed', 'Invalid email or password');
      });
  };

  return (
    <View>
      <Text style={styles.mainText}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.mainText}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />


      <Text style={styles.mainText}>{data}</Text>

    </View>
  );
};


const styles = StyleSheet.create({
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'justify'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black'  
  }
});

