import { View, Text, StyleSheet } from 'react-native'
import { QuotationProps } from '../../interfaces'

export default function Quotation({response}:QuotationProps) {

    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR } = response

    if (Object.keys(response).length === 0) return null

    return (
        <View style={styles.response}>

            <Text style={[styles.text,styles.price]}>
                <Text style={styles.span}>{PRICE}</Text>
            </Text>

            <Text style={styles.text}>Precio mas alto del dia: 
                <Text style={styles.span}> {HIGHDAY}</Text>
            </Text>

            <Text style={styles.text}>Precio mas bajo del dia:
                <Text style={styles.span}> {LOWDAY}</Text>
            </Text>

            <Text style={styles.text}>Variacion en ultimas 24H: 
                <Text style={styles.span}> {CHANGEPCT24HOUR}%</Text>
            </Text>

            <Text style={styles.text}>Ultima actualizacion: 
                <Text style={styles.span}> {LASTUPDATE}</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    response:{
        backgroundColor:'#5e49e2',
        paddingVertical:20,
        paddingHorizontal:30,
        marginTop:20,
        flex:1
    },
    text:{
        color:'white',
        fontFamily: 'Lato-Regular',
        fontSize:18,
        marginBottom:10
    },
    price:{
        fontSize:38,
    },
    span:{
        fontFamily: 'Lato-Black',
    },
})