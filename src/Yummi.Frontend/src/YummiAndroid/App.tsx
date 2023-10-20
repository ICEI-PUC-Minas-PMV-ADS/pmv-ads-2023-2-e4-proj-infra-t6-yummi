/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  

  const fetchProducts = () => {
    axios.get('https://localhost:5000')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View>
      <Text>Cardápio</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
            {/* Exiba outras informações do produto aqui */}
          </View>
        )}
      />

      
    </View>
  );
};

export default ProductScreen;
