import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Checkbox } from 'react-native-paper';

export default function FormScreen() {
    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => setSelection(!isSelected)}
                    color={'#AF70FF'}
                />

                <Text style={styles.check_text}>Tarefa de nada</Text>
            </View>

            <TouchableOpacity>
                <MaterialIcons name='delete' size={24} color='#FF6060' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        height: 50,
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },

    checkbox: {
        alignSelf: 'center',
        backgroundColor: '#AF70FF'
    },

    check_text: {
        color: '#AF70FF',
        fontWeight: 'bold',
        fontSize: 15,
    },
})