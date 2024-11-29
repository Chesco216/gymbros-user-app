import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../../constants/colors"
import Svg, { Path } from 'react-native-svg'

export const ExercisesCard = ({day}) => {
  console.log(day.exercises)
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day.day}</Text>
      <View style={styles.info}>
        <Svg width={50} height={50} viewBox="0 0 24 24">
          <Path d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C10.1113 21.8742 8 21.064 8 18.4442C8 16.3949 9.49507 15.0085 10.631 14.3346C10.9365 14.1533 11.2941 14.3887 11.2941 14.7439V15.3331C11.2941 15.784 11.4685 16.4889 11.8836 16.9714C12.3534 17.5174 13.0429 16.9454 13.0985 16.2273C13.1161 16.0008 13.3439 15.8564 13.5401 15.9711C14.1814 16.3459 15 17.1465 15 18.4442C15 20.4922 13.871 21.4343 12.8324 21.8013Z" fill={colors.lightbrown}/>
        </Svg>
        <Text style={styles.infoText}>{day.cals} kcal </Text>
      </View>
      <View style={styles.info}>
        <Svg width={50} height={50} viewBox="0 0 24 24" fill='none'>
          <Path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke={colors.lightbrown} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        <Text style={styles.infoText}>{day.duration} min</Text>
      </View>
      {
        day.exercises.map((item) =>
          <View style={styles.exercises}>
            <Text style={styles.set}>{item.set}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.series}>{item.series} series</Text>
            <Text style={styles.reps}>{item.reps} repeticiones</Text>
          </View>
        )
      }
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 20,
    marginBottom: 30
  },
  exercises: {
    width: '90%',
    padding: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 30
  },
  day: {
    width: '100%',
    backgroundColor: colors.lightbrown,
    paddingVertical: 25,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  infoText: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 25,
  },
  set: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    marginBottom: 20
  },
  series: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: colors.lightbrown,
    width: 'fit-content',
    marginBottom: 10
  },
  reps: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: colors.lightbrown,
    width: 'fit-content'
  }
})
