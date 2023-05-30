import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useValidation } from 'react-native-form-validator';

const Loginaccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPAssword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { name, email, address, phone, password, confirmPassword },
    });

    
    
  const saveEmailPassNamePhoneAddress = async () => {

    validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      phone: { phone: true },
      address: {address: true},
      confirmPassword: { equalPassword: password },
    });  
    
      auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid
          const data = {
            id: uid,
            email,
            name,
            address,
            phone,
          };
          const usersRef = firestore().collection('users')
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              navigation.navigate('Home', { user: data })
            })
            .catch((error) => {
              alert(error)
            });
        })
        .catch((error) => {
          alert(error)
        });

  };

  return (
    <View style={StyleSheet.container}>
      <View>
        <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
      </View>
      <View style={styles.backgroundColor}>
        <ScrollView>
          <View style={styles.Loginpage}>
            <View>
              <Image source={require('../src/asset/image/c.png')} />
            </View>
            <View>
              <Text style={styles.loginwellcome}>Welcome to Clean Car</Text>
            </View>
          </View>

          <Text style={styles.Loginaccount}>Sign in to your account</Text>
          <SafeAreaView style={styles.yourname}>
            <Text style={styles.textyourname}>your name</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/usernameicon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.textyourname}>Phone</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/phoneicon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="numeric"
              value={phone}
              onChangeText={setPhone}
            />
            <Text style={styles.textyourname}>Address</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/addressicon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <Text style={styles.textyourname}>Mail</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/mailicon.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.textyourname}>Password</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/password.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={txt => setPAssword(txt)}
            />
            <Text style={styles.textyourname}>Confirm Password</Text>
            <Image
              style={styles.usernameimage}
              source={require('../src/asset/image/password.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={txt => setConfirmPassword(txt)}
            />
            {isFieldInError('confirmPassword') &&
        getErrorsInField('confirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
          </SafeAreaView>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonbutton}>
              <Button
                onPress={() => {
                  saveEmailPassNamePhoneAddress();
                }}
                title="Sign in"
                color="#7DCEF0"
              />
            </View>
            <View style={styles.buttonbutton}>
              <Button
                onPress={() => Linking.openURL('http://google.com')}
                title="Sign in with Google"
                color="#39AFFF"
              />
            </View>

            <Text style={styles.logincreate}>create a Clean Car account</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// style.css

const styles = StyleSheet.create({
  backgroundColor: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  Loginpage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 15,
    margin: 20,
  },
  loginwellcome: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 25,
    color: '#000000',
  },
  Loginaccount: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
  },
  yourname: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 15,
  },
  input: {
    height: 35,
    borderBottomWidth: 1,
  },
  textyourname: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    marginTop: 17,
  },
  buttonContainer: {
    margin: 30,
  },
  buttonbutton: {
    marginTop: 8,
  },
  logincreate: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center',
    paddingTop: 5,
  },
  usernameimage: {
    display: 'flex',
    alignSelf: 'flex-end',
    position: 'relative',
    top: 22,
    right: 5,
  },
});

export default Loginaccount;
