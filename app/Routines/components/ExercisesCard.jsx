// import { StyleSheet, Text, View } from "react-native"

// export const ExercisesCard = ({day}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.day}>Lunes</Text>
//       <Text>Calorias quemadas</Text>
//       <Text>Duracion</Text>
//       <Text>Ejercicios:</Text>
//       <View style={styles.exercises}>
//         <Text>Set</Text>
//         <Text>descripcion</Text>
//         <Text>Series</Text>
//         <Text>Repeticiones</Text>
//       </View>
//       <View style={styles.exercises}>
//         <Text>Set</Text>
//         <Text>descripcion</Text>
//         <Text>Series</Text>
//         <Text>Repeticiones</Text>
//       </View>
//       <View style={styles.exercises}>
//         <Text>Set</Text>
//         <Text>descripcion</Text>
//         <Text>Series</Text>
//         <Text>Repeticiones</Text>
//       </View>
//     </View> 
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100vw',
//     paddingTop: 20,
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // borderWidth: 2,
//     // borderColor: 'black',
//     // borderRadius: 20,
//     marginBottom: 30
//   },
//   exercises: {
//     width: '80%',
//     padding: 20,
//     marginTop: 20,
//     borderWidth: 2,
//     borderColor: 'black',
//     borderRadius: 20,
//     marginBottom: 30
//   },
//   day: {
//     marginBottom: 30,
//     fontSize: 20,
//     fontWeight: 'bold'
//   }
// })



import { StyleSheet, Text, View } from "react-native";

export const ExercisesCard = ({ day }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.label}>Calorías quemadas: 500</Text>
      <Text style={styles.label}>Duración: 30 min</Text>
      <Text style={styles.label}>Ejercicios:</Text>
      {["Ejercicio 1", "Ejercicio 2", "Ejercicio 3"].map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>{exercise}</Text>
          <Text style={styles.exerciseDescription}>Descripción: Descripción del ejercicio</Text>
          <Text style={styles.exerciseDetail}>Series: 3</Text>
          <Text style={styles.exerciseDetail}>Repeticiones: 10</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#FFC107', // Fondo amarillo
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Para Android
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#FF5722', // Borde naranja
  },
  exerciseContainer: {
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#FF5722', // Borde naranja
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Fondo blanco para los ejercicios
    elevation: 2, // Sombra en el contenedor de ejercicios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  day: {
    marginBottom: 15,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000', // Texto negro
    textAlign: 'center',
    textTransform: 'uppercase', // Texto en mayúsculas
  },
  label: {
    fontSize: 18,
    color: '#000000', // Texto negro
    marginVertical: 5,
    fontWeight: '600',
  },
  exerciseTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FF5722', // Color naranja para los títulos de los ejercicios
    textDecorationLine: 'underline', // Subrayado
  },
  exerciseDescription: {
    fontSize: 16,
    color: '#333333', // Un gris oscuro para la descripción
    marginVertical: 5,
  },
  exerciseDetail: {
    fontSize: 14,
    color: '#666666', // Un gris más claro para detalles
  },
});