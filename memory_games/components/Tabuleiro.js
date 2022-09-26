import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Carta from './Carta'

export default function Tabuleiro() {

    const [cartas, setCartas] = useState([
        { status: 0, color: '#FFF7AE' },
        { status: 0, color: '#8B5FBF' },
        { status: 0, color: '#E3879E' },
        { status: 0, color: '#FEC0CE' },
    ])

    const [transition, setTransition] = useState([])

    const openCard = (carta) => {
        const array = [...transition]
        if (!array.includes(carta)) {
            array.push(carta)
            setTransition(array)
        }

        if (array.length === 2) {
            if (array[0].color === array[1].color) {
                array[0].status = 2
                array[1].status = 2

                verificaCartas(array)
            }
        }
    }

    const verificaCartas = (array) => {

        const oldCards = [...cartas]

        oldCards.map((carta) => {
            if (carta.color == array[0].color) {
                oldCards.pop(carta)
                oldCards.push(array[0])
            }

            if (carta.color == array[1].color) {
                oldCards.pop(carta)
                oldCards.push(array[1])
            }

            setCartas(oldCards)
        })
    }

    return (
        <View style={styles.tabuleiro_container}>
            {cartas.map((carta) =>
                <Carta color={carta.color} status={carta.status} click={openCard} card={carta} />
            )}
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