import { Text, View, Button } from 'react-native'
import { React, useState } from 'react'
import Style from '../style/general'

export default function Contador() {
  const [contador, setContador] = useState(0)
  
  const addDelay = () => {
    setTimeout( () => {
      setContador((prev) => prev + 1)
    }, 2000);
  }


  return (
    <View style={[Style.buttonWidth, {flex: 0.5}]}>
      <View style={[Style.display, Style.diplayMargin, Style.borderRadius]}>
        <Text style={Style.cont}>{contador.toString()}</Text>
      </View>

      <View style={[Style.buttonMargin]}>
        <Button
          title='Mais'
          onPress={() => setContador(contador + 1)}
          color='green'
        />
      </View>

      <Button
        title='Menos'
        onPress={
          () => { if (contador > 0) setContador(contador - 1) }
        }
        color='red'
      />

        <Button
          title='Mais'
          onPress={() => addDelay()}
          color='blue'
        />
    </View>
  )
}