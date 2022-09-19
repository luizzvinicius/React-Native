import { TouchableOpacity } from 'react-native'
import { React } from 'react'
import Style from '../style/general'

export default function Luz({cor, id, ativo, mudar}) {

  return (
    <TouchableOpacity
      style={[Style.luz, {backgroundColor: cor}, id != ativo ? {opacity: 0.5} : {}]}
      onPress={ () => mudar(id)}
    />
  )
}