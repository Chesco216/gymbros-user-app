import { doc, setDoc } from "firebase/firestore"
import { db } from "../../../FirebaseConfig"
import { useUser } from "../../../store/useUser"
import { Alert } from "react-native"

export const setUserFB = async() => {

  const user = useUser(state => state.user)

  try {
    await setDoc(doc(db, 'user', user.uid), user)
  } catch (error) {
    Alert.alert(error.code)
  }
}
