import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from "../../store/useUser"
import { useState } from "react"
import { colors } from "../../constants/colors";
import { UpdateForm } from "./components/UpdateForm";

export const Profile = ({navigation}) => {

  const user = useUser(state => state.user)

  const [update, setUpdate] = useState(false)

  const logout = () => {
    AsyncStorage.clear()
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      {
        (!update) &&
          <>
            <View style={styles.scrollViewContainer}>
              <ScrollView style={styles.subContainer}>
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
              </ScrollView>
              </View>
              <View style={styles.btnContainer}>
                <Pressable
                  style={styles.btn}
                  onPress={() => setUpdate(!update)}
                >
                  <Text style={styles.btnText}>Actualizar Datos</Text>
                </Pressable>
                <Pressable
                  style={styles.btn}
                  onPress={() => logout()}
                >
                  <Text style={styles.btnText}>Cerrar Sesion</Text>
                </Pressable>
              </View>
          </>
      }
      {
        (update) &&
          <UpdateForm setUpdate={setUpdate} update={update}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    width: '85%',
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'semibold',
    width: '100%'
  },
  info: {
    color: colors.lightbrown,
    paddingTop: 10,
    width: '80%',
    fontSize: 20,
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
  }
})
