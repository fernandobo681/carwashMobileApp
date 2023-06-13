import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, StatusBar, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { ShowError } from '../../components/FlashMessages';


export default function SignInScreen({ navigation }: any) {

  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true
  })

  const { isLoading, email, password, isSecure } = state
  const updateState = (data: any) => setState(() => ({ ...state, ...data }))


  const onLogin = async () => {
    if (email == '' || password == '') {
      ShowError('Por favor ingresa tu correo y contraseña')
      return
    } else {
      navigation.navigate('SignUpScreen');
    }
  }

  const createAlert = (msj: string) =>
    Alert.alert('', msj, [
      { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
    ]);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Klincar</Text>
      <StatusBar
        animated={true}
        backgroundColor="#30A2FF"
        barStyle="dark-content"
      />
      <View>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          value={email}
          placeholder='Ingresa un email'
          style={styles.inputStyle}
          placeholderTextColor="gray"
          onChangeText={(email) => updateState({ email })}
        />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          value={password}
          placeholder='Ingresa un email'
          style={styles.inputStyle}
          placeholderTextColor="gray"
          secureTextEntry={isSecure}
          onChangeText={(password) => updateState({ password })}
        />
        <ButtonWithLoader
          text="Login"
          onPress={onLogin}
          isLoading={isLoading}
        />
        <View style={{ marginVertical: 8 }} />
        <ButtonWithLoader
          text="Signup"
          onPress={() => navigation.navigate('SignUpScreen')}
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#30A2FF'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 50,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  textInput: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#000000'
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