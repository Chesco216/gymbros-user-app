export const getPrompt = ( userinfo, gyminfo ) => {

  const userData = userinfo
  const gymData = gyminfo

  const routineDayModel = {
    cals: 100,
    day: 'Lunes',
    duration: '60min',
    exercises: [
      {
        description: 'Sentadillas en maquina smith(esta es la descripcion del ejercicio o explicacion deser necesario)',
        series: 4,
        reps: 10,
        set: 'Sentadilla(aca va el nombre)',
      },
    ],

  }

  const routineModel = {
    day_1: routineDayModel,
    day_2: routineDayModel,
    day_3: routineDayModel,
    day_4: routineDayModel,
    day_5: routineDayModel,
  }

  return `
      Necesito que me generes una rutina en base a la siguiente informacion:
      la persona para la que generaras la rutina nos dio su informacion personal que es esta:
      ${userData}
      y el gimnasio al que va cuenta con el siguiente equipamiento:
      ${gymData}
      ahora necesito que me generes una rutina con la siguiente estructura:
      ${routineModel}
      son las rutinas de 5 dias, lunes, martes, miercoles, jueves y viernes
      de los atributos:
      cals son las calorias quemadas en la rutina 
      exercises es un array con el nombre(set) numero de repeticiones(reps) numero de series(series) y la descripcion(description), yo solo te di un ejemplo pero tu pon los ejercicios que veas necesarios para la rutina, toma en cuenta el nombre de los atributos y todo tiene que ser de la misma manera, no olvides las llaves cals de calorias, duration de la duracion de la rutina, day el nombre del dia correspondoente y el atributo group el grupo muscular que estara trabajando en toda la rutina de ese dia como atributos asi como el ejemplo, ademas los el nombrede os dias para las llaves debe ser el day_1, day_2, day_3, day_4, day_5 respectivamente, para el array de ejercicios cada objeto del array contiene los siguientes atributos: description que les la descripcion del ejercicio, series que es el numero de series que debera hacer, reps el numero de repeticiones por serie y set que es el nombre del ejercicio
      tomando en cuenta esto generame las rutinas en formato JSON porfis
    `
}
