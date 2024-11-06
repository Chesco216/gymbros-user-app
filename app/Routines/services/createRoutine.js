import { Alert } from "react-native"

export const createRoutine = async(prompt) => {
  const url = 'https://api.openai.com/v1/chat/completions'
  const OPENAI_API_KEY= process.env.EXPO_PUBLIC_GPT_KEY
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "aplication/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    })
  } catch (error) {
    Alert.alert(error.code)
  }
}
