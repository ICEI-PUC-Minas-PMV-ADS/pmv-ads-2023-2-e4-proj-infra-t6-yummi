import { Text, View, StyleSheet } from 'react-native';



export default function EntradasScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Esta tela irá conter todas as entradas do menu.</Text>
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