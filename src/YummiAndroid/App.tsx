/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';


 const ProductScreen = () => {
   const [products, setProducts] = useState([]);
   const fetchProducts = () => {
     axios.get('http://192.167.0.100:5000/api/products')
       .then((response) => {
         setProducts(response.data);
         console.log(response.data);
         console.log(response.headers);
         console.log(response.status);
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
       <Text>Pratos</Text>
       <FlatList
         data={products}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (
           <View>
             <Text>Nome: {item.name}</Text>
             <Text>Descrição: {item.Description}</Text>
             <Text>Preço: R$ {item.Price.toFixed(2)}</Text>
             {/* Exiba outras informações do produto aqui */}
           </View>
         )}
       />

     </View>
   );
 };

export default ProductScreen;
