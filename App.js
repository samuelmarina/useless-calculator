import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './app/screens/Calculator/CalculatorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
