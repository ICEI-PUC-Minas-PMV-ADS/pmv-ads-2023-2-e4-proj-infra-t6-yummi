import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Pratos, pratosList } from '../Data/PratosList';
import { FlatList } from "react-native-gesture-handler";
import MeusPedidos from "./MeusPedidos";

export default function MenuBtn() {
  const [selectedButton, setSelectedButton] = useState("Todos");
  const [foodList, setFoodList] = useState(pratosList);
  const [mostrarPedidos, setMostrarPedidos] = useState(false);
  const [pedidos, setPedidos] = useState([])

  const filterPratosByCategoria = (categoria) => {
    if (categoria === "Todos") {
      return pratosList;
    } else {
      return pratosList.filter((prato) => prato.categoria === categoria);
    }
  };

  const handleButtonClick = (categoria) => {
    setSelectedButton(categoria);
  const filteredList = filterPratosByCategoria(categoria);
  const sortedList = filteredList.slice().sort((a, b) => a.name.localeCompare(b.name));
  setFoodList(sortedList);
  };

  const handleAdicionarPress = (name, preco) => {
    const existiItemIdex = pedidos.findIndex(item => item.name === name)

    if(existiItemIdex !== -1) {
      const updatePedidos = [...pedidos]
      updatePedidos[existiItemIdex].quantidade += 1
      updatePedidos[existiItemIdex].precoItem += Number(preco)
      setPedidos(updatePedidos)
    } else {
      const novoPedido = { name, preco: Number(preco), quantidade: 1, precoItem: Number(preco)}
      setPedidos([...pedidos, novoPedido])
    }
    console.log(`Adicionar ${name} ao carrinho`)
    setMostrarPedidos(true)
  }
  
  const handleRemoverItem = (index) => {
    const novosPedidos = [...pedidos];
    novosPedidos.splice(index, 1);
    setPedidos(novosPedidos);

    if (novosPedidos.length === 0) {
      setMostrarPedidos(false)
    }
  };

  const handleLimparPedidos = () => {
    setPedidos([]);
  };

  
  const renderPratoItem = ({ item }) => (
    <View style={styles.pratoItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.pratoImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.pratoItemText}>{item.name}</Text>
        <Text style={styles.pratoItemPreco}>R$ {item.preco.toFixed(2)}</Text>
        <Text>{item.description}</Text>
      <TouchableOpacity 
        style={styles.adicionarButton}
        onPress={() => handleAdicionarPress(item.name, item.preco)}>
        <Text style={styles.adicionarButtonText}>Adicionar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );


    return(
        <View style={styles.container}>
          <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.buttonsContainer}>
            {["Todos", "Entradas", "Pratos Principais", "Drinks e Bebidas", "Sobremesas"].map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.button, 
                      selectedButton === category && styles.selectedButton,]}
              onPress={() => handleButtonClick(category)}
            >
              <Text style={[styles.buttonText, selectedButton === category && styles.selectedButtonText]}>
                {category}
              </Text>
            </TouchableOpacity>
            ))}
          </View>
          </ScrollView>
          
          <FlatList
          data={foodList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPratoItem}
          style={styles.flatList}
          />

          {mostrarPedidos && (
            <MeusPedidos
            pedidos={pedidos}
            onRemoverItem={handleRemoverItem}
            onClose={() => {
              setMostrarPedidos(false)
              handleLimparPedidos()
            }}
          />
      )}
        </View>    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
  },
  adicionarButton: {
    backgroundColor: 'black',
    padding: 4,
    marginTop: 3,
    borderRadius: 5,
    alignItems: 'center',
    width: 60
  },

  adicionarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  flatList: {
    marginTop: 16
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    height: 40
  },
  button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
  },
  pratoItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pratoItemPreco: {
    fontSize: 14,
    fontWeight: "bold"
  },
  buttonText: {
    color: 'black',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  selectedButtonText: {
    color: 'white',
  },
  pratoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  pratoImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  foodItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});