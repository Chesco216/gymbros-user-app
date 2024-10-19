export const getPrompt = ( userinfo, gyminfo ) => {

  const userData = ``
  const gymData = ``

  return `
      Necesito que me generes una rutina en base a la siguiente informacion:
      la persona para la que generaras la rutina nos dio su informacion personal que es esta:
      ${userData}
      y el gimnasio al que va cuenta con el siguiente equipamiento:
      ${gymData}
      ahora necesito que me generes una rutina con la siguiente estructura:
      
    `
}
