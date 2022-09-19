import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Luz from './luz'

export default function Semaforo() {
    const [status, setAtivo] = useState(1)

    return (
        <View style={styles.container}>
            <Luz cor='#f00' id={1} ativo={status} setAtivo={setAtivo} />
            <Luz cor='#ff0' id={2} ativo={status} setAtivo={setAtivo} />
            <Luz cor='#0f0' id={3} ativo={status} setAtivo={setAtivo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        gap: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
    },

})