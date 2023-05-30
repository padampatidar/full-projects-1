/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Addavihicle = () => {

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    const name = await AsyncStorage.getItem('NAME');
    const phone = await AsyncStorage.getItem('PHONE');
    const address = await AsyncStorage.getItem('ADDRESS');
    console.log(email + ' ' + password + ' ' + name + ' ' + phone + ' ' + address);
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);



  return (
    <View style={StyleSheet.container}>
      <View style={styles.addavihicle}>
        <ScrollView>
          <View style={styles.addavihicleicon}>
            <Image source={require('../asset/image/vehicleicon.png')} />
            <Text style={styles.addavihicletext}>Add a Vehicle</Text>
          </View>
          <View style={styles.addavihicleimage}>
            <Image
              style={styles.addavihicleimageimage}
              source={require('../asset/image/Vehicleimage.png')}
            />
            <Text style={styles.addavihicletextadd}>Add a vehicle</Text>
            <Text style={styles.addavihicletextp}>
              Add your vehicle, start your request, sit back and we will take
              care for it{' '}
            </Text>
          </View>
          <View style={styles.multiButtonContainer}>
            <TouchableOpacity style={styles.addavihiclebuton1}>
              <Text style={{color: '#39AFFF'}}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addavihiclebuton2}
              onPress={() => navigation.navigate('VehicleType')}>
              <Text style={{color: '#ffffff'}}>Add a Vehicle</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// style.css

const styles = StyleSheet.create({
  addavihicle: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  addavihicleicon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 20,
  },
  addavihicletext: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    paddingLeft: 15,
    color: '#000000',
  },
  addavihicleimage: {
    marginTop: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addavihicletextadd: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    paddingLeft: 15,
    color: '#000000',
    paddingTop: 20,
  },
  addavihicletextp: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    textAlign: 'center',
    color: '#A1A1A1',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 8,
  },
  multiButtonContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 280,
  },
  addavihiclebuton1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#39AFFF',
    width: 70,
    height: 35,
  },
  addavihiclebuton2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39AFFF',
    borderRadius: 5,
    width: 100,
  },
});

export default Addavihicle;
