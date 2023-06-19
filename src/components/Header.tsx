import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
import {} from 'expo'

export default function Header() {

    const [fontsLoaded] = useFonts({
        'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    });
    if (!fontsLoaded) {//TODO Colocarlo en el app
        return <Text>Loading</Text>
    }

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