import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, FlatList, StatusBar } from 'react-native';
import axios from 'axios';
interface User {
  email: string;
  password: string;
}

export default function SignInScreen() {
  const [email, setEmail] = useState('fernando@gmail.com');
  const [password, setPassword] = useState('123456');
  const [userInfo, setUserInfo] = useState<User[]>([]);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://192.168.1.70:3001/api/customers/login', { email, password });
      setUserInfo(response.data);
      console.log(userInfo);
    } catch (error) {
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  return (
    <>
    <View>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
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
    </View>
    </>
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
