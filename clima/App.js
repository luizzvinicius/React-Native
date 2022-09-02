import { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import Style from './style/styles'

export default function App() {
  const apiKey = 'd9441038f6b987a8e88413eea36c17c2'
  const apiKey2 = '79a1dff7fd79964091d981f2cb98084f'

  const city = 'Maceió'
  const idiom = 'pt_br'

  const [json1, setJson1] = useState({})
  const [json2, setJson2] = useState({})

  const consulta1 = async (city, apiKey, idiom) => {
    try {
      const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${idiom}`)

      const result_consulta1 = await response1.json()
      const dados_json1 = desconstruct1(result_consulta1)
      setJson1(dados_json1)

      consulta2(dados_json1.lat, dados_json1.lon, apiKey2)

    } catch (error) {
      console.log('Verifique a cidade')
    }
  }

  const desconstruct1 = (result_consulta1) => {
    const { coord, sys, name } = result_consulta1
    const { lon, lat } = coord
    const { country } = sys

    return {
      lat: lat,
      lon: lon,
      name: name,
      sigla: country,
    }
  }

  const consulta2 = async (lat, lon, apiKey2) => {
    try {
      const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey2}&cnt=5&units=metric`)

      const result_consulta2 = await response2.json()
      setJson2(desconstruct2(result_consulta2))

    } catch (error) {
      console.log('Erro: ' + error)
    }
  }

  const desconstruct2 = (result_consulta2) => {
    const { list } = result_consulta2
    const { main, weather, wind, dt_txt } = list[0]
    const { temp, feels_like, temp_min, temp_max } = main
    const { description } = weather
    const { speed } = wind

    return {
      temp: temp,
      sensation: feels_like,
      tmin: temp_min,
      tmax: temp_max,
      description: description,
      speed: speed,
      data: dt_txt,
    }
  }

  const getIcon = (codIcon) => {
    return `http://openweathermap.org/img/wn/${codIcon}@2x.png`
  }

  useEffect(() => { consulta1(city, apiKey, idiom) }, [])

  return (
    <SafeAreaView style={[Style.container, Style.border]}>

      <Text>Latidude = {json1.lat} Longitude = {json1.lon} {json1.name}, {json1.sigla}</Text>

      <View style={[Style.border, Style.container2]}>

        {/* <Image
          source={{ uri: getIcon(json1.icon) }}
          style={{ width: 60, height: 75 }}
        /> */}

        <Text>{json2.data}</Text>
        <Text> {} </Text>

      </View>

      <Text>Carroça</Text>
    </SafeAreaView>
  )
}