import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './app/Auth/Login';
import { StatusBar } from 'react-native';
import { Home } from './app/Home/Home';
import { Signup } from './app/Auth/Signup';
import { Profile } from './app/Profile/Profile';
import { Routines } from './app/Routines/Routines';
import { Advices } from './app/Advices/Advices';
import { Payment } from './app/Profile/Payment';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Pagos' component={Payment}/>
          <Stack.Screen name='Routines' component={Routines}/>
          <Stack.Screen name='Advices' component={Advices}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto'/>
    </>
  );
}

