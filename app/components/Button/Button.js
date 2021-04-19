import React, { useContext } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

import calculator from "../../helpers/calculator/calculator";
import colors from "../../config/colors";
import Context from "../../helpers/context/context";
import numbers from "../../helpers/numbers/numbers";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

function Button({
    color = colors.gray,
    children,
    size,
    type,
}) {
    const value = children ? children : numbers.getRandomNumber(0, 9);
    const buttonStyles = [styles.button, {backgroundColor: color}];
    const { result, setResult } = useContext(Context);

    if(size == "double"){
        buttonStyles.push(styles.buttonDouble);
    }

    const handleTap = () => {
        setResult(calculator(type, value, result));
    }

    return (
        <TouchableHighlight 
            style={buttonStyles}
            onPress={handleTap}
        >
            <Text style={styles.text}>{value}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.text,
        fontSize: 40,
    },
    button: {
        alignItems: "center",
        borderRadius: Math.round(screen.width + screen.height) / 2,
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        justifyContent: "center",
        margin: 5, 
    },
    buttonDouble: {
        alignItems: "flex-start",
        flex: 0,
        paddingLeft: 40,
        width: screen.width / 2 - 10,
    }
})

export default Button;