import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías verificar las credenciales del usuario
    if (email === 'usuario@ejemplo.com' && password === 'contraseña') {
      // Las credenciales son correctas, permite que el usuario inicie sesión
      Alert.alert('Inicio de sesión exitoso');
    } else {
      // Las credenciales son incorrectas, muestra un mensaje de error
      Alert.alert('Correo electrónico o contraseña incorrectos');
    }
  };  

  return (
    <>
      <View>
        <Text>Correo electrónico:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Ingresa tu correo electrónico"
        />
        <Text>Contraseña:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={handleLogin}>
          <Text>Iniciar sesión</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}