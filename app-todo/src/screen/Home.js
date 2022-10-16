import { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper'
import Task from '../components/Task'

export default function Home({ navigation, route }) {
    const props = route.params
    const [listaTarefas, setlistTarefa] = useState([])
    const [isSelected, setSelection] = useState(false)

    useEffect(() => { if (props != undefined) listaTarefas.push(props) }, [props])

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.logo_container}>
                <Image style={styles.logo}

                />
            </View>

            <View style={styles.container}>
                <View style={styles.button_container}>
                    <Text style={styles.txt_branco}>Tarefas</Text>
                    <View style={styles.button_container2}>
                        <Text style={styles.button_text}>dark mode:</Text>
                        <Checkbox
                            status={isSelected ? 'checked' : 'unchecked'}
                            onPress={() => setSelection(!isSelected)}
                            color={'#FFF'}
                        />

                    </View>
                </View>

                <View style={styles.container_task}>
                    {console.log(listaTarefas)}
                    {
                        listaTarefas.length > 0 ? listaTarefas.map(tarefa => <Task tarefa={tarefa} />) : []
                    }

                </View>

                <TouchableOpacity style={styles.form_button} onPress={() => navigation.navigate('FormScreen')}>
                    <Text style={styles.txt_roxo}>Criar Tarefa</Text>
                    <AntDesign name='plus' size={20} color='#AF70FF' />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingLeft: 20,
        paddingRight: 20,
    },

    logo_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button_container2: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 28,
    },

    button_text: {
        color: '#fff',
        fontWeight: 'bold',
    },

    container: {
        backgroundColor: '#AF70FF',
        gap: 5,
        padding: 20,
        borderRadius: 7,
    },

    txt_branco: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    txt_roxo: {
        color: '#AF70FF',
        fontWeight: 'bold',
        fontSize: 15,
    },

    logo: {
        width: 80,
        height: 45,
    },

    form_button: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        color: '#AF70FF',
        paddingLeft: 20,
        paddingRight: 20,
    },

    container_task: {
        height: 150,
        paddingVertical: 10,
        paddingRight: 5,
        gap: 10,
        overflow: 'scroll',
    },
})  