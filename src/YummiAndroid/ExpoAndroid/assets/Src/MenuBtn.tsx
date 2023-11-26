import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function MenuBtn() {

    
    const [botaoAtivo, setBotaoAtivo] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setBotaoAtivo(index === botaoAtivo ? null : index);
  };

  const botaoEstilo = (index: number) => ({
    ...styles.button,
    backgroundColor: index === botaoAtivo ? 'black' : 'lightblue',
  });

  const textoEstilo = (index: number) => ({
    color: index === botaoAtivo ? 'white' : 'black',
  })

  
  {[1, 2, 3].map((numeroBotao) => (
    <TouchableOpacity
      key={numeroBotao}
      style={botaoEstilo(numeroBotao)}
      onPress={() => handlePress(numeroBotao)}
    >
      <Text style={textoEstilo(numeroBotao)}>Botão {numeroBotao}</Text>
    </TouchableOpacity>
  ))}




    return(
        <View style={styles.container}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
        
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Entradas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Pratos Principais</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Drinks e Bebidas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texto}>Sobremesas</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        fontSize: 15,
        fontWeight: "bold"
    },
    scrollView:{
        flexDirection: "row",
    },
    button:{
        paddingHorizontal: 3,
        paddingVertical: 10,
        marginHorizontal: 6,
        borderRadius: 5
    }
})