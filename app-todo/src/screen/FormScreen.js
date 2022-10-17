import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default function FormScreen({ navigation, route }) {
    const [aviso, setAviso] = useState('')
    const [tarefa, setTarefa] = useState(route.params.tarefa !== undefined ? route.params.tarefa : '')

    const { theme, lista, logo, dark, func } = route.params


    useEffect(() => { setAviso('') }, [tarefa])

    const geraID = (lista) => {

        if (!lista) return 0

        let maiorIndice = 0

        lista.map( card => maiorIndice = Math.max(card.id, maiorIndice))

        return maiorIndice + 1
    }
   
    return (
        <SafeAreaView style={ [styles.safeArea, { backgroundColor: theme.primaryColor }] }>
            <View style={ [styles.logo_container, { backgroundColor: theme.bgPrimary }] }>
                <Image style={styles.logo}
                    source={logo}
                />
            </View>
            <View style={styles.form}>
                <Text style={ [styles.form_titulo, {color: theme.bgPrimary}] }>{func} Tarefa</Text>

                <TextInput style={[styles.input, { backgroundColor: theme.bgPrimary }]}
                    onChangeText={setTarefa}
                    value={tarefa}
                    placeholder='Título'
                />
                <Text style={{ color: '#fff' }}>{aviso}</Text>

                <TouchableOpacity style={ [styles.form_button, {borderColor: theme.bgPrimary}] }
                    onPress={() => {
                        if (tarefa.length == 0) return setAviso('Tarefa vazia!') 
                        
                        setTarefa(tarefa), navigation.navigate('Home', {
                            id: func === 'Criar' ? geraID(lista) : route.params.id,
                            tarefa: tarefa,
                            dark: dark,
                            func: func
                        })
                    }}>

                    <Text style={ [styles.button_text, {color: theme.bgPrimary}] }>{func}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },

    logo: {
        width: 110,
        height: 41,
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