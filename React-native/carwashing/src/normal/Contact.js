import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contact = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    console.log(email + ' ' + password);
  };
  return (
    <View>
      <Text>Contact</Text>
    </View>
  );
};

export default Contact;
