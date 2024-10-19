export const createRoutine = async(prompt) => {
  const url = 'https://api.openai.com/v1/chat/completions'
  const OPENAi_API_KEY= 'apikey-here'
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "aplication/json",
        "Authorization": `Bearer ${OPENAi_API_KEY}`
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
    
  }
}
