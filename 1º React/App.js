import { StyleSheet, View, Image, FlatList } from 'react-native'
import Nav from './componentes/nav'
import Main from './componentes/main'
import Footer from './componentes/footer'
import FlatLs from './componentes/flatlist'
import Style from './Styles/style'

export default function App() {
  return (
    <View style={[styles.container, Style.border, Style.background, Style.flex]}>
      <View><Nav local='Começo da página' /></View>

      <View style={styles.borda}>
        <Image
          source={require('./assets/Rani.png')}
          style={Style.image}
        />
      </View>

      <FlatLs style={Style.texto}/>

      <View><Main local='meio da página' /></View>
      <View><Footer local='final da página' /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  borda: {
    borderBottomWidth: 3, // Resolver
    borderColor: '#f00'
  },
})