/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);


  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
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
      <Text>Lista de Produtos:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
            {/* Exiba outras informações do produto aqui */}
          </View>
        )}
      />

    </View>
  );
};

export default ProductScreen;
