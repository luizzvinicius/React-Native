import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Carta({ carta, setPressionada, clicadas, status }) {

    const verificaStatus = () => {
        switch (status) {
            case 0: return { background: '#ff5a5f' }
            case 1: return { background: carta.color }
            case 2: return { background: carta.color, opacity: 0.5 }
            default: break
        }
    }

    return (
        <TouchableOpacity disabled={status == 2 ? true : false}
            
            style={[styles.carta_container, verificaStatus()]}

            onPress={() => { carta.status = 1, setPressionada(carta.id), clicadas.push(carta) }}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta_container: {
        width: 80,
        height: 120,
        borderRadius: 5,
    },
})