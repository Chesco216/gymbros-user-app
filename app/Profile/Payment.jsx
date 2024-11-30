import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../constants/colors'

export const Payment = () => {

  //TODO: add gym info to suscribe

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Informacion de la tarjeta
      </Text>
      <Text style={styles.titles}>Numero de la tarjeta</Text>
      <TextInput
        style={styles.inp}
        placeholder='1234 1234 1234 1234'
      />
      <View style={styles.subCont}>
        <View style={styles.inpCont}>
          <Text style={styles.titles}>Fecha de vencimiento</Text>
          <TextInput
            style={styles.inp}
            placeholder='12/12/12'
          />
        </View>
        <View style={styles.inpCont}>
          <Text style={styles.titles}>CSV</Text>
          <TextInput
            style={styles.inp}
            placeholder='123'
          />
        </View>
      </View>
      <Pressable>
        <Text style={styles.btn}>Aceptar</Text>
      </Pressable>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  subCont: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    gap: 20
  },
  inpCont: {
    width: '50%',
    boxSizing: 'border-box'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  titles: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginVertical: 20
  },
  inp: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    boxSizing: 'border-box',
    width: '100%'
  },
  btn: {
    width: 'fit-content',
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: colors.lightbrown,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 10,
    marginTop: 30
  }
})

