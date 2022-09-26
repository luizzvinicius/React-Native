import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export default function Carta ({color, status, click, card }) {

    const verificaStatus = (status) => {
        switch(status) {
            case 0: return {background: '#6C809A'}
            case 1: return {background: color}
            case 2: return {background: color, opacity: 0.5}
        }
    }

    return (
        <TouchableOpacity style={[styles.carta_container, verificaStatus(status)]} onPress={status === 0 ? () => click(card) : () => '' }>
            <Image/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    carta_container: {
        width: 150,
        height: 200,
        margin: 10,
        borderRadius: 5

    }
})