import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const VechicleType = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);
  return (
    <View style={StyleSheet.container}>
      <View style={styles.VechicleType2}>
        <ScrollView>
          <View style={styles.VechicleType1}>
            <View style={styles.VechicleType} />
          </View>
          <Text style={styles.VechicleType3}>Select Vehicle Type</Text>
          <View style={styles.VechicleType4}>
            <TouchableOpacity>
              <Image
                style={styles.VechicleType5}
                source={require('../asset/image/carcar.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.VechicleType5}
                source={require('../asset/image/bike.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Next"
              color="#7DCEF0"
              onPress={() => navigation.navigate('VehicleModel')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// style.css

const styles = StyleSheet.create({
  VechicleType2: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  VechicleType: {
    backgroundColor: '#39AFFF',
    width: 50,
    height: 6,
    borderRadius: 10,
  },
  VechicleType1: {
    backgroundColor: '#A1A1A1',
    height: 6,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  VechicleType3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 26,
    color: '#000000',
    paddingLeft: 30,
    marginTop: 20,
  },
  VechicleType4: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 40,
  },
  VechicleType5: {
    marginLeft: 30,
  },
  buttonContainer: {
    margin: 30,
    paddingTop: 480,
  },
});

export default VechicleType;
