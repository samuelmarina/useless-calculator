import React from 'react';
import { StyleSheet, View } from 'react-native';

function Row({children}) {
    return (
        <View style={styles.container}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})

export default Row;