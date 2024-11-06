import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { ExercisesCard } from "./components/ExercisesCard"
import { useEffect, useState } from "react"
import { useDay } from "./store/useDay"
import { getRoutine } from "./services/getRoutine"
import { useUser } from "../../store/useUser"

export const Routines = () => {

  const [routine, setRoutine] = useState([])
  const user = useUser(state => state.user)

  useEffect(() => {
    getRoutine(user.uid).then(r => setRoutine(r))
  },[])

  const dayOpt = useDay(state => state.day_opt)
  const setDayOpt = useDay(state => state.set_day_opt)

  console.log('me gusta el pene')
  return (
    <View style={styles.container}>
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
