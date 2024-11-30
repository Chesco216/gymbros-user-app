import { Alert } from "react-native"
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../../FirebaseConfig"

export const getPosts = async() => {
  try {
    const docs = await getDocs(collection(db, 'posts'))
    const posts = []
    docs.forEach(doc => {
      const data = doc.data()
      const post = {
        id_gym: data.id_gym,
        title: data.title,
        description: data.description,
        img: data.img,
        is_Active: data.is_Active
      }
      if(data.is_Active) posts.push(post)
    })
    return posts
  } catch (error) {
    Alert.alert(error)
  }
}
