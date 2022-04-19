import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React, { useState, useLayoutEffect } from 'react'

import Footer from './components/Footer';


export default function Resultado({ navigation }) {

    const route = useRoute();

    const [indexColor, setIndexColor] = useState('blue')
    const [number, setNumber] = useState(route.params.resposta)
    const [index, setIndex] = useState('N/A')

    const voltar = () => {

        navigation.replace("Home")

    }
    
    useLayoutEffect(() => {
        switch (true) {
            case number > 12:
                setIndex('A')
                setIndexColor('#008000')
                break
            case number <= 12 && number >= 10:
                setIndex('B')
                setIndexColor('#808000')
                break
            case number <= 10 && number >= 8:
                setIndex('C')
                setIndexColor('#FDCE2A')
                break
            case number <= 8 && number >= 4:
                setIndex('D')
                setIndexColor('#FF781F')
                break
            case number < 4:
                setIndex('E')
                setIndexColor('#CE2029')
                break
        }

    }, [])

    return (
        <View style={styles.viewText}>
            <Text style={styles.text}>Média de Consumo</Text>
            <Text style={styles.number}>{number} KM/L</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: indexColor }}>{index}</Text>
            <View style={styles.view}>
                <TouchableOpacity onPress={voltar} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 127 }}>
                <Footer label="Feito por Afonso Navarini (1120458)"></Footer>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    text: {

        fontSize: 25,
        fontWeight: 'bold'

    },
    number: {
        color: 'blue',
        fontSize: 25,
        fontWeight: 'bold'

    },
    indice: {
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold'

    },
    viewText: {
        marginTop: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
    view: {
        marginTop: 20,
        paddingHorizontal: 100
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});