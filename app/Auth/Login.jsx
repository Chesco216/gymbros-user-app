
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from './sevices/auth';
import { colors } from '../../constants/colors';
import { useUser } from '../../store/useUser';

export const Login = ({ navigation }) => {

	const [email, setEmail] = useState()
	const [pass, setPass] = useState()

	const setUser = useUser(state => state.set_User)

	const handleLogin = async () => {
		const user = await login(email, pass)
		await AsyncStorage.setItem('user', JSON.stringify(user.uid))
		navigation.navigate('Home')
	}

	const [uid, setUid] = useState()
	AsyncStorage.getItem('user')
		.then(id => setUid(id.replaceAll('"', '')))

	if (uid) navigation.navigate('Home')

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenido de vuelta!</Text>
			<Text style={styles.inTitle}>Ingresa tu correo</Text>
			<TextInput
				style={styles.inp}
				placeholder='ejemplo@gmail.com'
				value={email}
				onChangeText={text => setEmail(text)}
			/>
			<Text style={styles.inTitle}>Ingresa tu contraseña</Text>
			<TextInput
				style={styles.inp}
				placeholder='contraseña'
				value={pass}
				onChangeText={text => setPass(text)}
				textContentType='password'
			/>

			<Text style={styles.redirect}>
				No tienes una cuenta? {`${' '}`}
				<Text
					style={styles.redirectStrong}
					onPress={() => navigation.navigate('Signup')}
				>
					crear cuenta
				</Text>
			</Text>

			<Pressable
				style={styles.btn}
				onPress={() => handleLogin()}
			>
				<Text style={styles.textBtn}>Login</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.orange,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 40,
		marginBottom: 60
	},
	inTitle: {
		fontSize: 20,
		margin: 15,
		width: '80%',
		alignItems: 'left'
	},
	inp: {
		backgroundColor: colors.light,
		fontSize: 18,
		padding: 15,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 10,
		width: '80%'
	},
	redirect: {
		marginTop: 15,
		marginBottom: 15,
	},
	redirectStrong: {
		fontWeight: 'bold'
	},
	btn: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: colors.darkbrown,
		borderRadius: 10,
	},
	textBtn: {
		fontSize: 20,
		color: colors.light
	}
});
