import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './app/Auth/Login';
import { StatusBar } from 'react-native';
import { Home } from './app/Home/Home';
import { Signup } from './app/Auth/Signup';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto'/>
    </>
  );
}

