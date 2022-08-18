import { Text, View, Button } from 'react-native';
import { React, useState } from 'react';
import Style from '../style/general'

export default function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <View style={Style.buttonWidth}>
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
    </View>
  )
}