import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { ExercisesCard } from "./components/ExercisesCard"
import { useState } from "react"
import { useDay } from "./store/useDay"

export const Routines = () => {

  const [days, setDays] = useState([
    'lunes', 
    'martes',
    'miercoles',
    'jueves',
    'viernes',
  ])
  const [day, setDay] = useState('lunes')
  const dayOpt = useDay(state => state.day_opt)
  const setDayOpt = useDay(state => state.set_day_opt)

  console.log('me gusta el pene')
  return (
    <View style={styles.container}>
      <View style={styles.days}>
        {
          days.map((item) => 
            <Pressable 
              key={item}
              onPress={() => {
                setDay(item)
                setDayOpt(item)
              }}
            >
              <Text
                style={(dayOpt == item) ? styles.dayBtnCB : styles.dayBtn}
              >{item}</Text>
            </Pressable>
          )
        }
      </View>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <ExercisesCard day={day}/>
      </ScrollView>
      <Button
        title="Generar nueva rutina"
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
    width: '100%',
  },
  days: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    marginTop: 20,
  },
  dayBtnCB: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  dayBtn: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  }
})
