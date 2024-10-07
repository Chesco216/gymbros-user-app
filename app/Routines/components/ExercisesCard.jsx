import { StyleSheet, Text, View } from "react-native"

export const ExercisesCard = ({day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Lunes</Text>
      <Text>Calorias quemadas</Text>
      <Text>Duracion</Text>
      <Text>Ejercicios:</Text>
      <View style={styles.exercises}>
        <Text>Set</Text>
        <Text>descripcion</Text>
        <Text>Series</Text>
        <Text>Repeticiones</Text>
      </View>
      <View style={styles.exercises}>
        <Text>Set</Text>
        <Text>descripcion</Text>
        <Text>Series</Text>
        <Text>Repeticiones</Text>
      </View>
      <View style={styles.exercises}>
        <Text>Set</Text>
        <Text>descripcion</Text>
        <Text>Series</Text>
        <Text>Repeticiones</Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 20,
    marginBottom: 30
  },
  exercises: {
    width: '80%',
    padding: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 30
  },
  day: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
