import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'
import Carta from './Carta'
import ButtonCustom from './ButtomCustom'

export default function Tabuleiro() {
    const cards = [
        { color: '#FFF7AE', status: 0 },
        { color: '#8B5FBF', status: 0 },
        { color: '#E3879E', status: 0 },
        { color: '#FEC0CE', status: 0 },
    ]

    const [cartas, setCartas] = useState([])
    const [pressionada, setPressionada] = useState(0)
    const [clicadas, setClicadas] = useState([])
    const [score, setScore] = useState(0)

    const compara = (clicadas) => {
        if (clicadas.length == 2) {
            const copiaCartas = [...cartas]

            setTimeout(() => {
                if (clicadas[0].color == clicadas[1].color) {

                    copiaCartas.forEach(carta => {
                        carta.color == clicadas[0].color ? carta.status = 2 : ''
                    })

                    setScore((prev) => prev + 1)
                } else {
                    clicadas.forEach((carta) => {
                        carta.status = 0
                    })
                }

                setCartas(copiaCartas)
            }, 450);

            setClicadas([])
        }
    }

    const embaralharCartas = () => {
        const cartasEmbaralhadas = [...cards, ...cards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() * 10 }))

        setScore(0)
        setCartas(cartasEmbaralhadas)
    }

    return (
        <View style={styles.tabuleiro_container}>
            <View>
                <Text style={styles.titulo}>Score: {score}</Text>
            </View>

            <View style={styles.container_cartas}>
                {
                    cartas.map(carta =>
                        <Carta key={carta.id} carta={carta} pressionada={pressionada} setPressionada={setPressionada} clicadas={clicadas} status={carta.status} />
                    )
                }
            </View>

            <View>
                <ButtonCustom embaralharCartas={embaralharCartas} />
            </View>

            {compara(clicadas)}
        </View>
    )
}

const styles = StyleSheet.create({
    tabuleiro_container: {
        width: '60%',
        Height: '60%',
        backgroundColor: '#3c3c3c',
        padding: '2%',
        gap: 10,
        borderRadius: 5,
        justifyContent: 'space-between'
    },

    container_cartas: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    titulo: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20
    },
})