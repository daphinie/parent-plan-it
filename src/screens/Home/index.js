import { Dimensions, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import ProgressBar from 'react-native-progress/Bar';

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
        <Text style={styles.header}>Add Your Goals</Text>

        <View style={styles.addGoalContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.card}>
        <View>
          <View style={styles.cardPicTitle}>
            <View style={styles.profilePic}>
              <Image source={require('../../../assets/favicon.png')} width={10} height={10}/>
            </View>
            
            <Text style={styles.goalHeader}>John's Education</Text> 
          </View>
          
          
          <ProgressBar style={styles.bar} width={270} height={20} borderColor={'#FFFFFF'} color={'#49416D'} unfilledColor={'#FFFFFF'} progress={0.3}/>
        </View>
        
      </View>

      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  cardPicTitle: {
    display: 'flex',
    flexDirection: 'row'
  },

  profilePic: {
    paddingRight: 20
  },

  container: {
      backgroundColor: '#FFFFFF',
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
    fontSize: 30
  },

  goalHeader: {
    fontFamily: 'PTSans',
    color: '#49416D',
    fontSize: 25,
    paddingBottom: 30
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