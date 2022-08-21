import { Text, View } from 'react-native'
import Style from './style/styles'

export default function App() {
  const apiKey = 'd9441038f6b987a8e88413eea36c17c2'

  const search = async () => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => { return response.json() })

  }

  const extract = (result) => {
    const { result } = data
    const { description, icon } = data.weather[0]
    const { temp, feels_like, temp_min, temp_max, humidity } = data.main
    const { visibility } = data.visibility
    const { speed, deg } = data.wind
    const { country, sunrise, sunset } = data.sys
    const { timezone } = data.timezone
    const { name } = data.name

    return data
  }

  return (
    <View style={Style.container}>
      <View style={[Style.border, Style.container2]}>
        <Text>{data.main}</Text>
      </View>

    </View>
  );
  
}
