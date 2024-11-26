import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { colors } from "../../../constants/colors"
import { useUser } from "../../../store/useUser"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../../FirebaseConfig"

export const UpdateForm = ({setUpdate, update}) => {

  const user = useUser(state => state.user)
  const set_user = useUser(state => state.set_user)

  const handleUpdate = () => {
    try {
      const res = setDoc(doc(db, 'user', user.uid), user)

      console.log(res.user)
      setUpdate(!update)
    } catch (error) {
      Alert.alert(error.code)
    }
  }

  return (
    <>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.subContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Nombre</Text>
            <TextInput
              style={styles.inp}
              placeholder={user.name}
              value={user.name}
              onChangeText= {text => set_user({...user, name: text})}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Edad</Text>
            <TextInput
              style={styles.inp}
              placeholder={user.age}
              value={user.age}
              onChangeText= {text => set_user({...user, age: text})}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Telefono</Text>
            <TextInput
              style={styles.inp}
              placeholder={user.phone}
              value={user.phone}
              onChangeText= {text => set_user({...user, phone: text})}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Peso</Text>
            <TextInput
              style={styles.inp}
              placeholder={user.weight}
              value={user.weight}
              onChangeText= {text => set_user({...user, weight: text})}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Altura</Text>
            <TextInput
              style={styles.inp}
              placeholder={user.height}
              value={user.height}
              onChangeText= {text => set_user({...user, height: text})}
            />
          </View>
        </ScrollView>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => handleUpdate()}
          >
            <Text style={styles.btnText}>Actualizar</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => setUpdate(!update)}
          >
            <Text style={styles.btnText}>Cancelar</Text>
          </Pressable>
        </View>
      </>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    width: '100%',
    height: 'fit-content',
    flexDirection: 'column',
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: '80%',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 20,
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'semibold',
    width: '100%'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  btn: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  btnText: {
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: colors.darkbrown,
    color: colors.light,
    borderRadius: 10
  },
  inp: {
    backgroundColor: colors.light,
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: '100%'
  },
})
