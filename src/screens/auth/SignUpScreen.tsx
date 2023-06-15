import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, StatusBar, SafeAreaView, Keyboard } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { ShowError, ShowSuccess } from '../../components/FlashMessages';
import moment from 'moment';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function SignUpScreen({ navigation }: any) {

  const [aceptTermsAndConditions, setAceptTermsAndConditions] = useState(false);
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
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  const { isLoading, name, email, phone, password } = state;
  const updateState = (data: any) => setState(() => ({ ...state, ...data }));
  const currentYear = moment().year();
  const onLogin = async () => {
    if (name == '') {
      ShowError('Por favor ingresa los datos requeridos')
      return
    } else {
      ShowSuccess('Cuenta creada con exito');
      navigation.navigate('SignInScreen');
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
      <Text style={styles.textInput}>* Nombre completo</Text>
      <TextInput
        value={name}
        onSubmitEditing={Keyboard.dismiss}
        placeholder='Ingresa tu nombre'
        style={styles.inputStyle}
        placeholderTextColor="gray"
        onChangeText={(name) => updateState({ name })}
      />

      <Text style={styles.textInput}>* Correo electrónico</Text>
      <TextInput
        value={email}
        onSubmitEditing={Keyboard.dismiss}
        placeholder='Ingresa tu nombre'
        style={styles.inputStyle}
        placeholderTextColor="gray"
        onChangeText={(email) => updateState({ email })}
      />

      <Text style={styles.textInput}>* Teléfono</Text>
      <TextInput
        value={phone}
        onSubmitEditing={Keyboard.dismiss}
        placeholder='Ingresa tu nombre'
        style={styles.inputStyle}
        placeholderTextColor="gray"
        onChangeText={(phone) => updateState({ phone })}
      />

      <Text style={styles.textInput}>* Contraseña</Text>
      <TextInput
        value={password}
        onSubmitEditing={Keyboard.dismiss}
        placeholder='Ingresa tu nombre'
        style={styles.inputStyle}
        placeholderTextColor="gray"
        onChangeText={(password) => updateState({ password })}
      />
      <BouncyCheckbox
        style={{ marginBottom: 20 }}
        size={20}
        fillColor="#30A2FF"
        unfillColor="#FFFFFF"
        text="Al registrarse, aceptas los términos y condiciones de Klincar"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{
          borderWidth: 2,
          borderRadius: 5,
        }}
        textStyle={{
          textDecorationLine: "none",
          fontSize: 15
        }}
        onPress={(isChecked: boolean) => { setAceptTermsAndConditions(isChecked) }}
      />
      <Text style={styles.textTermsandConditions}>© Klincar {currentYear}. Todos los derechos reservados.</Text>
      <ButtonWithLoader
        text="Crear cuenta"
        disabled={false}
        onPress={onLogin}
        isLoading={isLoading}
      />
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