import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { ApiData, AssetsState, CoinsValues, FormProps } from '../../interfaces';
import axios from 'axios';

export default function FormCotizer({handleQuotation}:FormProps) {
    const [coin, setCoin] = useState<CoinsValues>('')
    const [cryptoCoin, setCryptoCoin] = useState('')
    const [cryptoAssets, setCryptoAssets] = useState<AssetsState>([])

    useEffect(() => { //? Req to Api for assets
        const apiRequest = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const {data} = await axios(url)
            setCryptoAssets(data.Data)
        }
        apiRequest()
    },[])

    const handleCoin = (item:CoinsValues) => {
        setCoin(item)
    }

    const handleCryptoCoin = (value:string) => {
        setCryptoCoin(value)
    }

    const quotePrice = () => {
        
        if ([coin, cryptoCoin].includes('')) { //validation
            Alert.alert(
                'Error',
                'Ambos campos son obligatorios'
            )
            return
        }

        //? Send Data to app
        handleQuotation(coin,cryptoCoin)
        return
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

            <TouchableHighlight style={styles.btnCot}
            onPress={() => quotePrice()}>
                <Text style={styles.btnTextCot}
                >Cotizar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        textTransform:'uppercase',
        fontSize:22,
        marginVertical:20
    },
    btnCot:{
        backgroundColor:'#5e49e2',
        paddingHorizontal:10,
        paddingVertical:12,
        marginTop:20,
        borderRadius:10
    },
    btnTextCot:{
        color:'white',
        fontSize:18,
        fontFamily:'Lato-Black',
        textTransform:'uppercase',
        textAlign:'center',
    }
})