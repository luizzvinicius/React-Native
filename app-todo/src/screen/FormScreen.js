import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import config from '../../themes/config.json'



export default function FormScreen({navigation}) {

    const theme = config
    const [tarefa, setTarefa] = useState('')

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.logo_container}>
                <Image style={styles.logo}
                
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.form_titulo}>Criar Tarefa</Text>
                
                <TextInput style={styles.input}
                    onChangeText={setTarefa}
                    value={tarefa}
                    placeholder='Título'
                />

                <TouchableOpacity style={styles.form_button} onPress={ () => navigation.goBack()}>
                    <Text style={styles.button_text}>Criar</Text>
                </TouchableOpacity>
                {console.log(theme)}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#AF70FF',
    },

    logo_container: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
    },

    logo: {
        width: 80,
        height: 45,
    },

    form: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 50,
        marginTop: 10,
        padding: 10,
        color: '#AF70FF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    form_titulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    
    form_button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: 50, 
        backgroundColor: '#AF70FF', 
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
    },

    button_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})