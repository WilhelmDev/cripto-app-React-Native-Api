import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function Header() {

    return (
        <>
            <Text style={styles.header}>Criptomonedas</Text>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        fontFamily: 'Lato-Black',
        fontSize:20,
        backgroundColor:'#5e49e2',
        paddingTop: StatusBar.currentHeight,
        paddingBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        color:'#fff',
        marginBottom:30
    }
})