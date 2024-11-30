import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { ExercisesCard } from "./components/ExercisesCard"
import { useEffect, useState } from "react"
import { useDay } from "./store/useDay"
import { getRoutine } from "./services/getRoutine"
import { useUser } from "../../store/useUser"
import { getPrompt } from "./services/getPrompt"
import { createRoutine } from "./services/createRoutine"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"
import { colors } from "../../constants/colors"
import { WaitingForRoutine } from "./components/WaitingForRoutine"

export const Routines = () => {

  const [routine, setRoutine] = useState([])
  const user = useUser(state => state.user)
  const [routineAproved, setRoutineAproved] = useState(false)
  const [reloadRoutine, setReloadRoutine] = useState(false)

  useEffect(() => {
    getRoutine(user.uid).then(r => {
      setRoutine(r.days)
      setRoutineAproved(r.isAproved)
    })
    console.log('useEffec log')
  },[reloadRoutine])

  const dayOpt = useDay(state => state.day_opt)
  const setDayOpt = useDay(state => state.set_day_opt)

  const handleCreateRoutine = async() => {
    console.log('preseed')
    const prompt = getPrompt(user, 'aun no hay informacion del gym')
    try {
      const res = await createRoutine(prompt)
      await setDoc(doc(db, 'routines', user.uid), {
        ...res,
        user_id: user.uid,
        isAproved: false
      })
      setRoutineAproved(false)
      setReloadRoutine(!reloadRoutine)
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <View style={styles.container}>
      {
        (routine && routineAproved) ?
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
            <ScrollView style={styles.scrollViewContainer}>
              {
                routine.map((item) => {
                  if(item.day == dayOpt) return <ExercisesCard day={item}/>
                })
              }
              <Pressable
                style={styles.routineBtn}
                onPress={() => handleCreateRoutine()}
              >
                <Text style={styles.routineBtnText}>Generar nueva rutina</Text>
              </Pressable>
            </ScrollView>
          </>
          :
            (routine.length == 0) ?
            <>
              <Text style={styles.text}>Parece que no tienes rutinas aun</Text>
              <Pressable
                style={styles.routineBtn}
                onPress={() => handleCreateRoutine()}
              >
                <Text style={styles.routineBtnText}>Generar nueva rutina</Text>
              </Pressable>
            </>
              :
                <WaitingForRoutine reloadRoutine={reloadRoutine} setReloadRoutine={setReloadRoutine}/>
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
  scrollViewContainer: {
    width: '100%',
    flex: 1,
  },
  days: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.lightbrown,
    marginTop: 20,
  },
  dayBtnCB: {
    backgroundColor: colors.lightbrown,
    color: 'white',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.lightbrown,
    borderRadius: 5
  },
  dayBtn: {
    backgroundColor: 'white',
    color: colors.lightbrown,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: colors.lightbrown,
    borderRadius: 5
  },
  routineBtn: {
    marginHorizontal: 20,
    boxSizing: 'border-box',
    marginBottom: 40,
    padding: 15,
    backgroundColor: colors.lightbrown,
    borderRadius: 10,
  },
  routineBtnText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: colors.light,
    fontWeight: 'bold'
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20
  }
})
