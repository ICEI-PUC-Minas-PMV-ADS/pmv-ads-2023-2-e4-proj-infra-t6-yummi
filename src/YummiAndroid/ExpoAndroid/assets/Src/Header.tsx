import { View, Text, StyleSheet } from "react-native"
import React from "react"

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeRestaurante}>Yummi</Text>
      <Text style={styles.fraseRestaurante}>Sabor e sofisticação em cada prato.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#000000"
  },

  nomeRestaurante: {
    fontSize: 45,
    color: "#ffffff",
    paddingTop: 35
  },

  fraseRestaurante: {
    color: "#ffffff",
    paddingTop: 10,
    paddingBottom: 20
  }
});

export default Header