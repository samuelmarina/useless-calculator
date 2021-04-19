import React from 'react';
import { StyleSheet, View } from 'react-native';
import Result from '../../components/Result/Result';

function CalculatorScreen(props) {
    return (
        <View style={styles.container}>
            <Result result={123}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
        width: "100%"
    }
})

export default CalculatorScreen;