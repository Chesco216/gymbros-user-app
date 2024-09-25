

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login, signup } from './sevices/auth';
import { useUser } from '../../store/useUser';

export const Signup = ({navigation}) => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const setUser = useUser(state => state.set_User)

  const handleLogin = async() => {
    const user = await signup(email, pass)
    setUser({
      user: name,
      email: user.email,
      isActive: false
    })

    console.log({user})
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.inTitle}>Ingresa tu Nombre</Text>
      <TextInput
        style={styles.inp}
        placeholder='nombre'
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.inTitle}>Ingresa tu correo</Text>
      <TextInput
        style={styles.inp}
        placeholder='ejemplo@gmail.com'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.inTitle}>Ingresa tu contraseña</Text>
      <TextInput
        style={styles.inp}
        placeholder='contraseña'
        value={pass}
        onChangeText={text => setPass(text)}
      />

      <Text style={styles.redirect}>
        Ya tienes una cuenta? {`${' '}`}
        <Text 
          style={styles.redirectStrong}
          onPress={() => navigation.navigate('Login')}
        >
          iniciar sesion
        </Text>
      </Text>

      <Button 
        title='Login'
        onPress={() => handleLogin()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 60
  },
  inTitle: {
    fontSize: 20,
    margin: 15,
    width: '80%',
    alignItems: 'left'
  },
  inp: {
    fontSize: 18,
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: '80%'
  },
  redirect: {
    marginTop: 15,
    marginBottom:15,
  },
  redirectStrong: {
    fontWeight: 'bold'
  }
});
