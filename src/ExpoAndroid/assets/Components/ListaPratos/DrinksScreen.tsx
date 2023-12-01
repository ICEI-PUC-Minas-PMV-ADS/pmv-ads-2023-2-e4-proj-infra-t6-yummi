import { Text, View, StyleSheet } from 'react-native';



export default function DrinksScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Esta tela irá conter todos as bebidas do menu.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    texto: {
       textAlign: "center"
        
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
})