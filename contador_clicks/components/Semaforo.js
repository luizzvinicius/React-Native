import { View } from 'react-native'
import { React, useState } from 'react'
import Style from '../style/general'
import Luz from './luz'

export default function Semaforo({cor, status}) {
  const [ativo, setAtivo] = useState(0)
  
  return (
    <View style={Style.SemaforoContainer}>
      <Luz cor='#f00' id={0} ativo={ativo} mudar={setAtivo}/>
      <Luz cor='#ff0' id={1} ativo={ativo} mudar={setAtivo}/>
      <Luz cor='#0f0' id={2} ativo={ativo} mudar={setAtivo}/>
    </View>
  )
}