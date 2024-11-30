import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { colors } from '../../../constants/colors'

export const WaitingForRoutine = ({reloadRoutine, setReloadRoutine}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Tu rutina esta esperando a ser aprobada
      </Text>
      <Pressable style={styles.reloadBtn} onPress={() => setReloadRoutine(!reloadRoutine)}>
        <Text style={styles.reloadBtnText}>
          Recargar rutina
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100wh',
    display: 'flex',
    flexDirection: 'column',
    alignItms: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  reloadBtn: {
    marginTop: 30,
    backgroundColor: colors.lightbrown,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  reloadBtnText: {
    width: '100%',
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})
