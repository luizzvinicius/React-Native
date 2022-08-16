import React from "react"
import { StyleSheet, Text } from 'react-native'

export default function Footer(props) {
  return (
    <Text style={footerStyle.texto}>Isso aqui é um Footer, no local: {props.local}</Text>
  );
}

const footerStyle = StyleSheet.create( {
  texto: {
    color: '#fff',
    fontSize: 20,
    borderColor: '#FFA500',
    textAlign: 'center'
  }
})