import { Image, StyleSheet, Text, View } from "react-native"

export const PostCard = ({title, desc, img}) => {
  console.log({img})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desc}</Text>
      {
      // <Image
      //   style={styles.image}
      //   source={{uri: {img}}}
      // />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: 100
  },
  title: {
    width: '80%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    width: '80%',
    textAlign: 'left',
    fontSize: 20
  }
})
