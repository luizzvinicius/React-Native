import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import Style from './style/styles'

export default function App() {
  const city = 'Maceió'
  const apiKey = 'd9441038f6b987a8e88413eea36c17c2'
  const [infoBasica, setJson] = useState({})

  const lat = -9.6658
  const lon = -35.7353
  const apiKey2 = '79a1dff7fd79964091d981f2cb98084f'
  const [json2, setJson2] = useState({})

  const consulta = (city, apiKey) => {
    const resultado_consulta = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)
      .then(response => response.json())
      
      
      consulta2({lat: resultado_consulta.lat, lon: resultado_consulta.lon}, apiKey2)
    
  }

  // const desconstruct = (resultado_consulta) => {
  //   const { coord, weather, main, sys, name } = resultado_consulta
  //   const { lon, lat } = coord
  //   const { icon } = weather[0]
  //   const { temp } = main
  //   const { country } = sys

  //   return {
  //     lat: lat,
  //     lon: lon,
  //     name: name,
  //     icon: icon,
  //     temp: temp,
  //     sigla: country,
  //   }
  // }

  const consulta2 = (lat, lon, apiKey2) => {
    const resultado_consulta2 = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric&lang=pt_br`)
      .then(response => response.json())
    
    setJson2(desconstruct2(resultado_consulta2))
  }

  const desconstruct2 = (resultado_consulta2) => {
    const { list } = resultado_consulta2
    const { dt_txt } = list[0]

    return {
      data: dt_txt,
    }
  }
  
  // useEffect(() => { consulta2() })

  // const getIcon = (codIcon) => {
  //   return `http://openweathermap.org/img/wn/${codIcon}@2x.png`
  // }

  useEffect(() => { consulta(city, apiKey) })

  return (
    <SafeAreaView style={[Style.container, Style.border]}>
      <Text>Latidude = {} Longitude = {infoBasica.lon} {infoBasica.name}, {infoBasica.sigla}</Text>

      <View style={[Style.border, Style.container2]}>

        {/* <Image
          source={{ uri: getIcon(infoBasica.icon) }}
          style={{ width: 60, height: 75 }}
        /> */}

        <Text>{json2.data}</Text>
        
      </View>

      <Text>Carroça</Text>
    </SafeAreaView>
  )
}