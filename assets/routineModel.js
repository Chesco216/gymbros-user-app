// PERF: Is thata really necesary????
export const routineModel = `
[
  {
    day: dia de la semana, ej: Lunes
    cals: numero de calorias que se quemaran,
    duration: tiempo que durara la rutina aproximado,
    group: grupo muscular que trabajara (pecho, pierna, espalda, brazos),
    exercises: [
      {
        description: descripcion del ejercicio,
        reps: numero de repeticiones por serie,
        series: numero de series que hara del ejercicio,
        set: nombre del ejercicio,
      },
      ... mas ejercicios que hara
    ],
  },
  ... mas rutinas para los dias necesarios
]
`
