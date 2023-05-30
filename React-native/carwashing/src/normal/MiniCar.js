/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useLayoutEffect, Component} from 'react';
import {useNavigation} from '@react-navigation/native';

const MiniCar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <View style={StyleSheet.container}>
      <View style={styles.MiniCar}>
        <ScrollView>
          <View style={styles.MiniCar1}>
            <View style={styles.MiniCar2} />
          </View>
          <Text style={styles.MiniCar3}>Select Mini Car Model</Text>
          <View style={styles.MiniCar4}>
            <TouchableOpacity style={styles.MiniCar5}>
              <Image source={require('../asset/image/nenocar.png')} />
              <Text style={styles.MiniCar6}>Tata Neno</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MiniCar5}>
              <Image source={require('../asset/image/hyundi.png')} />
              <Text style={styles.MiniCar6}>Hyundai Eon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar5}>
              <Image source={require('../asset/image/maruti.png')} />
              <Text style={styles.MiniCar6}>Maruti Suzuki Alto</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.MiniCar8}>Your car imges</Text>
          <View style={styles.MiniCar7} />
          <View style={styles.MiniCar9}>
            <View>
              <Image source={require('../asset/image/box.png')} />
            </View>
            <View>
              <Image source={require('../asset/image/box.png')} />
            </View>
            <View>
              <Image source={require('../asset/image/box.png')} />
            </View>
            <View>
              <Image source={require('../asset/image/box.png')} />
            </View>
            <View>
              <Image source={require('../asset/image/box.png')} />
            </View>
          </View>
          <Text style={styles.MiniCar8}>Select Date</Text>
          <View style={styles.MiniCar7} />
          <View style={styles.MiniCar13}>
            <View>
              <Text style={styles.MiniCar12}>Select Time</Text>
            </View>
            <View style={styles.MiniCar14}>
              <TouchableOpacity style={styles.MiniCar15}>
                <Text style={styles.MiniCar11}>am</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MiniCar15}>
                <Text style={styles.MiniCar11}>pm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.multiButtonContainer}>
            <TouchableOpacity style={styles.MiniCar10}>
              <Text style={styles.MiniCar11}>08:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar10}>
              <Text style={styles.MiniCar11}>08:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar10}>
              <Text style={styles.MiniCar11}>08:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar10}>
              <Text style={styles.MiniCar11}>08:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar10}>
              <Text style={styles.MiniCar11}>08:00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MiniCar16} />
          <Text style={styles.MiniCar17}>Your vehical plate number</Text>
          <Text style={styles.MiniCar18}>MP 09 AF 5961</Text>
          <View style={styles.MiniCar7} />
          <View>
            <Text style={styles.MiniCar19}>Select Your package</Text>
            <Text style={styles.MiniCar20}>Clean car</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.MiniCar21}>
              <View>
                <Image
                  source={require('../asset/image/ic_round-local-car-wash.png')}
                />
              </View>
              <View>
                <Text style={styles.MiniCar22}>Glem</Text>
                <Text style={styles.MiniCar23}>30 to 40 minutes</Text>
                <Text style={styles.MiniCar24}>
                  The exterior only includes washing{' '}
                </Text>
                <Text style={styles.MiniCar24}>window & tire cleaning.</Text>
              </View>
              <View>
                <Text style={styles.MiniCar25}>$10.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar21}>
              <View>
                <Image source={require('../asset/image/Car-Cleaning.png')} />
              </View>
              <View>
                <Text style={styles.MiniCar22}>Lavish</Text>
                <Text style={styles.MiniCar23}>70 to 80 minutes</Text>
                <Text style={styles.MiniCar24}>
                  The exterior only includes washing{' '}
                </Text>
                <Text style={styles.MiniCar24}>window & tire cleaning.</Text>
              </View>
              <View>
                <Text style={styles.MiniCar25}>$20.00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.MiniCar26}>Detailing</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.MiniCar21}>
              <View>
                <Image source={require('../asset/image/reveal.png')} />
              </View>
              <View>
                <Text style={styles.MiniCar22}>Reveal</Text>
                <Text style={styles.MiniCar23}>100 to 150 minutes</Text>
                <Text style={styles.MiniCar24}>
                  The exterior only includes washing{' '}
                </Text>
                <Text style={styles.MiniCar24}>window & tire cleaning.</Text>
              </View>
              <View>
                <Text style={styles.MiniCar25}>$40.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar21}>
              <View>
                <Image source={require('../asset/image/outright.png')} />
              </View>
              <View>
                <Text style={styles.MiniCar22}>Outright</Text>
                <Text style={styles.MiniCar23}>180 to 200 minutes</Text>
                <Text style={styles.MiniCar24}>
                  The exterior only includes washing{' '}
                </Text>
                <Text style={styles.MiniCar24}>window & tire cleaning.</Text>
              </View>
              <View>
                <Text style={styles.MiniCar25}>$10.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MiniCar21}>
              <View>
                <Image source={require('../asset/image/ace.png')} />
              </View>
              <View>
                <Text style={styles.MiniCar22}>Ace</Text>
                <Text style={styles.MiniCar23}>200 to 240 minutes</Text>
                <Text style={styles.MiniCar24}>
                  The exterior only includes washing{' '}
                </Text>
                <Text style={styles.MiniCar24}>window & tire cleaning.</Text>
              </View>
              <View>
                <Text style={styles.MiniCar25}>$90.00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Text style={styles.MiniCar27}>Subtotal</Text>
              <Text style={styles.MiniCar27}>$ 60.00 </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.MiniCar28}
                onPress={() => navigation.navigate('Package')}>
                <Text style={{color: '#ffffff'}}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// style.css

const styles = StyleSheet.create({
  MiniCar: {
    backgroundColor: '#ffffff',
  },
  MiniCar2: {
    backgroundColor: '#39AFFF',
    width: 150,
    height: 6,
    borderRadius: 10,
  },
  MiniCar1: {
    backgroundColor: '#A1A1A1',
    height: 6,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  MiniCar3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 26,
    color: '#000000',
    paddingLeft: 30,
    marginTop: 20,
  },
  MiniCar4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  MiniCar5: {
    borderWidth: 1.5,
    borderColor: '#A1A1A1',
    borderRadius: 3,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  MiniCar6: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#000000',
  },
  MiniCar7: {
    backgroundColor: '#333333',
    height: 2,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 5,
  },
  MiniCar8: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 28,
    marginTop: 50,
  },
  MiniCar9: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 20,
  },
  multiButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 28,
    paddingRight: 28,
  },
  MiniCar10: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#333333',
    width: 60,
    height: 30,
    marginTop: 15,
  },
  MiniCar11: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    color: '#000000',
  },
  MiniCar12: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 28,
    marginTop: 20,
  },
  MiniCar13: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MiniCar14: {
    flexDirection: 'row',
    paddingRight: 28,
  },
  MiniCar15: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#333333',
    width: 40,
    height: 30,
    marginTop: 20,
    margin: 5,
  },
  MiniCar16: {
    backgroundColor: '#333333',
    height: 2,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 15,
  },
  MiniCar17: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 28,
    marginTop: 25,
  },
  MiniCar18: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#000000',
    paddingLeft: 28,
    marginTop: 15,
  },
  buttonContainer: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MiniCar19: {
    fonFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 19,
    color: '#000000',
    paddingLeft: 28,
    paddingTop: 30,
  },
  MiniCar20: {
    fonFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 12,
    color: '#A2A1A1',
    paddingLeft: 30,
    paddingTop: 13,
  },
  MiniCar21: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  MiniCar22: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    color: '#000000',
  },
  MiniCar23: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
  },
  MiniCar24: {
    color: '#000000',
  },
  MiniCar25: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 16,
  },
  MiniCar26: {
    fonFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 12,
    color: '#A2A1A1',
    paddingLeft: 30,
    paddingTop: 20,
  },
  MiniCar27: {
    fonFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    color: '#000000',
  },
  MiniCar28: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7DCEF0',
    borderRadius: 5,
    width: 100,
    height: 35,
  },
});

export default MiniCar;
