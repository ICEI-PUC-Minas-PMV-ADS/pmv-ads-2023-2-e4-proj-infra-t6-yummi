/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './assets/Src/Header';
import ProductScreen from './ProductScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Header/>
        <ProductScreen />
      </GestureHandlerRootView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})