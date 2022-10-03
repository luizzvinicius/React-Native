import { StyleSheet, View, Text, Image } from 'react-native'
import { useState } from 'react'
import Carta from './Carta'
import ButtonCustom from './ButtonCustom'
import defaultImage from '../public/image/ball.png'
import hinata from '../public/image/hinata.png'
import kenma from '../public/image/kenma.png'
import noya from '../public/image/noya.png'
import tanaka from '../public/image/tanaka.png'

export default function Tabuleiro() {
    const cards = [
        { image: hinata, status: 0, bgDefault: defaultImage },
        { image: kenma, status: 0, bgDefault: defaultImage },
        { image: noya, status: 0, bgDefault: defaultImage },
        { image: tanaka, status: 0, bgDefault: defaultImage},
    ]

    const [cartas, setCartas] = useState([])
    const [pressionada, setPressionada] = useState(0)
    const [clicadas, setClicadas] = useState([])
    const [score, setScore] = useState(0)

    const compara = (clicadas) => {
        if (clicadas.length == 2) {
            const copiaCartas = [...cartas]

            setTimeout(() => {
                if (clicadas[0].image == clicadas[1].image) {

                    copiaCartas.forEach(carta => {
                        carta.image == clicadas[0].image ? carta.status = 2 : ''
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
        .sort( () => Math.random() - 0.5 )
        .map( (card) =>  ({...card, id: Math.random() * 10}))
        
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
                        <Carta key={carta.id} carta={carta} pressionada={pressionada} setPressionada={setPressionada} clicadas={clicadas} status={carta.status} bgDefault={carta.bgDefault} />
                    )
                }
            </View>

            <View>
                <ButtonCustom embaralharCartas={embaralharCartas}/>
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

    icon: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000'
    },
})