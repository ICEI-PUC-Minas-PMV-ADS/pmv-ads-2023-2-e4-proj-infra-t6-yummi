/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MeusPedidos from './assets/Src/MeusPedidos';

function ProductScreen() {
  const [product, setProducts] = useState([]);
  const [selectedButton, setSelectedButton] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [mostrarPedidos, setMostrarPedidos] = useState(false);
  //const [flatListRef] = React.createRef();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/Product')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
        console.log(response.status);
        // console.log(response.headers);
      })
      .catch(error => {
        console.log(error);
      });
    setProducts(sortProducts(product));
  }, []);
  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({item}) => (
    <View style={styles.pratoItemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `http://10.0.2.2:5000${item.imagePath?.replace('~', '')}`,
          }}
          style={styles.pratoImage}
        />
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.pratoItemText}>
            {item.name ?? 'Indisponível'}
          </Text>
          <Text numberOfLines={5} style={styles.pratoItemDescricao}>
            {item.description ?? 'Indisponível'}
          </Text>
          <Text style={styles.pratoItemPreco}>
            R$ {item.price.toFixed(2) ?? 'Indisponível'}
          </Text>
          <TouchableOpacity
            style={styles.adicionarButton}
            onPress={() => handleAdicionarPress(item.name, item.preco)}>
            <Text style={styles.adicionarButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  const filterPratosByCategoria = category => {
    if (category === 'Todos') {
      return product;
    } else {
      return product.filter(item => item.category === category);
    }
  };

  const handleButtonClick = category => {
    // Update the selected button state
    setSelectedButton(category);
    // Filter products based on the chosen category
    const filteredList = product.filter(item => item.category === category);
    // Sort the filtered list
    const sortedList = filteredList
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    // Store the sorted list in state
    setProducts(filteredList);
  };
  const sortProducts = products => {
    // Sort the products by name
    const sortedList = products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    return sortedList;
  };

  const handleAdicionarPress = (name, preco) => {
    const existiItemIdex = pedidos.findIndex(item => item.name === name);

    if (existiItemIdex !== -1) {
      const updatePedidos = [...pedidos];
      updatePedidos[existiItemIdex].quantidade += 1;
      updatePedidos[existiItemIdex].precoItem += Number(preco);
      setPedidos(updatePedidos);
    } else {
      const novoPedido = {
        name,
        preco: Number(preco),
        quantidade: 1,
        precoItem: Number(preco),
      };
      setPedidos([...pedidos, novoPedido]);
    }
    console.log(`Adicionar ${name} ao carrinho`);
    console.log(Number(preco));
    //flatListRef.current.scrollToIndex({index: pedidos.length - 1 , animated: true})
    setMostrarPedidos(true);
  };

  const handleRemoverItem = index => {
    const novosPedidos = [...pedidos];
    novosPedidos.splice(index, 1);
    setPedidos(novosPedidos);

    if (novosPedidos.length === 0) {
      setMostrarPedidos(false);
    }
  };

  const handleLimparPedidos = () => {
    setPedidos([]);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.buttonsContainer}>
          {[
            'Todos',
            'Entradas',
            'Pratos Principais',
            'Drinks e Bebidas',
            'Sobremesas',
          ].map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.button,
                selectedButton === category && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick(category)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === category && styles.selectedButtonText,
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <FlatList
        data={sortProducts(product)}
        renderItem={Item}
        keyExtractor={item => item.id}
        style={styles.flatList}
        height={500}
      />

      {mostrarPedidos && (
            <MeusPedidos
              pedidos={pedidos}
              onRemoverItem={handleRemoverItem}
              onClose={() => {
                setMostrarPedidos(false);
                handleLimparPedidos();
              }}
            />

      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  adicionarButton: {
    backgroundColor: 'black',
    padding: 4,
    marginTop: 3,
    borderRadius: 5,
    alignItems: 'center',
    width: 60,
  },
  adicionarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  flatList: {
    marginTop: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    height: 40,
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
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pratoItemPreco: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  pratoItemDescricao: {
    color: 'black',
    fontSize: 14,
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
export default ProductScreen;
