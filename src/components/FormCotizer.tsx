import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { ApiData, AssetsState, CoinsValues } from '../../interfaces';
import axios from 'axios';

export default function FormCotizer() {
    const [coin, setCoin] = useState<CoinsValues>('')
    const [cryptoCoin, setCryptoCoin] = useState('')
    const [cryptoAssets, setCryptoAssets] = useState<AssetsState>([])

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
    const handleCryptoCoin = (value:string) => {
        setCryptoCoin(value)
        console.log(value)
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
                <Picker
                selectedValue={cryptoCoin}
                onValueChange={(itemValue) => handleCryptoCoin(itemValue)}>
                    <Picker.Item label='Seleccione' value=''/>
                    {cryptoAssets.map( coinItem => (
                        <Picker.Item key={coinItem.CoinInfo.Id} label={coinItem.CoinInfo.FullName} value={coinItem.CoinInfo.Name}/>
                    ))}

                </Picker>
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