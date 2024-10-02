import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useUser } from "../../../store/useUser"
import { setUserFB } from "../sevices/setUserFB"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../../FirebaseConfig"

export const UserForm = ({nav}) => {

  const [age, setAge] = useState()
  const [ci, setCI] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [phone, setPhone] = useState()

  const user = useUser(state => state.user)
  const setUser = useUser(state => state.set_User)

  const handlePress = async() => {
    setUser({
      ...user,
      age: age,
      ci: ci,
      height: height,
      weight: weight,
      phone: phone,
      id_rol: 1,
    })

    await setDoc(doc(db, 'user', user.uid), {
      ...user,
      age: age,
      ci: ci,
      height: height,
      weight: weight,
      phone: phone,
      id_rol: 1,
    })
    // setUserFB().then(
    //   nav.navigate('Home')
    // )
    nav.navigate('Home')
  }

  return (
    <View>
      <Text style={styles.title}>Necesitamos saber mas de ti</Text>
      <Text style={styles.subtitle}>Edad</Text>
      <TextInput 
        value={age}
        style={styles.field} 
        placeholder='edad'
        onChangeText={text => setAge(text)}
      />
      <Text style={styles.subtitle}>Peso (kg)</Text>
      <TextInput 
        value={weight}
        style={styles.field} 
        placeholder='peso'
        onChangeText={text => setWeight(text)}
      />
      <Text style={styles.subtitle}>Altura (m)</Text>
      <TextInput 
        value={height}
        style={styles.field} 
        placeholder='altura'
        onChangeText={text => setHeight(text)}
      />
      <Text style={styles.subtitle}>CI</Text>
      <TextInput 
        value={ci}
        style={styles.field} 
        placeholder='ci'
        onChangeText={text => setCI(text)}
      />
      <Text style={styles.subtitle}>Numero de telefono</Text>
      <TextInput 
        value={phone}
        style={styles.field} 
        placeholder='telefono'
        onChangeText={text => setPhone(text)}
      />
      <Button
        title='Enviar'
        onPress={() => handlePress()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: 10
  },
  field: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20
  }
})
