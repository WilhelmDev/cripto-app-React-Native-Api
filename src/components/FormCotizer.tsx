import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { CoinsValues } from '../../interfaces';
import axios from 'axios';

export default function FormCotizer() {
    const [coin, setCoin] = useState<CoinsValues>('')
    const [cryptoCoin, setCryptoCoin] = useState('')
    const [cryptoAssets, setCryptoAssets] = useState([])

    useEffect(() => {
        const apiRequest = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const {data} = await axios(url)
            setCryptoAssets(data.Data)
        }
        apiRequest()
    },[])

    const handleCoin = (item:CoinsValues) => {
        console.log(item)
        setCoin(item)
    }
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
                <Picker selectedValue={coin}
                onValueChange={(itemValue) => handleCoin(itemValue)}>
                    <Picker.Item label='Seleccione' value=''/>
                    <Picker.Item label='Dolar Estados Unidos' value='USD'/>
                    <Picker.Item label='Real Brasilero' value='BRL'/>
                    <Picker.Item label='Euro' value='EUR'/>
                    <Picker.Item label='Peso Mexicano' value='MXN'/>
                </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        textTransform:'uppercase',
        fontSize:22,
        marginVertical:20
    }
})