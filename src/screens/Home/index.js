import { Dimensions, View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Home = () => {
  const [loaded] = useFonts({
    PTSans: require('../../../assets/fonts/PTSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Goals</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Text style={styles.header}>Current</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fffffa',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
      padding: 20,
  },

  header: {
    fontFamily: 'PTSans',
    color: '#49416D',
    fontSize: 30,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#99AEDD'
  },

  buttonText: {
    color: '#49416D'
  }
})