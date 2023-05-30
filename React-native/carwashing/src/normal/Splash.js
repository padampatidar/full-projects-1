import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, [navigation]);
  return (
    <LinearGradient
      colors={['#85CDFD', '#ffffff', '#ffffff', '#85CDFD']}
      style={styles.homeTop}>
      <View>
        <StatusBar backgroundColor="#85CDFD" />
      </View>
      <View style={styles.homeTop2}>
        <Image
          style={styles.headerImage}
          source={require('../asset/image/c.png')}
        />
        <Text style={styles.cartext}>CAR CLEAN</Text>
      </View>
      <Text style={styles.washtext}>Full-sarvice & Car Wash</Text>
    </LinearGradient>
  );
};

// style.css

const styles = StyleSheet.create({
  homeTop: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  homeTop2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  cartext: {
    color: '#000000',
    fontWeight: 500,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 29,
  },

  washtext: {
    color: '#333333',
    fontWeight: 500,
    lineHeight: 16,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginTop: 10,
  },
});

export default Splash;
