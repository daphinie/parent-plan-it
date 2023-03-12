import { Dimensions, View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import ProgressBar from 'react-native-progress/Bar';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Home = () => {
  const [loaded] = useFonts({
    PTSans: require('../../../assets/fonts/PTSans-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Text style={styles.header}>Add Your{'\n'}Goal</Text>

        <View style={styles.addGoalContainer}>
          <Image source={require('../../../assets/Money_stream.png')}/>
          <Pressable style={styles.button}>
            <Image source={require('../../../assets/icon_add_.png')}/>
          </Pressable>
        </View>
      </View>
      
      <View style={styles.card}>
        <View>

          <View style={styles.cardPicTitle}>
            <View style={styles.profilePic}>
              <Image source={require('../../../assets/Rectangle_8.png')} width={10} height={10}/>
            </View>
            
            <Text style={styles.goalHeader}>John's Education</Text> 
          </View>
          
          
          <ProgressBar style={styles.bar} width={270} height={30} borderWidth={0} color={'#49416D'} unfilledColor={'#FFFFFF'} progress={0.37}>
            <Text style={styles.barStartText}>$45</Text><Text style={styles.barEndText}>$120</Text>
          </ProgressBar>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingTop: 10}]}>
            <Text style={[{color: '#49416D'}]}>Your Purpose</Text>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[{color: '#49416D'}, {paddingRight: 10}]}>Resources</Text>
              <Image style={[{width: 17}, {height: 17}]} source={require('../../../assets/Aerrow.png')}/>
            </View>
          </View>

          <Image source={require('../../../assets/Line_1.png')} style={[{marginTop: 10}, {marginLeft: 10}]}/>
          <Text style={[{alignSelf: 'center'}, {paddingTop: 10}, {fontWeight: 'bold'}, {color: '#49416D'}]}>Keep at it!</Text>
        </View>
        
      </View>

      <View style={styles.card}>
        <View>

          <View style={styles.cardPicTitle}>
            <View style={styles.profilePic}>
              <Image source={require('../../../assets/Rectangle_8.png')} width={10} height={10}/>
            </View>
            
            <Text style={styles.goalHeader}>Carol's Education</Text> 
          </View>
          
          
          <ProgressBar style={styles.bar} width={270} height={30} borderWidth={0} color={'#49416D'} unfilledColor={'#FFFFFF'} progress={0.37}>
            <Text style={styles.barStartText}>$45</Text><Text style={styles.barEndText}>$120</Text>
          </ProgressBar>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingTop: 10}]}>
            <Text style={[{color: '#49416D'}]}>Your Purpose</Text>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[{color: '#49416D'}, {paddingRight: 10}]}>Resources</Text>
              <Image style={[{width: 17}, {height: 17}]} source={require('../../../assets/Aerrow.png')}/>
            </View>
          </View>

          <Image source={require('../../../assets/Line_1.png')} style={[{marginTop: 10}, {marginLeft: 10}]}/>
          <Text style={[{alignSelf: 'center'}, {paddingTop: 10}, {fontWeight: 'bold'}, {color: '#49416D'}]}>Do it for Carol!</Text>
        </View>
        
      </View>

      <View style={styles.card}>
        <View>

          <View style={styles.cardPicTitle}>
            <View style={styles.profilePic}>
              <Image source={require('../../../assets/Rectangle_8.png')} width={10} height={10}/>
            </View>
            
            <Text style={styles.goalHeader}>Car Payment</Text> 
          </View>
          
          
          <ProgressBar style={styles.bar} width={270} height={30} borderWidth={0} color={'#49416D'} unfilledColor={'#FFFFFF'} progress={0.25}>
            <Text style={styles.barStartText}>$20</Text><Text style={styles.barEndText}>$80</Text>
          </ProgressBar>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingTop: 10}]}>
            <Text style={[{color: '#49416D'}]}>Your Purpose</Text>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[{color: '#49416D'}, {paddingRight: 10}]}>Resources</Text>
              <Image style={[{width: 17}, {height: 17}]} source={require('../../../assets/Aerrow.png')}/>
            </View>
          </View>

          <Image source={require('../../../assets/Line_1.png')} style={[{marginTop: 10}, {marginLeft: 10}]}/>
          <Text style={[{alignSelf: 'center'}, {paddingTop: 10}, {fontWeight: 'bold'}, {color: '#49416D'}]}>Vroom vroom!</Text>
        </View>
        
      </View>

      <View style={styles.card}>
        <View>

          <View style={styles.cardPicTitle}>
            <View style={styles.profilePic}>
              <Image source={require('../../../assets/Rectangle_8.png')} width={10} height={10}/>
            </View>
            
            <Text style={styles.goalHeader}>Retirement</Text> 
          </View>
          
          
          <ProgressBar style={styles.bar} width={270} height={30} borderWidth={0} color={'#49416D'} unfilledColor={'#FFFFFF'} progress={0.22}>
            <Text style={styles.barStartText}>$45</Text><Text style={styles.barEndText}>$120</Text>
          </ProgressBar>

          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingTop: 10}]}>
            <Text style={[{color: '#49416D'}]}>Your Purpose</Text>
            <View style={[{flexDirection: 'row'}]}>
              <Text style={[{color: '#49416D'}, {paddingRight: 10}]}>Resources</Text>
              <Image style={[{width: 17}, {height: 17}]} source={require('../../../assets/Aerrow.png')}/>
            </View>
          </View>

          <Image source={require('../../../assets/Line_1.png')} style={[{marginTop: 10}, {marginLeft: 10}]}/>
          <Text style={[{alignSelf: 'center'}, {paddingTop: 10}, {fontWeight: 'bold'}, {color: '#49416D'}]}>Keep going with your goals!</Text>
        </View>
        
      </View>

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  bar: {
    borderRadius: 20
  },

  barStartText: {
    position:'absolute', 
    alignSelf: 'flex-start', 
    color: '#FFFFFF',
    paddingTop: 6,
    paddingLeft: 10,
    fontWeight: 'bold'
  },

  barEndText: {
    position:'absolute', 
    alignSelf: 'flex-end',
    color: '#49416D',
    paddingTop: 6,
    paddingRight: 10,
    fontWeight: 'bold'
  },

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
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  card: {
    backgroundColor: '#D1D7E2',
    padding: 40,
    borderRadius: 20,
    marginBottom: 20
  },

  header: {
    color: '#49416D',
    fontSize: 33,
    paddingHorizontal: 12,
    fontWeight: 'bold'
  },

  goalHeader: {
    color: '#49416D',
    fontSize: 24,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    paddingBottom: 30
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: '#99AEDD',
    width: 70,
    height: 70,
    alignSelf: 'flex-end'
  }
})