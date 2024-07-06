import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Game from './src/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.bg}
      >
        <Game />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
  },
});
