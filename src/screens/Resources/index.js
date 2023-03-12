import { 
  Dimensions, 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import React from 'react';

import { ScrollView } from 'react-native';

// import pdt from './assets/logo.png';


const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const containerHeight = 225;

// Resource: Financial Aid: Image 1: BC Student Loan Program
const handlePress = () => {
  Linking.openURL('https://studentaidbc.ca/sabc-home-page'); // Replace with your own link URL
};
const imageSource = require('../../../assets/logo.png');
//'./assets/logo.png'
const Resources = () => {

  return (

    <View style={styles.container}>
      <ScrollView contentOffset={{y: containerHeight}}>
      <Text style={styles.header}> Resources </Text>

    {/* FINANCIAL AID */}
    <View style={[styles.resourceContainer,{marginTop: 20}]}>
      <Text style={styles.resourceCategoryTitle}> Financial Aid</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.linkMasterContainer, {marginTop:2}]}>
        {/* FINANCIAL AID: IMAGE 1: BC Student Loan Program */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Student Loan Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    height: containerHeight,
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
    marginTop: 1,
    fontSize: 20,
    backgroundColor: '#D1D7E2',
  },

  resourceContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  linkMasterContainer: {
    backgroundColor: 'white',
    height: 173,
    width: SCREENWIDTH*1.5,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },

  linkSingleContainer: {
    backgroundColor: '#D1D7E2',
    height: 147,
    width: SCREENWIDTH/3,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginLeft: 4
  },

  linkSingleTitle: {
    color: '#49416D',
    fontSize: 20,
    textAlign: 'left'
  },

  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 2,
    right: 2,
  },


})