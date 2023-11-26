import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';


import Header from "./assets/Src/Header";
import Body from "./assets/Src/Body";
import MenuBtn from "./assets/Src/MenuBtn"


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrinksScreen from './assets/Components/ListaPratos/DrinksScreen';
import EntradasScreen from './assets/Components/ListaPratos/EntradasScreen';
import PratosScreen from './assets/Components/ListaPratos/PratosScreen';
import SobremesaScreen from './assets/Components/ListaPratos/SobremesaScreen';
import TodosScreen from './assets/Components/ListaPratos/TodosScreen';




const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MenuBtn/>
      <Body/>
      <StatusBar style="light" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navegacao: {
    
  },
  rolagem: {
    backgroundColor: "blue"
  }
})


