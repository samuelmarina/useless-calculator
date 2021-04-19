import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from "../../config/colors";

function Button({
    color = colors.gray,
    text,
}) {
    return (
        <TouchableHighlight style={[styles.container, {backgroundColor: color}]}>
            <Text style={styles.text}>+</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        marginHorizontal: Dimensions.get('window').width * 0.02,
    },
    text: {
        fontSize: 40,
        color: "white",
    }
})

export default Button;