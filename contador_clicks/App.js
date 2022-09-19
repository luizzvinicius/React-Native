import { SafeAreaView, Text, View } from 'react-native'
import Style from './style/general'
import Semaforo from './components/Semaforo'
import Cont from './components/contadores'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    
    <View style={Style.container}>
      <Text style={Style.title}>Contador de Clikes</Text>
      
      <Cont/>

      <Semaforo/>
    </View>

    </SafeAreaView>
  )
}