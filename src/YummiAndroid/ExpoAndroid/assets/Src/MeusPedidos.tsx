import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MeusPedidos = ({ pedidos, onRemoverItem, onClose }) => {

    const calcularTotalPedidos = () => {
        return pedidos.reduce((total, pedido) => total + pedido.precoItem, 0)
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.titulo}>Meus Pedidos:</Text>
            {pedidos.map((pedido, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Text>{pedido.quantidade}x {pedido.name}</Text>
                    <Text>{pedido.precoItem.toFixed(2)}</Text>
                    <TouchableOpacity 
                    onPress={() => onRemoverItem(index)}>
                        <Text style={styles.removerButton}>Remover</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <Text style={styles.textTotal}>Total: {calcularTotalPedidos().toFixed(2)}</Text>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttonsText}>Fazer Pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                onPress={onClose}>
                    <Text style={styles.buttonsText}>Finalizar Pedido</Text>
                </TouchableOpacity>
             </View>
        </View>
    )
}

export default MeusPedidos;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#f0f0f0',
        margin: 5,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,

    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
    },
    removerButton: {
        color: 'white',
        backgroundColor: 'black',
        padding: 3,
        borderRadius: 5,
        fontSize: 10,
    },
    buttons : {
        backgroundColor: 'black',
        borderRadius: 5,
    },
    textTotal: {
        fontWeight: 'bold'
    },
    buttonsText: {
        fontSize: 11,
        color: 'white',
        padding: 5,
    },
})