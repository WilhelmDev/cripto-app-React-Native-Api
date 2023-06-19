import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as Bar,} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
