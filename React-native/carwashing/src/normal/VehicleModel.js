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

const VehicleModel = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);
  return (
    <View style={StyleSheet.container}>
      <View style={styles.VehicleModel}>
        <ScrollView>
          <View style={styles.VehicleModel1}>
            <View style={styles.VehicleModel2} />
          </View>
          <Text style={styles.VehicleModel3}>Select Vehicle Model</Text>
          <View style={styles.VehicleModel4}>
            <TouchableOpacity>
              <Image source={require('../asset/image/carcarcar.png')} />
            </TouchableOpacity>
            <View>
              <Text style={styles.VehicleModel5}>Mini Car</Text>
              <Text style={styles.VehicleModel6}>
                Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                sint. Velit officia consequat duis enim velit mollit.
                Exercitationveniam consequat sunt nostrud amet.
              </Text>
            </View>
          </View>
          <View style={styles.VehicleModel4}>
            <TouchableOpacity style={styles.VehicleModel5}>
              <Image source={require('../asset/image/sedancar.png')} />
            </TouchableOpacity>
            <View>
              <Text style={styles.VehicleModel5}>Sedan Car</Text>
              <Text style={styles.VehicleModel6}>
                Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                sint. Velit officia consequat duis enim velit mollit.
                Exercitationveniam consequat sunt nostrud amet.
              </Text>
            </View>
          </View>
          <View style={styles.VehicleModel4}>
            <TouchableOpacity>
              <Image source={require('../asset/image/blackcar.png')} />
            </TouchableOpacity>
            <View>
              <Text style={styles.VehicleModel5}>Hatchback Car</Text>
              <Text style={styles.VehicleModel6}>
                Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                sint. Velit officia consequat duis enim velit mollit.
                Exercitationveniam consequat sunt nostrud amet.
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Next"
              color="#7DCEF0"
              onPress={() => navigation.navigate('MiniCar')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// style.css

const styles = StyleSheet.create({
  VehicleModel: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  VehicleModel2: {
    backgroundColor: '#39AFFF',
    width: 100,
    height: 6,
    borderRadius: 10,
  },
  VehicleModel1: {
    backgroundColor: '#A1A1A1',
    height: 6,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  VehicleModel3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 26,
    color: '#000000',
    paddingLeft: 30,
    marginTop: 20,
  },
  VehicleModel4: {
    flexDirection: 'row',
    borderColor: '#A1A1A1',
    borderWidth: 1,
    width: '86%',
    marginLeft: 30,
    marginTop: 30,
  },
  VehicleModel5: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 10,
  },
  VehicleModel6: {
    paddingLeft: 10,
    paddingRight: 130,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWight: 400,
    fontSize: 12,
  },
  buttonContainer: {
    margin: 30,
    paddingTop: 220,
  },
});

export default VehicleModel;
