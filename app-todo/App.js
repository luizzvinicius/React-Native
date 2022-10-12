import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'

export default function App() {

  return (
    <SafeAreaView style={styles.container_safe}>
      <View style={styles.icon_container}>
        <Text style={styles.title}>To Do!</Text>
        <Image style={{ width: 45, height: 45 }}
          source={require('../app-todo/assets/tick-inside-circle.png')}
        />
      </View>

      <View style={styles.tarefa_container}>
        <TextInput style={styles.text_input} placeholder='Digite o título da sua tarefa...' />


      </View>

      <Text>
        Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container_safe: {
    backgroundColor: '#2592DA',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },

  icon_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  title: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 60,
  },

  tarefa_container: {
    height: 160,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    borderColor: '#FF6500',
    borderWidth: 2,
    borderRadius: 5,
  },

  text_input: {
    color: '#ffff',
    paddingLeft: 5,

  },
  
})