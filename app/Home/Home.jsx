import { Text, View } from "react-native"
import { useUser } from "../../store/useUser"

export const Home = () => {

  const user = useUser(state => state.user)

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{JSON.stringify(user.isActive)}</Text>
    </View>
  )
}
