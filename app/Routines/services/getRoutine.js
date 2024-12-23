import { doc, getDoc } from "firebase/firestore"
import { Alert } from "react-native"
import { db } from "../../../FirebaseConfig"

export const getRoutine = async(user_id) => {
  try {
    const res = await getDoc(doc(db, 'routines', user_id))
    const data = res.data()

    console.log({data})
    const routine = {
      days: [
        data.day_1,
        data.day_2,
        data.day_3,
        data.day_4,
        data.day_5
      ],
      uid: res.id
    }

    return routine
  } catch (error) {
    Alert.alert(error.code)
  }
}
