import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Tabuleiro from './components/Tabuleiro'

export default function App() {
    return (
        <SafeAreaView style={styles.app_container}>
            <Text style={styles.titulo}>Memory Game</Text>
            
            <Tabuleiro/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    app_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
    },

    titulo: {
        fontSize: 40,
        color: '#ffff',
        fontWeight: 'bold',
        marginBottom: 10
    },
})