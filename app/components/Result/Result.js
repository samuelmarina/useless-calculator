import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Result({
    result
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        height: "30%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        padding: 30
    },
    text: {
        fontSize: 50,
        textAlign: "right"
    }
})

export default Result;