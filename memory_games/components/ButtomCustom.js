import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function ButtonCustom({ embaralharCartas }) {
    return (

        <TouchableOpacity
            onPress={() => embaralharCartas()} style={styles.button}>

            <Text style={styles.text}>Embaralhar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff5a5f',
        padding: 10,
        borderRadius: 5,
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})