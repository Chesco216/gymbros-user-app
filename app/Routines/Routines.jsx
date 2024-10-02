import { Button, StyleSheet, View } from "react-native"
import { ExercisesCard } from "./components/ExercisesCard"

export const Routines = () => {
  return (
    <View style={styles.container}>
      <ExercisesCard/>
      <Button>Generar nueva rutina</Button>
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
    overflow: 'scroll'
  },
  subcont: {

  }
})
