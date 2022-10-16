import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'

export default function Task({ tarefa }) {
    const [isSelected, setSelection] = useState(false)
    const [desabilitado, setDesabilitado] = useState(false)

    const verificaSelecionado = (selecionado) => {
        if (selecionado) return {textDecorationLine: 'line-through'}
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkBox_text}>
                <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => setSelection(!isSelected)}
                    color={'#AF70FF'}
                    disabled={desabilitado}
                />

                <Text style={[styles.check_text, verificaSelecionado(isSelected)]}>{tarefa}</Text>
            </View>

            <TouchableOpacity
                onPress={() => {setSelection(true), setDesabilitado(true)}}
            >
                <MaterialIcons name='delete' size={24} color='#FF6060' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    checkBox_text: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    check_text: {
        color: '#AF70FF',
        fontWeight: 'bold',
        fontSize: 15,
    },
})