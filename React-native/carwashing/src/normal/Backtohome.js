import {View, Text, ScrollView, StyleSheet, Image, Button} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Backtohome = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={StyleSheet.container}>
      <View style={styles.Backtohome}>
        <ScrollView>
          <View style={styles.Backtohome1}>
            <Image source={require('../asset/image/Vehicleimage.png')} />
            <Text style={styles.Backtohome2}>Your Order is Processed</Text>
            <Text style={styles.Backtohome3}>
              Sit back and relax. Cleaner Will come to you
            </Text>
            <Text style={styles.Backtohome4}>Today at 08:00 am</Text>
          </View>
          <View style={styles.Backtohome5}>
            <View>
              <Button
                onPress={() => navigation.navigate('Home')}
                title="Back To Home"
                color="#39AFFF"
              />
            </View>
            <View style={styles.Backtohome6}>
              <Button title="Track Your Order" color="#7DCEF0" />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Backtohome: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  Backtohome1: {
    marginTop: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Backtohome2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    marginTop: 8,
    color: '#000000',
  },
  Backtohome3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#000000',
    paddingTop: 6,
  },
  Backtohome4: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#39AFFF',
  },
  Backtohome5: {
    margin: 30,
    marginTop: 320,
  },
  Backtohome6: {
    marginTop: 20,
  },
});

export default Backtohome;
