import { SafeAreaView, StyleSheet, View } from 'react-native'
import Semaforo from './componentes/semaforo'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Semaforo/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})