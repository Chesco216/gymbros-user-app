import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { getPosts } from "./services/getPosts"
import { PostCard } from "./components/PostCard"
import { colors } from "../../constants/colors"

export const Advices = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then(data => setPosts(data))
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightbrown,
    flex: 1
  }
})
