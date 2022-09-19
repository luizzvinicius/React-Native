import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Luz({ ativo, cor, id, setAtivo }) {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: cor }, id != ativo ? { opacity: 0.5 } : {}]}
            onPress={() => setAtivo(id)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 50,
    },

})