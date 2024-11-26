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

export const Routines = () => {

  const [routine, setRoutine] = useState([])
  const [rID, setRID] = useState()
  const user = useUser(state => state.user)

  useEffect(() => {
    getRoutine(user.uid).then(r => {
      setRID(r.uid)
      setRoutine(r.days)
    })
  },[])

  const dayOpt = useDay(state => state.day_opt)
  const setDayOpt = useDay(state => state.set_day_opt)

  const handleCreateRoutine = async() => {
    console.log('preseed')
    const prompt = getPrompt(user, 'aun no hay informacion del gym')
    try {
      const res = await createRoutine(prompt)
      await setDoc(doc(db, 'routines', rID), {
        ...res,
        uid: rID,
        user_id: user.uid,
        isAproved: false
      })
    } catch (error) {
      Alert.alert(error)
    }
  }

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
            <Pressable
              style={styles.routineBtn}
              onPress={() => handleCreateRoutine()}
            >
              <Text style={styles.routineBtnText}>Generar nueva rutina</Text>
            </Pressable>
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
    marginBottom: 40,
    padding: 15,
    backgroundColor: colors.lightbrown,
    borderRadius: 10
  },
  routineBtnText: {
    fontSize: 20,
    color: colors.light,
    fontWeight: 'bold'
}
})
