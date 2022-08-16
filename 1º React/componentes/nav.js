import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Nav(props) {
  return (
    <Text style={nav_css.texto}>Isso aqui é um NAV, no local: {props.local}</Text>
  );
}

const nav_css = StyleSheet.create({
  texto: {
    color: '#fff',
    fontSize: 20,
    borderColor: '#FFA500',
    textAlign: 'center'
  }
})