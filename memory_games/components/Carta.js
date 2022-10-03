import { StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Carta({ carta, setPressionada, clicadas, status, bgDefault }) {

    const desabilita = () => {
        switch(status) {
            case 0: return { backgroundColor: '#ff5a5f' }
            case 1: return { backgroundColor: '#ff5a5f' }
            case 2: return { backgroundColor: '#ff5a5f' , opacity: 0.5 }
        }
    }

    const verificaStatus = () => {
        switch (status) {
            case 0: return bgDefault
            case 1: return carta.image
            case 2: return carta.image
        }
    }


    return (

        <TouchableOpacity disabled={status == 2 ? true : false}
            style={[
                styles.carta_container,
                desabilita()
            ]}

            onPress={() => { carta.status = 1, setPressionada(carta.id), clicadas.push(carta) }}>

            <Image source={{ uri: verificaStatus() }} style={styles.icon} />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    carta_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 120,
        borderRadius: 5,
    },
    icon: {
        width: 55,
        height: 55,
        zIndex: 1,
    }
})