import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { signup } from './sevices/auth';
import { useUser } from '../../store/useUser';
import { UserForm } from './components/UserForm';
import { colors } from '../../constants/colors';

export const Signup = ({ navigation }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [submited, setSubmited] = useState(false)

  const set_user = useUser(state => state.set_user)

  const nav = navigation
  const handleLogin = async() => {
    const user = await signup(email, pass)
    console.log(user.uid)
    set_user({
      uid: user.uid,
      name: name,
      email: user.email,
      isActive: false
    })
    await AsyncStorage.setItem('user', user.uid)
    setSubmited(true)
  }

  const [uid, setUid] = useState()
  AsyncStorage.getItem('user')
    .then(id => setUid(id.replaceAll('"', '')))

  if(uid) navigation.navigate('Home')

  return (
    <View style={styles.container}>
      {
        submited ? 
          <UserForm nav={nav}/>
          : (
            <>
              <Text style={styles.title}>Bienvenido a Gymbros!</Text>
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
                textContentType='password'
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

              <Pressable
                style={styles.btn}
                onPress={() => handleLogin()}
              >
                <Text style={styles.textBtn}>
                  Registrar
                </Text>
              </Pressable>
              
            </>
          )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
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
    backgroundColor: colors.light,
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
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.darkbrown,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    color: colors.light
  }
});
