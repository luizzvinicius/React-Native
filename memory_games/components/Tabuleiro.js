import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Carta from './Carta'

export default function Tabuleiro() {
    const [cartas, setCartas] = useState([
        { id: 1, color: '#FFF7AE' },
        { id: 2, color: '#FFF7AE' },
        { id: 3, color: '#8B5FBF' },
        { id: 4, color: '#8B5FBF' },
        { id: 5, color: '#E3879E' },
        { id: 6, color: '#E3879E' },
        { id: 7, color: '#FEC0CE' },
        { id: 8, color: '#FEC0CE' }
    ])

    const [pressionada, setPressionada] = useState(0)
    const [status, setStatus] = useState(0)
    const [clicadas, setClicadas] = useState([])

    return (
        <View style={styles.tabuleiro_container}>
            {
                cartas.map(carta =>
                    <Carta key={carta.id} id={carta.id} color={carta.color} carta={carta} pressionada={pressionada} setPressionada={setPressionada} status={status} setStatus={setStatus} clicadas={clicadas} />
                )
                
            }
            

            <View><Text>{console.log(clicadas)}</Text></View> 
        </View>
    )
}

const styles = StyleSheet.create({
    tabuleiro_container: {
        width: '75%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 15,
        borderColor: '#F46197',
        borderWidth: 3,
    }
})