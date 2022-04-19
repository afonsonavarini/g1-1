import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Footer(props) {
    return (
        <View>
            <Text style={styles.footer}>{props.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 350,
        alignSelf: 'center'
    }
});