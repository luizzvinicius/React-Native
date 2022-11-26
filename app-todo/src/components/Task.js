import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Task({ tarefa, apaga, dark = false, id, navigation, dados }) {
    const [isSelected, setSelection] = useState(false)

    const verificaSelecionado = (selecionado) => {
        if (selecionado) return { textDecorationLine: 'line-through' }
    }

    return (
        <View style={[styles.container, dark ? { backgroundColor: '#333333' } : {}]} >
            <Checkbox
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => setSelection(!isSelected)}
                color={'#AF70FF'}
            />
            <View style={styles.checkBox_text}>
                <Text numberOfLines={1} ellipsizeMode='clip' style={[styles.check_text, verificaSelecionado(isSelected)]}>{tarefa}</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FormScreen', { ...dados, tarefa: tarefa, id: id })}
                >
                    <MaterialCommunityIcons name="pencil" size={24} color="#AF70FF" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { apaga(id) }}
                >
                    <MaterialIcons name='delete' size={24} color='#FF6060' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        paddingRight: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    checkBox_text: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    check_text: {
        color: '#AF70FF',
        fontWeight: 'bold',
        fontSize: 15,
    },
})