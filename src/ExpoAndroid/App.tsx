import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Header from "./assets/Src/Header";
import MenuBtn from "./assets/Src/MenuBtn"


export default function App() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Header/>
      <MenuBtn/>
    </GestureHandlerRootView>
    <StatusBar style="light" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


