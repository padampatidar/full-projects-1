import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';


const Parent = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setChechValidEmail] = useState(false);
  const [show, setShow] = useState(false);
  // const [agree, setAgree] = useState(false);

  const login = async () => {
    setShow(true);

    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in: ', user);
      setShow(false)
      navigation.navigate('Home')
      // Handle successful sign-in
    } catch (error) {
      console.error('Error signing in: ', error);
      // Handle sign-in error
      setShow(false)
    }

    // if (email == "padam@gmail.com" && password == "patidar") {
    //   Alert.alert(`Thank you $ {email}`);
    // }
    // else {
    //   Alert.alert(`email and password is not correct`);
    // }

    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      Alert('Success Login');
    } else {
      Alert(checkPassword);
    }
  };



  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text)
    if (re.test(text) || regex.test(text)) {
      setChechValidEmail(false);
    } else {
      setChechValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    return null;
  };



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  return (

    <View style={StyleSheet.container}>
      <View>
        <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
      </View>
      <View style={styles.backgroundColor}>
        <ScrollView>
          <View style={styles.Loginpage}>
            <View>
              <Text style={styles.loginwellcome}>Welcome to Clean Car</Text>
            </View>
          </View>

          <Text style={styles.Loginaccount}>Log in to your account</Text>
          <SafeAreaView style={styles.yourname}>
            <Text style={styles.textyourname}>Mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) =>
                handleCheckEmail(text)
              }
              autoCapitalize='none'
            />
            {checkValidEmail ? (
              <Text style={styles.textfailed}></Text>
            ) : (
              <Text style={styles.textfailed}>wrong format email</Text>
            )}


            <Text style={styles.textyourname}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={(text) =>
                setPassword(text)
              }
            />
            <View style={styles.wrappericon}>
            <TouchableOpacity
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={
                  seePassword
                    ? require('../asset/image/password.png')
                    : require('../asset/image/eye.png')
                }
                style={styles.usernameimage}
              />
            </TouchableOpacity>
            </View>

            {/* <View style={styles.buttoncheckbox}>
              <CheckBox
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "#4630EB" : undefined}
              />
              <Text>T have read and agreed with the TC</Text>
            </View> */}

            {email == '' || password == '' || checkValidEmail == true ? (
              <TouchableOpacity
                disabled
                style={styles.buttondisble}
                onPress={login} >
                <Text style={styles.buttonppp}>Log in</Text>
              </TouchableOpacity>
            )
              : (
                <TouchableOpacity style={styles.inputinput} onPress={() => { login(); }} disabled={show}>
                  <ActivityIndicator style={styles.looder} color="white" animating={show}></ActivityIndicator>
                  <Text style={styles.buttonppp}>Log in</Text>
                </TouchableOpacity>
              )}


            <View style={styles.buttonbbb}>
              <Text
                onPress={() => navigation.navigate('Loginaccount')}
              >Registration</Text>
              <Text>forgot password</Text>
            </View>


          </SafeAreaView>

        </ScrollView>
      </View>
    </View>


  );
};

// style.css

const styles = StyleSheet.create({
  inputinput: {
    backgroundColor: '#62CDFF',
    height: 34,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttondisble: {
    backgroundColor: '#CDC8C7',
    height: 34,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  backgroundColor: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  Loginpage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
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
    marginTop: 100,
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

  buttonppp: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },

  buttonbbb: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttoncheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textfailed: {
    color: 'red',
  },

  wrappericon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 20,
    right: 10,

  },

  usernameimage: {
    width: 20,
    height: 15,
  },
});


export default Parent;