import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

import styles from './styles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('usertest');
  const [password, setPassword] = useState('123456');
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const onSubmit = () => {
    if (password === inputPassword && username === inputUsername) {
      navigation.navigate('Home');
    } else {
      setSnackbarMessage('Usuario o Contraseña Incorrecta');
      setSnackbarVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.png')} 
        style={styles.image} 
        resizeMode="stretch" 
      />
      
      <TextInput
        label="Usuario"
        value={inputUsername}
        onChangeText={setInputUsername}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#AE1131' } }}
      />
      
      <TextInput
        label="Contraseña"
        value={inputPassword}
        onChangeText={setInputPassword}
        secureTextEntry={!passwordVisible}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#AE1131' } }}
        right={
          <TextInput.Icon
            icon={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      
      <Button
        mode="contained"
        onPress={onSubmit}
        style={styles.button}
        buttonColor="#AE1131"
      >
        Ingresar
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default Login;
