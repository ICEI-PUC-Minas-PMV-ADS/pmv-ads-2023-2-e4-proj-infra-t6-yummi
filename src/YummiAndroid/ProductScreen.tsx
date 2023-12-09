/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import axios from 'axios';

function ProductScreen() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/api/Product')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        console.log(response.status);
        // console.log(response.headers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
// eslint-disable-next-line react/no-unstable-nested-components
const Item = ({item}) => (

    <View style={styles.container}>
        <Image source={''}
        style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.title}>{item.name ?? 'Indisponível'}</Text>
            <Text numberOfLines={5} style={styles.description}>{item.description ?? 'Indisponível'}</Text>
            <Text style={styles.preco}>R$ {item.price.toFixed(2) ?? 'Indisponível'}</Text>
        </View>
    </View>
);
  return (
    <View>
      <FlatList
        data={product}
        renderItem={Item}
        keyExtractor={item=>item.id}
      />


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

    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#6F4E37',
      marginBottom: 4,
    },

    description: {
      fontSize: 14,
      marginBottom: 4,
      color: '#000',
    },

    preco: {
      fontSize: 15,
      fontWeight: 'bold',
    },

    image: {
        width: 100,
        height: 80,
    },
  });
export default ProductScreen;
