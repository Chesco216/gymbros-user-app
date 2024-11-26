import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../constants/colors"

export const PostCard = ({title, desc, img}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={{uri: `${img}`}}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.light,
  },
  title: {
    marginTop: 20,
    width: '80%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    width: '80%',
    textAlign: 'left',
    fontSize: 20
  },
  postImage: {
    width: '100%',
    height: 300
  }
})
