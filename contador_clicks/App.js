import { Text, View } from 'react-native'
import Style from './style/general'
import Cont from './components/contadores'

export default function App() {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Contador de Clikes</Text>
      
      <Cont/>

    </View>
  );
}