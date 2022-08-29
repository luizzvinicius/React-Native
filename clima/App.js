import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, TextInput, Image } from 'react-native'
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

  const getIcon = (codIcon) => {
    return `http://openweathermap.org/img/wn/${codIcon}@2x.png` 
  }

  useEffect(() => { // importante
    consulta()
  }, [])

  console.log(getIcon(data.icon))
  return (
    <SafeAreaView style={[Style.container, Style.border]}>
      <Text>
        {data.name}, {data.sigla}, {data.icon}
      </Text>

      <View style={[Style.border, Style.container2]}>
        
        <Image
          source={{uri: getIcon(data.icon)}}
        />


        <Text>{data.desc} DATA AQUI</Text>

        <Text>{data.temp}</Text>

        <View style={[Style.textInput, Style.border]}>
          <Text>Digite a cidade: </Text>
          <TextInput
            style={Style.border}
          />
        </View>

      </View>

      <Text>Carroça</Text>
    </SafeAreaView>
  );
}