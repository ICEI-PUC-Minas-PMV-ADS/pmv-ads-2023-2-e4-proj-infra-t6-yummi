import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Pratos } from "../Data/PratosList";

export function PratosItem({ name, image, preco, description }: Pratos) {
  return(
    <View style={styles.container}>
      <Image style={{ width: 100, height: 80 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={5} style={styles.description}>{description}</Text>
        <Text style={styles.preco}>{preco}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    marginBottom: 4,
    color: "#000"
  },

  preco: {
    fontSize: 15,
    fontWeight: "bold"
  }
})