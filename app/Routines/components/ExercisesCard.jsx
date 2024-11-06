import { StyleSheet, Text, View } from "react-native"

export const ExercisesCard = ({day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day.day}</Text>
      <Text>Calorias quemadas: {day.cals}</Text>
      <Text>Duracion: {day.duration}</Text>
      <Text>Ejercicios:</Text>
      {
        // day.exercises.map((item) => {
        //   
        // })
        // deberia de mapearlo pero como que alguien la cago
      }
      <View style={styles.exercises}>
        <Text>Set {day.exercises.set}</Text>
        <Text>descripcion {day.exercises.description}</Text>
        <Text>Series {day.exercises.series}</Text>
        <Text>Repeticiones {day.exercises.reps}</Text>
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
