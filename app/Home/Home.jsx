import { StyleSheet, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from "../../store/useUser"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

export const Home = ({navigation}) => {

  const set_user = useUser(state => state.set_user)

  const [uid, setUid] = useState()
  AsyncStorage.getItem('user')
    .then(id => setUid(id.replaceAll('"', '')))
  
  useEffect(() => {
    if(uid) {
      getDoc(doc(db, 'user', uid))
        .then(doc => set_user(doc.data()))
    }
  }, [uid])

  return (
    <View style={styles.container}>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Profile')}
      >
        Perfil
      </Text>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Routines')}
      >
        Rutinas
      </Text>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Advices')}
      >
        Comunicados
      </Text>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Pagos')}
      >
        Inscripcion
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    width: '90%',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    fontSize: 25,
    marginBottom: 20
  }
})
