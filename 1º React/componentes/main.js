import React from "react";
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

export default function Main(props) {
  return (
    <View style={main_css.center}>
      <Text style={main_css.texto}>Isso aqui é um Main, no local: {props.local}</Text>
      <View style={main_css.div_button}>
        <Button
          title='Press!'
          onPress={texto_botao}
          color='#FFA500'
        />
      </View>
    </View>
  );
}

const texto_botao = () => {
  Alert.alert('Mensagem', 'Essa é a Ranizinha')
}

const main_css = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  div_button: {
    width: '40%',
  },
})