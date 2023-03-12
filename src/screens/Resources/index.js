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
const imageSource = require('../../../assets/Aerrow.png');
//'./assets/logo.png'
const Resources = () => {

  return (

    <View style={styles.container}>
      <ScrollView contentOffset={{y: containerHeight}}>
      <Text style={[styles.header, {marginTop:2}]}> Your Financial Resources </Text>


    {/* ------------------------------------------------------------- */}

    {/* FINANCIAL AID */}
    <View style={[styles.resourceContainer,{marginTop: 15}]}>
      <Text style={styles.resourceCategoryTitle}> Government Financial Aid</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.linkMasterContainer, {marginTop:2}]}>
        {/* Government FINANCIAL AID: IMAGE 1: BC Student Loan Program */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Student Loan Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>
      
        {/* Government FINANCIAL AID: IMAGE 2: _______________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Temporary Rental Supplement </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Government FINANCIAL AID: IMAGE 3: _______________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Climate Action Tax Credit </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Government FINANCIAL AID: IMAGE 4: _______________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Housing Rental Assistance Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

      </View>
      </ScrollView>

    </View>

    {/* ------------------------------------------------------------- */}

    <View style={[styles.resourceContainer, { marginTop: 15}]}>
      <Text style={styles.resourceCategoryTitle}> Academic Financial Aid</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.linkMasterContainer, {marginTop:2}]}>
        {/* cademic Financial Aid: IMAGE 1: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> Irving K. Barber British Columbia Scholarship Society </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* cademic Financial Aid: IMAGE 2: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BC Excellence Scholarship </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* cademic Financial Aid: IMAGE 3: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> Coast Capital Savings Education Awards </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* cademic Financial Aid: IMAGE 4: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> $3,500 BC Hydro Sscholarship Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </View>

    {/* ------------------------------------------------------------- */}
    
    <View style={[styles.resourceContainer, { marginTop: 15}]}>
      <Text style={styles.resourceCategoryTitle}> Financial Instituition Aid</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.linkMasterContainer, {marginTop:2}]}>
        {/* Financial Instituition Aid: IMAGE 1: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> TD Student Relief Fund </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Financial Instituition Aid: IMAGE 2: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> BMO Student Relief Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Financial Instituition Aid: IMAGE 3: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> CIBC Education Line of Credit </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Financial Instituition Aid: IMAGE 4: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> Vancity Bright Future Program </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </View>

    {/* ------------------------------------------------------------- */}

    <View style={[styles.resourceContainer, { marginTop: 15, marginBottom: 200, height: containerHeight}]}>
      <Text style={styles.resourceCategoryTitle}> Other</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.linkMasterContainer, {marginTop:2}]}>
        {/* Other: IMAGE 1: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> ____________ </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Other: IMAGE 2: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> ____________ </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Other: IMAGE 3: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> ____________ </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

        {/* Other: IMAGE 4: ____________ */}
        <TouchableOpacity onPress={handlePress}>
        <View style={[styles.linkSingleContainer, {marginTop:2}]}>
          <Text style={styles.linkSingleTitle}> ____________ </Text>
          <Image source={imageSource} style={styles.image} />
        </View>
        </TouchableOpacity>

      </View>
      </ScrollView>
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
    //fontFamily: 'PTSans',
    color: '#49416D',
    fontSize: 33,
    paddingHorizontal: 12,
    fontWeight: 'bold'
  },

  resourceContainer: {
    backgroundColor: 'white',
    height: containerHeight,
    width: SCREENWIDTH,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 0,
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
    marginLeft: 40,
    fontSize: 24,
    backgroundColor: 'white',
    fontWeight: 'bold'
  },

  resourceContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  linkMasterContainer: {
    backgroundColor: 'white',
    height: 178,
    width: SCREENWIDTH*1.5,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },

  linkSingleContainer: {
    backgroundColor: '#D1D7E2',
    height: 160,
    width: SCREENWIDTH/3,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginLeft: 11
  },

  linkSingleTitle: {
    color: '#49416D',
    fontSize: 20,
    textAlign: 'left'
  },

  image: {
    width: 27,
    height: 27,
    position: 'absolute',
    bottom: 10,
    right: 8,
  },


})