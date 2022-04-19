import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

const CaixaInput = (props) => {
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.text}>{props.titulo}</Text>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={props.set}
                value={props.value}
                placeholder={props.placeholder}
                keyboardType="numeric"
            />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    text: {

        fontSize: 20,
        fontWeight: 'bold'

    },
    view: {
        marginTop: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
    }
});

export default CaixaInput;