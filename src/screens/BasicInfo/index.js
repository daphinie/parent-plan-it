import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useFonts } from 'expo-font';

export default function InfoPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    console.log(`Email: ${email}`);
  };

  const [loaded] = useFonts({
    PTSans: require('../../../assets/fonts/PTSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About you</Text>

      <Text style={[styles.label, styles.textColor]}>First Name:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={[styles.label, styles.textColor]}>Last Name:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={[styles.label, styles.textColor]}>Age:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      <Text style={[styles.label, styles.textColor]}>City:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={city}
        onChangeText={setCity}
      />

      <Text style={[styles.label, styles.textColor]}>Country:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={country}
        onChangeText={setCountry}
      />

      <Text style={[styles.label, styles.textColor]}>Email:</Text>
      <TextInput
        style={[styles.input, styles.textColor]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
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
    fontSize: 40,
    fontFamily: 'PTSans',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#49416D',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    fontFamily: 'PTSans',
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
  textColor: {
    fontFamily: 'PTSans',
    color: '#49416D',
  },
});
