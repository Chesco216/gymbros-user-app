import { Alert } from "react-native"

export const createRoutine = async(prompt) => {
  const url = 'https://api.openai.com/v1/chat/completions'
  const OPENAI_API_KEY= process.env.EXPO_PUBLIC_GPT_KEY
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'system',
          content: prompt
        }]
      })
    })

    const data = await res.json()
    const message = data.choices[0].message.content

    const routine = JSON.parse(message)
    console.log({routine})
    return routine
  } catch (error) {
    console.log('error from function')
    Alert.alert(JSON.stringify(error))
  }
}
