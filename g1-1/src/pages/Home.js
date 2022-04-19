import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

import CaixaInput from './components/CaixaInput'
import Footer from './components/Footer'

export default function Home({ navigation }) {

    const [gasolina, setGasolina] = useState(0)
    const [km, setKm] = useState(0)

    let resposta = 0

    const calcula = () => {
        resposta = km / gasolina
        console.log(resposta)
        navigation.replace("Resultado", { resposta })
    }

    return (
        <View>
            <CaixaInput placeholder='Insira a quantidade de KM Percorridos' titulo='Quilômetros' value={km} set={setKm}></CaixaInput>
            <CaixaInput placeholder='Insira a quantidade de gasolina' titulo='Gasolina (em litros)' value={gasolina} set={setGasolina}></CaixaInput>
            <View style={styles.view}>
                <TouchableOpacity onPress={calcula} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
            <Footer label="Feito por Afonso Navarini (1120458)" margin='370'></Footer>
        </View>

    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        paddingHorizontal: 100
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    footer: {
        marginTop: 370,
        alignSelf: 'center'
    }
});