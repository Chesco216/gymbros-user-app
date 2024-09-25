import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { Alert } from "react-native"
import { auth } from "../../../FirebaseConfig"

export const login = async(email, pass) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass)
    const user = res.user

    return user
  } catch (error) {
    Alert.alert(error.code)
  }
}

export const signup = async(email, pass) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass)
    const user = res.user

    return user
  } catch (error) {
    Alert.alert(error.code)
  }
}
