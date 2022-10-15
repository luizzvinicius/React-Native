import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


export default function FormScreen({ navigation }) {
    const [listaTarefas, setlistaTarefas] = useState([]) // adicionar todas as tarefas para renderizar no Home

    const [aviso, setAviso] = useState('')
    const [tarefa, setTarefa] = useState('')

    useEffect(() => { setAviso('') }, [tarefa])

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
                <Text style={{ color: '#fff' }}>{aviso}</Text>

                <TouchableOpacity style={styles.form_button}
                    onPress={() => {
                        if (tarefa.length != 0) {
                            setTarefa(tarefa)
                            listaTarefas.push(tarefa),
                                navigation.goBack({tarefas: listaTarefas })

                        } else {
                            setAviso('Tarefa vazia!')
                        }

                        console.log(listaTarefas, tarefa)

                    }}>


                    <Text style={styles.button_text}>Criar</Text>
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