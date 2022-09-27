import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Carta({ id, color, carta, pressionada, setPressionada, status, setStatus, clicadas }) {

    return (
        <TouchableOpacity
            style={[styles.carta_container, id == pressionada ? {background: color} : {background: '#6C809A'} ]}
            onPress={() => {setPressionada(id), clicadas.push(carta)}}>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carta_container: {
        width: 100,
        height: 150,
        borderRadius: 5,

    }
})