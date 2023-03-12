import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Providers from './src/navigation';

export default function App() {
  return (
    <Providers/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d7e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
