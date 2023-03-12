import { 
  Dimensions, 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import React from 'react';

import { ScrollView } from 'react-native';


const mainColor = 'white';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const containerHeight = 225;

const Resources = () => {

  return (

    <View style={styles.container}>
      <ScrollView contentOffset={{y: containerHeight}}>
      <Text style={styles.header}> Resources </Text>

    
    <View style={[styles.resourceContainer,{marginTop: 20}]}>
      {/* <Image style={styles.resourceImage}></Image> */}
      <Text style={styles.resourceCategoryTitle}> Financial Aid</Text>
    </View>

    <View style={[styles.resourceContainer, { marginTop: 20}]}>
      <Text style={styles.resourceCategoryTitle}> Academic Financial Aid</Text>
    </View>
    
    <View style={[styles.resourceContainer, { marginTop: 20}]}>
      <Text style={styles.resourceCategoryTitle}> Financial Instituition Aid</Text>
    </View>

    <View style={[styles.resourceContainer, { marginTop: 20, marginBottom: 200, height: containerHeight}]}>
      <Text style={styles.resourceCategoryTitle}> Other</Text>
    </View>

    </ScrollView>
    </View>
  )
}

export default Resources

const styles = StyleSheet.create({
  resource: {
    flexDirection: "row",
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
    paddingVertical: 1,
  },

  container: {
      backgroundColor: 'white',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
  },

    header: {
    fontFamily: 'PTSans',
    color: '#49416D',
    fontSize: 30,
    paddingHorizontal: 12,
  },

  resourceContainer: {
    backgroundColor: '#D1D7E2',
    height: 225,
    width: SCREENWIDTH,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },

  resourceImage: {
    width: 10,
    height:17,
    resizeMode: "Contain",
    margineLeft: 15,
  },

  resourceCategoryTitle: {
    color: '#49416D',
    padddingVertical: 2,
    marginTop: 1,
    fontSize: 20,
    backgroundColor: '#D1D7E2',
  },

  resourceContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


})