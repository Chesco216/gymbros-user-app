
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { ExercisesCard } from "./components/ExercisesCard"
import { useEffect, useState } from "react"
import { useDay } from "./store/useDay"
import { getRoutine } from "./services/getRoutine"
import { useUser } from "../../store/useUser"

// export const Routines = () => {

//   const [days, setDays] = useState([
//     'lunes', 
//     'martes',
//     'miercoles',
//     'jueves',
//     'viernes',
//   ])
//   const [day, setDay] = useState('lunes')
//   const dayOpt = useDay(state => state.day_opt)
//   const setDayOpt = useDay(state => state.set_day_opt)

//   console.log('me gusta el pene')
//   return (
//     <View style={styles.container}>
//       <View style={styles.days}>
//         {
//           days.map((item) => 
//             <Pressable 
//               key={item}
//               onPress={() => {
//                 setDay(item)
//                 setDayOpt(item)
//               }}
//             >
//               <Text
//                 style={(dayOpt == item) ? styles.dayBtnCB : styles.dayBtn}
//               >{item}</Text>
//             </Pressable>
//           )
//         }
//       </View>
//       <ScrollView style={{flex: 1, width: '100%'}}>
//         <ExercisesCard day={day}/>
//       </ScrollView>
//       <Button
//         title="Generar nueva rutina"
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   days: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'black',
//     marginTop: 20,
//   },
//   dayBtnCB: {
//     backgroundColor: 'black',
//     color: 'white',
//     padding: 10,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5
//   },
//   dayBtn: {
//     backgroundColor: 'white',
//     color: 'black',
//     padding: 10,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5
//   }
// })

import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ExercisesCard } from "./components/ExercisesCard";
import { useState } from "react";
import { useDay } from "./store/useDay";

export const Routines = () => {
  const [days, setDays] = useState([
    'lunes', 
    'martes',
    'miercoles',
    'jueves',
    'viernes',
  ]);
  const [day, setDay] = useState('lunes');
  const dayOpt = useDay(state => state.day_opt);
  const setDayOpt = useDay(state => state.set_day_opt);
  const [routine, setRoutine] = useState([])
  const user = useUser(state => state.user)

  useEffect(() => {
    getRoutine(user.uid).then(r => setRoutine(r))
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.days}>
        {days.map((item) => (
          <Pressable 
            key={item}
            onPress={() => {
              setDay(item);
              setDayOpt(item);
            }}
          >
            <Text style={(dayOpt === item) ? styles.dayBtnCB : styles.dayBtn}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        <ExercisesCard day={day} />
      </ScrollView>
      <Button
        title="Generar nueva rutina"
        color="#FF5722" // Color del botón en naranja
      />
      {
        (routine) &&
          <>
            <View style={styles.days}>
              {
                routine.map((item) => 
                  <Pressable 
                    key={item.day}
                    onPress={() => {
                      setDayOpt(item.day)
                    }}
                  >
                    <Text
                      style={(dayOpt == item.day) ? styles.dayBtnCB : styles.dayBtn}
                    >{item.day}</Text>
                  </Pressable>
                )
              }
            </View>
            <ScrollView style={{flex: 1, width: '100%'}}>
              {
                routine.map((item) => {
                  if(item.day == dayOpt) return <ExercisesCard day={item}/>
                })
              }
            </ScrollView>
            <Button
              title="Generar nueva rutina"
            />
          </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0', // Fondo suave para todo el contenedor
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinear al inicio para mayor espacio
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  days: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dayBtnCB: {
    backgroundColor: '#FF5722', // Fondo naranja cuando está seleccionado
    color: 'white',
    padding: 12,
    margin: 5,
    borderWidth: 1,
    borderColor: '#FF5722', // Mismo color para el borde
    borderRadius: 10,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  dayBtn: {
    backgroundColor: '#FFC107', // Fondo amarillo para los botones no seleccionados
    color: 'black',
    padding: 12,
    margin: 5,
    borderWidth: 1,
    borderColor: '#FFC107', // Mismo color para el borde
    borderRadius: 10,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
    paddingBottom: 20,
  },
});