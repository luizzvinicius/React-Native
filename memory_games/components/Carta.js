import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Carta({ id, color, carta, pressionada, setPressionada, desabilitada, clicadas }) {

    return (
        <TouchableOpacity disabled={desabilitada}
            style={[
                styles.carta_container,
                id == pressionada ? { background: color } : { background: '#6C809A' },
                desabilitada == true ? { opacity: 0.3 } : ''
            ]}

            onPress={() => { setPressionada(id), clicadas.push(carta) }}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta_container: {
        width: 80,
        height: 120,
        borderRadius: 5,
    }
})