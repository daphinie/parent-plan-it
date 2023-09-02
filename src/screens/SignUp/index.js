import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { auth, db } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const containerHeight = 225;

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      userCred = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error("Error creating user: ", e);
    }

    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city,
        country: country,
        email: email,
        password: password
      });
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  };

  const [loaded] = useFonts({
    PTSans: require('../../../assets/fonts/PTSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentOffset={{y: containerHeight}}>
      <View style={styles.header}>
      <Image source={require('../../../assets/Avatar.png')} style = {styles.icon}/>
      </View>

      <Text style={[styles.labelinput, styles.textColor]}>First Name:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={[styles.labelinput, styles.textColor]}>Last Name:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={[styles.labelinput, styles.textColor]}>Age:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      <Text style={[styles.labelinput, styles.textColor]}>City:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={city}
        onChangeText={setCity}
      />

      <Text style={[styles.labelinput, styles.textColor]}>Country:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={country}
        onChangeText={setCountry}
      />

      <Text style={[styles.labelinput, styles.textColor]}>Email:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={[styles.labelinput, styles.textColor]}>Password:</Text>
      <TextInput
        style={[styles.label, styles.textColor]}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Submit"
        onPress={handleSubmit}
        color="#49416D"
        style={styles.button}
      />
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#49416D',
    fontSize: 33,
    fontWeight: 'bold',
    paddingVertical: 20,
    borderRadius: 15,
    marginRight: 20, 
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 375,
    height: 50,
    borderRadius : 20,
    borderColor: '#49416D',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    marginLeft : 10,
    marginBottom : 10,
    paddingHorizontal: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  labelinput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 375,
    height: 30,
    borderRadius : 20,
    backgroundColor: '#F5F5F5',
    marginBottom: 0,
    marginTop: 10,
    marginLeft : 0,
    paddingHorizontal: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 20,
    marginLeft: 15,
    marginTop: 20,
  },
  header: {
    color: '#49416D',
    fontSize: 33,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 250,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 375,
    height: 30,
    borderRadius : 20,
    marginBottom: 30,
    marginTop: 30,
    marginLeft : 0,
    paddingHorizontal: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  textColor: {
    color: '#49416D',
  },
});
