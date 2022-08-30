import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import Style from './style/styles'

export default function App() {
  const apiKey = 'd9441038f6b987a8e88413eea36c17c2'
  const [json, setJson] = useState({})
  let city = 'Maceió'

  const consulta = async () => {
    const resultado_consulta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)
      .then(response => response.json())

    setJson(desconstruct(resultado_consulta))
  }

  // const getIcon = (codIcon) => {
  //     return `http://openweathermap.org/img/wn/${codIcon}@2x.png`
  // }

  const getIcon = (codIcon) => {
    return `http://openweathermap.org/img/wn/${codIcon}@2x.png`
  }

  const desconstruct = (resultado_consulta) => {
    const { coord, weather, main, wind, sys, name } = resultado_consulta
    const { lon, lat } = coord
    const { description, icon } = weather[0]
    const { temp, feels_like, temp_min, temp_max } = main
    const { speed } = wind
    const { country } = sys

    return {
      lat: lat,
      lon: lon,
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

  useEffect(() => {
    consulta()
  }) // sem a lista

  return (
    <SafeAreaView style={[Style.container, Style.border]}>
      <Text>Latidude = {json.lat} Longitude = {json.lon} {json.name}, {json.sigla}</Text>

      <View style={[Style.border, Style.container2]}>

        <Image
          source={{ uri: getIcon(json.icon) }}
          style={{ width: 60, height: 75 }}
        />

        <Text>{json.desc}, temperatura: {json.temp}ºC</Text>
      </View>

      <Text>Carroça</Text>
    </SafeAreaView>
  )
}