import {View, FlatList, Text } from 'react-native'
import Style from '../Styles/style'

const catInfomation = [
  {
    id: 1,
    'nome': 'Rani',
    idade: '~ 8 anos',
  },
  {
    id: 2,
    'nome': 'Nuvem',
    idade: '~ 4 anos',
  }
]

export default function flatList() {
  return (
    <View>
      <FlatList
        data={catInfomation}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={Style.texto}>Nome: {item.nome}, idade: {item.idade}</Text>}
      />
    </View>
  )
}