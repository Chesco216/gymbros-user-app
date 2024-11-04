import { BackHandler, Button, ScrollView, StyleSheet, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from "../../store/useUser"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"

export const Profile = ({navigation}) => {

  const user = useUser(state => state.user)
  // const set_user = useUser(state => state.set_user)

  // const [uid, setUid] = useState()
  //
  // AsyncStorage.getItem('user')
  //   .then(id => setUid(id.replaceAll('"', '')))
  
  // useEffect(() => {
  //   if(uid) {
  //     getDoc(doc(db, 'user', uid))
  //       .then(doc => set_user(doc.data()))
  //   }
  // }, [uid])

  const logout = () => {
    AsyncStorage.clear()
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Nombre</Text>
          <Text style={styles.info}>{user.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Correo</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Edad</Text>
          <Text style={styles.info}>{user.age}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Telefono</Text>
          <Text style={styles.info}>{user.phone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.info}>{user.weight}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Altura</Text>
          <Text style={styles.info}>{user.height}</Text>
        </View>
      </View>
      <Button
        title="Actualizar Datos"
        onPress={() => handlePress()}
      />
      <Button
        title="Cerrar sesion"
        onPress={() => logout()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 30
  },
  infoContainer: {
    flexDirection: 'row',
    width: '85%',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
    width: '30%'
  },
  info: {
    width: '70%',
    fontSize: 20,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    paddingLeft: 20
  }
})
