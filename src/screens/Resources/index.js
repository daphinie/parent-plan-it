import { Dimensions, View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Resources = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Resources </Text>
    </View>
  )
}

export default Resources

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
      padding: 20,
  },

  header: {
    fontFamily: 'AlongSansExtraBold',
    color: 'white',
    fontSize: 30,
  }
})