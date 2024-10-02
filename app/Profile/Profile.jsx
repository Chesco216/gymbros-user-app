import { BackHandler, Button, StyleSheet, Text, View } from "react-native"
import { useUser } from "../../store/useUser"

export const Profile = () => {

  const user = useUser(state => state.user)

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Nombre</Text>
          <Text style={styles.info}>nombre pipipi</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Edad</Text>
          <Text style={styles.info}>edad pipipi</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.info}>peso pipipi</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Altura</Text>
          <Text style={styles.info}>altura pipipi</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>CI</Text>
          <Text style={styles.info}>ci pipipi</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Telefono</Text>
          <Text style={styles.info}>telefono pipipi</Text>
        </View>
      </View>
      <Button
        title="Actualizar Datos"
        onPress={() => handlePress()}
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
