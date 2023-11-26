import { Text, View, StyleSheet } from 'react-native';



export default function SobremesaScreen() {
    return(
        <View>
            <Text style={styles.texto}>Esta tela irá conter todos as sobremesas do menu.</Text>
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