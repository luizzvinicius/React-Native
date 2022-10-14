import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Task from '../components/Task'


export default function Home({ navigation, route }) {
    const listaTarefas = route.params

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.logo_container}>
                <Image style={styles.logo}

                />
            </View>

            <View style={styles.container}>
                <Text style={styles.txt_branco}>Tarefas</Text>

                <View style={styles.container_task}>
                    {console.log(listaTarefas)}

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
        gap: 10,
        overflow: 'scroll',
    },
})  