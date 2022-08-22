import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, TextInput } from 'react-native'
import Style from './style/styles'

export default function App() {
  const apiKey = 'd9441038f6b987a8e88413eea36c17c2'
  const [data, setData] = useState({})
  let city = 'Maceió'

  const consulta = async () => {
    const result_consulta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => { return response.json() })

    setData(extract(result_consulta))
  }

  const extract = (result_consulta) => {
    const { weather, main, wind, sys, name } = result_consulta
    const { description, icon } = weather[0]
    const { temp, feels_like, temp_min, temp_max } = main
    const { speed } = wind
    const { country } = sys

    return {
      name: name,
      desc: description,
      icon: icon,
      temp: temp,
      tmax: temp_max,
      tmin: temp_min,
      tsensation: feels_like,
      wind_speed: speed,
      sigla: country,
    }
  }

  useEffect(() => { // importante
    consulta()
  }, [])

  return (
    <SafeAreaView style={Style.container}>
      <View style={[Style.border, Style.container2]}>
        <Text> oi | {data.desc} </Text>
        
        <View style={Style.textInput}>
          <Text>Digite a cidade: </Text>
          <TextInput
            style={{borderWidth: 1, borderColor: 'orange', width: '40%', height: 40,}}
          />
        </View>
      
      </View>
    </SafeAreaView>
  );
}