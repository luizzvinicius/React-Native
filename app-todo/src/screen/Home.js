import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Switch, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Task from '../components/Task'
import { Dark, Light } from '../../themes/theme'
import Logo from '../../assets/LogoLight.png'
import LogoDark from '../../assets/Logo.png'

export default function Home({ navigation, route }) {
  const props = route.params
  const [listaTarefas, setlistTarefa] = useState([])
  const [isSelected, setSelection] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const Theme = isSelected ? Dark.colors : Light.colors

  const requestTarefa = () => {
    setisLoading(true)

    fetch('http://localhost:3000/tarefas')
      .then(request => request.json())
      .then(tarefa => setlistTarefa(tarefa))
      .catch(exception => console.log(exception))
      .finally(() => setisLoading(false))
  }

  const criarTarefa = () => {
    setisLoading(true)

    const novaTarefa = {
      id: props.id,
      tarefa: props.tarefa,
      func: props.func,
      dark: props.dark
    }

    fetch('http://localhost:3000/tarefas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaTarefa)
    })
      .then(() => requestTarefa())
      .catch(exception => console.log(exception))
  }

  const apagaTarefa = (id) => {
    setisLoading(true)

    fetch(`http://localhost:3000/tarefas/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    })
      .then(() => requestTarefa())
      .catch(exception => console.log(exception))
  }

  const taskDark = (value) => {
    const listaDark = [...listaTarefas]
    listaDark.map(tarefa => tarefa.dark = value)
    setlistTarefa(listaDark)
  }

  const editTarefa = (id, newValue) => {
    const novaTarefa = {
      id: props.id,
      tarefa: newValue,
      func: props.func,
      dark: props.dark
    }

    setisLoading(true)

    fetch(`http://localhost:3000/tarefas/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaTarefa)
    })
      .then(() => requestTarefa())
      .catch(exception => console.log(exception))
  }

  useEffect(() => {
    if (props == undefined) return requestTarefa()
    props.func === 'Criar' ? criarTarefa() : editTarefa(props.id, props.tarefa)
  }, [props])

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: Theme.bgPrimary }]}>
      <View style={styles.logo_container}>
        <Image style={styles.logo}
          source={isSelected ? LogoDark : Logo}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.button_container}>
          <Text style={styles.txt_branco}>Tarefas</Text>
          <View style={styles.button_container2}>
            <Text style={styles.button_text}>Dark Mode</Text>
            <Switch
              trackColor={{ false: '#7e4ebb', true: '#7e4ebb' }}
              thumbColor={isSelected ? '#abff4f' : '#FFF'}
              activeThumbColor={isSelected ? '#abff4f' : '#FFF'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => {
                setSelection(!isSelected)
                taskDark(!isSelected)
              }}
              value={isSelected}
            />
          </View>
        </View>

        <View style={styles.container_task}>
          {
            isLoading ?
            <View style={styles.absolute}>
              <ActivityIndicator size={'large'} color={Theme.textPrimary} />
            </View>
            : []
          }
          
          {
            listaTarefas.length >= 0 ? listaTarefas.map(tarefa =>
              <Task key={tarefa.id} id={tarefa.id} tarefa={tarefa.tarefa} apaga={apagaTarefa} dark={tarefa.dark} navigation={navigation}
                dados={
                  {
                    theme: Theme,
                    lista: listaTarefas,
                    logo: isSelected ? LogoDark : Logo,
                    dark: isSelected,
                    func: 'Editar'
                  }
                } />)
              : []
          }
        </View>

        <TouchableOpacity style={[styles.form_button, { backgroundColor: Theme.bgPrimary }]}
          onPress={() => navigation.navigate('FormScreen', { theme: Theme, lista: listaTarefas, logo: isSelected ? LogoDark : Logo, dark: isSelected, func: 'Criar' })}>

          <Text style={[styles.txt_roxo, { color: Theme.textSecondary }]}>Criar Tarefa</Text>
          <AntDesign name='plus' size={20} color={Theme.textSecondary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  logo_container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },

  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button_container2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
  },

  button_text: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },

  container: {
    backgroundColor: '#AF70FF',
    gap: 5,
    padding: 20,
    borderRadius: 7,
  },

  txt_branco: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  txt_roxo: {
    color: '#AF70FF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  logo: {
    width: 110,
    height: 41,
  },

  form_button: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#AF70FF',
    paddingLeft: 20,
    paddingRight: 20,
  },

  container_task: {
    position: 'relative',
    maxHeight: 300,
    paddingVertical: 15,
    marginTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    gap: 10,
    overflow: 'scroll',
    minHeight: 60
  },

  absolute: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9999,
    backgroundColor: '#00000057',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})  