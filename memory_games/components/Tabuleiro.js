import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import Carta from './Carta'

export default function Tabuleiro() {
    const [cartas, setCartas] = useState([
        { id: 1, color: '#FFF7AE', desabilitada: false },
        { id: 2, color: '#FFF7AE', desabilitada: false },
        { id: 3, color: '#8B5FBF', desabilitada: false },
        { id: 4, color: '#8B5FBF', desabilitada: false },
        { id: 5, color: '#E3879E', desabilitada: false },
        { id: 6, color: '#E3879E', desabilitada: false },
        { id: 7, color: '#FEC0CE', desabilitada: false },
        { id: 8, color: '#FEC0CE', desabilitada: false }
    ])

    const [pressionada, setPressionada] = useState(0)
    const [clicadas, setClicadas] = useState([])

    const compara = (clicadas) => {
        if (clicadas.length == 2) {
            if (clicadas[0].color == clicadas[1].color) {
                const copiaCartas = [...cartas]

                copiaCartas.forEach(carta => {
                    carta.color == clicadas[0].color ? carta.desabilitada = true : ''
                })

                setCartas(copiaCartas)
            }

            setClicadas([])
        }
        console.table(clicadas)
    }

    return (
        <View style={styles.tabuleiro_container}>
            {
                cartas.map(carta =>
                    <Carta key={carta.id} carta={carta} id={carta.id} color={carta.color} pressionada={pressionada} setPressionada={setPressionada} clicadas={clicadas} desabilitada={carta.desabilitada} />
                )
            }

            {compara(clicadas)}
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