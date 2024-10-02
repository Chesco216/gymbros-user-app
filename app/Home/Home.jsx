import { StyleSheet, Text, View } from "react-native"
import { useUser } from "../../store/useUser"

export const Home = ({navigation}) => {

  const user = useUser(state => state.user)

  return (
    <View style={styles.container}>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Profile')}
      >
        Perfil
      </Text>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Routines')}
      >
        Rutinas
      </Text>
      <Text 
        style={styles.option}
        onPress={() => navigation.navigate('Advices')}
      >
        Comunicados
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    width: '90%',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    fontSize: 25,
    marginBottom: 20
  }
})
