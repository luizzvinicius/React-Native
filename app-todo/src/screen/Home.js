import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, CheckBox } from 'react-native'
import Task from '../components/Task'

export default function Home({ navigation }) {


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.logo_container}>
                <Image style={styles.logo}

                />
            </View>

            <View style={styles.container}>
                <Text style={styles.txt_branco}>Tarefas</Text>

                <View style={styles.container_task}>

                    <Task />
                    <Task />
                    <Task />
                </View>

                <TouchableOpacity style={styles.form_button} onPress={() => navigation.navigate('FormScreen')}>
                    <Text style={styles.txt_roxo}>Criar Tarefa</Text>
                    <AntDesign name="plus" size={20} color="#AF70FF" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
    },

    container: {
        width: '100%',
        padding: 20,
        backgroundColor: '#AF70FF',
        borderRadius: 7,
        gap: 5,
    },

    txt_branco: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    txt_roxo: {
        color: '#AF70FF',
        fontWeight: 'bold',
        fontSize: 15
    },

    logo: {
        width: 80,
        height: 45,
    },

    form_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        color: '#AF70FF',
        paddingLeft: 20,
        paddingRight: 20,
    },

    container_task: {
        width: '100%',
        height: 150,
        paddingVertical: 10,
        gap: 10,
        overflow: 'scroll',
    }
})  