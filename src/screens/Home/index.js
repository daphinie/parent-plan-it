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

      <View>
        <Text style={styles.header}>Goals</Text>

        <View style={styles.addGoalContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.header}>Current</Text>
      </View>

      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fffffa',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
      padding: 20
  },

  addGoalContainer: {
    padding: 40,
    display: 'flex'
  },

  card: {
    backgroundColor: '#D1D7E2',
    padding: 40,
    borderRadius: 20
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
    borderRadius: 15,
    backgroundColor: '#49416D',
    width: 90,
    height: 90,
    alignSelf: 'flex-end'
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 40
  }
})