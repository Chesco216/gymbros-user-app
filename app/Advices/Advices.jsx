import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { getPosts } from "./services/getPosts"
import { PostCard } from "./components/PostCard"

export const Advices = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(data => setPosts(data))
  }, [])

  return (
    <View style={styles.container}>
      {
        (posts.length > 0) 
          && posts.map((item) => 
            <PostCard 
              key={item.img}
              title={item.title}
              desc={item.description}
              img={item.img}
            />
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
