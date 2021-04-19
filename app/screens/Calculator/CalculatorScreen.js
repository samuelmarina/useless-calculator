import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button/Button';
import colors from "../../config/colors";
import Context from "../../helpers/context/context";
import Row from "../../components/Row/Row";
import { initialState } from "../../helpers/calculator/calculator";

function CalculatorScreen(props) {
    const [result, setResult] = useState(initialState);
    
    return (
        <Context.Provider value={{ result, setResult }}>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Text style={styles.value}>
                        {result.currentValue}
                    </Text>
                    <Row>
                        <Button
                            type="clear"
                        >
                            c
                        </Button>
                        <Button
                            type="neg"
                        >
                            +/-
                        </Button>
                        <Button
                            type="percentage"
                        >
                            %
                        </Button>
                        <Button 
                            color={colors.orange}
                            type="operator"
                        >
                            ÷
                        </Button>
                    </Row>
                    <Row>
                        <Button type="num" />
                        <Button type="num" />
                        <Button type="num" />
                        <Button 
                            color={colors.orange}
                            type="operator"
                        >
                            x
                        </Button>
                    </Row>
                    <Row>
                        <Button type="num" />
                        <Button type="num" />
                        <Button type="num" />
                        <Button 
                            color={colors.orange}
                            type="operator"  
                        >
                            +
                        </Button>
                    </Row>
                    <Row>
                        <Button type="num" />
                        <Button type="num" />
                        <Button type="num" />
                        <Button 
                            color={colors.orange}
                            type="operator" 
                        >
                            -
                        </Button>
                    </Row>
                    <Row>
                        <Button 
                            size="double"
                            type="num"
                        />
                        <Button
                            type="num"
                        >
                            .
                        </Button>
                        <Button 
                            color={colors.orange}
                            type="equal" 
                        >
                            =
                        </Button>
                    </Row>
                </SafeAreaView>
            </View>
        </Context.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        paddingBottom: 10,
    },
    value: {
        color: colors.text,
        fontSize: 50,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
})

export default CalculatorScreen;