import { SafeAreaView, StyleSheet } from 'react-native'
import Tabuleiro from './components/Tabuleiro'

export default function App() {
    return (
        <SafeAreaView style={styles.app_container}>
            <Tabuleiro/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    app_container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        height: '100%'
    }
})