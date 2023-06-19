import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import Header from './src/components/Header';
import FormCotizer from './src/components/FormCotizer';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {//* Waiting for fonts 
      return <Text>Loading</Text>
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      
      <Header />

      <Image style={styles.img}
      source={require('./assets/img/cryptomonedas.png')} />

      <View style={styles.content}>
        <FormCotizer />
      </View>

    </View>
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
