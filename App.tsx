import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { QuoteHandler, ReqDataState, ResponseData } from './interfaces';
import axios from 'axios';
import Header from './src/components/Header';
import FormCotizer from './src/components/FormCotizer';
import Quotation from './src/components/Quotation';

export default function App() {

    const [reqApi, setReqApi] = useState(false)
    const [reqData, setReqdata] = useState<ReqDataState>({})
    const [response, setResponse] = useState<ResponseData>({})
    const [loading, setLoading] = useState(false)

    useEffect(() => { //* req api for quotation
        const quotePrice = async() => {
            if(reqApi) {
                setLoading(true)
                setResponse({})
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${reqData.crypto}&tsyms=${reqData.coin}`
                const { data } = await axios(url)

                setTimeout(() => {
                    setResponse(data.DISPLAY[reqData.crypto!][reqData.coin!])
                    setReqApi(false)
                    setLoading(false)
                }, 3000);

                return
            }
            return
        }
        quotePrice()
    },[reqApi])

    const handleQuotation:QuoteHandler = (coin, crypto) => {
        setReqApi(true)
        setReqdata({coin, crypto})
    }

    const [fontsLoaded] = useFonts({
        'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    });

    if (!fontsLoaded) {//* Waiting for fonts 
        return <ActivityIndicator size={'large'} color={'#5e49e2'} style={{marginTop:40}} />
    }

    return (
    <ScrollView style={styles.container}>
        <StatusBar style='auto'/>
        
        <Header />

        <Image style={styles.img}
        source={require('./assets/img/cryptomonedas.png')} />

        <View style={styles.content}>
            <FormCotizer handleQuotation={handleQuotation}/>

        </View>

        {loading 
        ? <ActivityIndicator size={'large'} color={'#5e49e2'} style={{marginTop:40}}/>
        : <Quotation response={response}/>}

    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    img:{
    width:'100%',
    height:150,
    marginHorizontal:0
    },
    content:{
    marginHorizontal:20
    }
});
