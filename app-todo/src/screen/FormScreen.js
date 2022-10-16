import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default function FormScreen({ navigation, route }) {
    const [aviso, setAviso] = useState('')
    const [tarefa, setTarefa] = useState('')
    const Theme = route.params.theme
    const lista = route.params.lista

    useEffect(() => { setAviso('') }, [tarefa])

    const geraID = (lista) => {

        if(!lista) return 0

        let maiorIndice = 0
        
        lista.map((card) => {
            maiorIndice = Math.max(card.id, maiorIndice); 
        }) 
        return maiorIndice + 1
    }

    return (
        <SafeAreaView style={[styles.safeArea, {backgroundColor: Theme.primaryColor}]}>
            <View style={[styles.logo_container, {backgroundColor: Theme.bgPrimary}]}>
                <Image style={styles.logo}

                />
            </View>

            <View style={styles.form}>
                <Text style={[styles.form_titulo, {color: Theme.bgPrimary}]}>Criar Tarefa</Text>

                <TextInput style={[styles.input, {backgroundColor: Theme.bgPrimary}]}
                    onChangeText={setTarefa}
                    value={tarefa}
                    placeholder='Título'
                />
                <Text style={{ color: '#fff' }}>{aviso}</Text>

                <TouchableOpacity style={[styles.form_button, {borderColor: Theme.bgPrimary}]}
                    onPress={() => {
                        if (tarefa.length != 0) {
                            setTarefa(tarefa), navigation.navigate('Home', {
                                tarefa: tarefa,
                                id: geraID(lista)
                            })
                        } else {
                            setAviso('Tarefa vazia!')
                        }
                    }}>

                    <Text style={[styles.button_text, {color: Theme.bgPrimary}]}>Criar</Text>
                </TouchableOpacity>

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
        padding: 20,
        backgroundColor: '#fff',
    },

    logo: {
        width: 80,
        height: 45,
    },

    form: {
        padding: 20,
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        color: '#AF70FF',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
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
        fontSize: 18,
    },
})