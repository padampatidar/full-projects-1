import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AddToDaiyPass = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <View style={StyleSheet.container}>
      <View style={styles.AddToDaiyPass}>
        <ScrollView>
          <View style={styles.AddToDaiyPass1}>
            <View style={styles.AddToDaiyPass2} />
          </View>
          <Text style={styles.AddToDaiyPass3}>Payment methods</Text>

          <TouchableOpacity style={styles.AddToDaiyPass4}>
            <View style={styles.AddToDaiyPass5}>
              <Image
                style={styles.AddToDaiyPass11}
                source={require('../asset/image/cashicon.png')}
              />
              <Text style={styles.AddToDaiyPass6}>Cash</Text>
            </View>
            <View>
              <Text style={styles.AddToDaiyPass7}>Default payment {'>'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.AddToDaiyPass8}>
            <View style={styles.AddToDaiyPass5}>
              <Image source={require('../asset/image/Paytmicon.png')} />
              <Text style={styles.AddToDaiyPass6}>Paytm</Text>
            </View>
            <View>
              <Text style={styles.AddToDaiyPass10}>To Open{'>'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.AddToDaiyPass9} />

          <TouchableOpacity style={styles.AddToDaiyPass8}>
            <View style={styles.AddToDaiyPass5}>
              <Image source={require('../asset/image/PayPalicon.png')} />
              <Text style={styles.AddToDaiyPass6}>Paypal</Text>
            </View>
            <View>
              <Text style={styles.AddToDaiyPass10}>To Open{'>'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.AddToDaiyPass9} />

          <TouchableOpacity style={styles.AddToDaiyPass8}>
            <View style={styles.AddToDaiyPass5}>
              <Image source={require('../asset/image/upiicon.png')} />
              <Text style={styles.AddToDaiyPass6}>UPI</Text>
            </View>
            <View>
              <Text style={styles.AddToDaAddToDaiyPass10iyPass7}>
                To Open{'>'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.AddToDaiyPass9} />

          <TouchableOpacity style={styles.AddToDaiyPass8}>
            <View style={styles.AddToDaiyPass5}>
              <Image source={require('../asset/image/crediticon.png')} />
              <Text style={styles.AddToDaiyPass6}>Credit or Debit Card</Text>
            </View>
            <View>
              <Text style={styles.AddToDaiyPass10}>To Open{'>'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.AddToDaiyPass9} />

          <View style={styles.AddToDaiyPass12}>
            <Button
              title="Pay($60.00)"
              color="#7DCEF0"
              onPress={() => navigation.navigate('Backtohome')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AddToDaiyPass: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  AddToDaiyPass2: {
    backgroundColor: '#39AFFF',
    width: 300,
    height: 6,
    borderRadius: 10,
  },
  AddToDaiyPass1: {
    backgroundColor: '#A1A1A1',
    height: 6,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  AddToDaiyPass3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 26,
    color: '#000000',
    paddingLeft: 30,
    marginTop: 20,
  },
  AddToDaiyPass4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    height: 54,
    marginTop: 30,
  },
  AddToDaiyPass5: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  AddToDaiyPass6: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 16,
    paddingLeft: 7,
  },
  AddToDaiyPass7: {
    color: '#10A303',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    marginRight: 30,
  },
  AddToDaiyPass8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    marginTop: 18,
    marginLeft: 30,
    marginRight: 30,
  },
  AddToDaiyPass9: {
    backgroundColor: '#000000',
    height: 1,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 4,
  },
  AddToDaiyPass10: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
  },
  AddToDaiyPass11: {
    marginLeft: 30,
  },
  AddToDaiyPass12: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 250,
  },
});

export default AddToDaiyPass;
