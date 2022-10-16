import { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native'
import Task from '../components/Task'
import { Dark, Light } from '../../themes/theme';



export default function Home({ navigation, route }) {
    const props = route.params

    const [listaTarefas, setlistTarefa] = useState([])
    const [isSelected, setSelection] = useState(false)

    const Theme = isSelected ? Dark.colors : Light.colors

    const apagaTarefa = (value) => {
        const novaLista = [...listaTarefas]
        novaLista.pop(listaTarefas.indexOf(value))
        setlistTarefa(novaLista)
    }
    
    useEffect(() => { if (props != undefined) {

        const listaNova = [...listaTarefas]
        listaNova.push(props)
        setlistTarefa(listaNova)

    } }, [props])

    return (
        <SafeAreaView style={[styles.safeArea, {backgroundColor: Theme.bgPrimary}]}>
            <View style={styles.logo_container}>
                <Image style={styles.logo}

                />
            </View>

            <View style={styles.container}>
                <View style={styles.button_container}>
                    <Text style={styles.txt_branco}>Tarefas</Text>
                    <View style={styles.button_container2}>
                        <Text style={styles.button_text}>Dark Mode</Text>
                        <Switch
                            trackColor={{ false: "#5d5d5d", true: "#5d5d5d" }}
                            thumbColor={isSelected ? "#ace4aa" : "#f4f3f4"}
                         
                            onValueChange={() => setSelection(!isSelected)}
                            value={isSelected}
                        />
                
                    </View>
                </View>

                <View style={styles.container_task}>
                    {
                        listaTarefas.length > 0 ? listaTarefas.map((tarefa) => <Task tarefa={tarefa.tarefa} apaga={() => apagaTarefa(tarefa.tarefa)}  id={tarefa.id}/>) : []
                    }

                </View>

                <TouchableOpacity 
                    style={[styles.form_button, {backgroundColor: Theme.bgPrimary}]} 
                    onPress={ () => navigation.navigate('FormScreen', {theme: Theme, lista: listaTarefas} ) }>

                        <Text style={[styles.txt_roxo, {color: Theme.textSecondary}]}>Criar Tarefa</Text>
                        <AntDesign name='plus' size={20} color={Theme.textSecondary} />

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

    logo_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button_container2: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 28,
    },

    button_text: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5,
    },

    container: {
        backgroundColor:'#AF70FF',
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
        color:'#AF70FF',
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
        color:'#AF70FF',
        paddingLeft: 20,
        paddingRight: 20,
    },

    container_task: {
        maxHeight: 300,
        paddingVertical: 10,
        marginTop: 10,
        paddingRight: 5,
        gap: 10,
        overflow: 'scroll',
        
    },
})  