import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, SafeAreaView, Keyboard } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { ShowError } from '../../components/FlashMessages';
import moment from 'moment';

export default function SignInScreen({ navigation }: any) {

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true
  })
  const { isLoading, email, password, isSecure } = state
  const updateState = (data: any) => setState(() => ({ ...state, ...data }));
  const currentYear = moment().year();
  const onLogin = async () => {
    if (email == '' || password == '') {
      ShowError('Por favor ingresa tu correo y contraseña')
      return
    } else {
      navigation.navigate('SignUpScreen');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {keyboardStatus == false ? <Text style={styles.title}>Klincar</Text> : <></>}
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <View>
        <Text style={styles.textInput}>Correo electrónico</Text>
        <TextInput
          value={email}
          onSubmitEditing={Keyboard.dismiss}
          placeholder='Ingresa un correo electrónico'
          style={styles.inputStyle}
          placeholderTextColor="gray"
          onChangeText={(email) => updateState({ email })}
        />
        <Text style={styles.textInput}>Contraseña</Text>
        <TextInput
          value={password}
          onSubmitEditing={Keyboard.dismiss}
          placeholder='Ingresa contraseña'
          style={styles.inputStyle}
          placeholderTextColor="gray"
          secureTextEntry={isSecure}
          onChangeText={(password) => updateState({ password })}
        />
        <Text style={styles.forgotYouPass}>¿Olvidaste tú contraseña?</Text>
        <ButtonWithLoader
          disabled={false}
          text="Iniciar sesión"
          onPress={onLogin}
          isLoading={isLoading}
        />
        <View style={{ marginVertical: 8 }} />
      </View>
      <Text style={styles.textCreateAccount}>
        <Text >¿Aún no tienes cuenta? </Text>
        <Text
          style={styles.createAccount}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Crea una
        </Text>
      </Text>
      <Text style={styles.textTermsandConditions}>© Klincar {currentYear}. Todos los derechos reservados.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 60,
    marginTop: 40,
    marginBottom: 70,
    fontWeight: 'bold',
    color: '#30A2FF'
  },
  forgotYouPass: {
    textAlign: 'right',
    color: '#30A2FF',
    marginBottom: 30
  },
  textInput: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#30A2FF'
  },
  createAccount: {
    color: '#30A2FF',
    textDecorationLine: 'underline'
  },
  textTermsandConditions: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    color: '#A1A1A1',
    textAlign: 'center',
    marginBottom: 5
  },
  textCreateAccount: {
    marginTop: 10,
    color: '#A1A1A1',
    textAlign: 'center',
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