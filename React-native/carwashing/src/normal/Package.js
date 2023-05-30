import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Package = () => {
  const [] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  const options = [
    'Normal Cleaning',
    'Deep Cleamimg',
    'Dry Cleaning',
    'Waxing',
    'Wheel Cleaning',
  ];

  const options2 = [
    'Normal Cleaning',
    'Deep Cleamimg',
    'Waxing',
    'Wheel Cleaning',
    'Interiors Vacuum',
    'Buffing Polishing',
    'Car Underbody Cleaning',
  ];

  const options3 = [
    'Normal Cleaning',
    'Deep Cleamimg',
    'Waxing',
    'Interiors Vacuum',
    'Buffing Polishing',
    'Car Underbody Cleaning',
    'Dashboard Cleaning',
    'Car Exteriors',
    'Glass Polishing',
  ];
  return (
    <View style={StyleSheet.container}>
      <View style={styles.Package}>
        <ScrollView>
          <View style={styles.Package1}>
            <View style={styles.Package2} />
          </View>
          <Text style={styles.Package3}>Pricing package</Text>
          <View style={styles.Package9}>
            <View>
              <View style={styles.Package5}>
                <Text style={styles.Package6}>Daily pass</Text>
              </View>
              <View>
                <Text style={styles.Package7}>Daily cleaning pass</Text>
              </View>
              <View>
                <Text style={styles.Package8}>$ 60</Text>
                <Text style={styles.Package10}>/ Day</Text>
              </View>
            </View>

            <View>
              <View>
                {options.map(option => (
                  <View key={option} style={styles.language}>
                    <TouchableOpacity style={styles.checkbox} />
                    <Text style={styles.Package12}>{option}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.Package14}>
                <TouchableOpacity style={styles.Package13}>
                  <Text style={styles.Package15}>Choose Plan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.Package16}>
            <View>
              <View style={styles.Package5}>
                <Text style={styles.Package6}>Month pass</Text>
              </View>
              <View>
                <Text style={styles.Package7}>Month cleaning pass</Text>
              </View>
              <View>
                <Text style={styles.Package8}>$ 1400</Text>
                <Text style={styles.Package10}>/ Month</Text>
              </View>
            </View>

            <View>
              <View>
                {options2.map(option2 => (
                  <View key={option2} style={styles.language}>
                    <TouchableOpacity style={styles.checkbox} />
                    <Text style={styles.Package12}>{option2}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.Package14}>
                <TouchableOpacity style={styles.Package13}>
                  <Text style={styles.Package15}>Choose Plan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.Package16}>
            <View>
              <View style={styles.Package5}>
                <Text style={styles.Package6}>Year pass</Text>
              </View>
              <View>
                <Text style={styles.Package7}>Year cleaning pass</Text>
              </View>
              <View>
                <Text style={styles.Package8}>$ 6800</Text>
                <Text style={styles.Package10}>/ Year</Text>
              </View>
            </View>

            <View>
              <View>
                {options3.map(option3 => (
                  <View key={option3} style={styles.language}>
                    <TouchableOpacity style={styles.checkbox} />
                    <Text style={styles.Package12}>{option3}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.Package14}>
                <TouchableOpacity style={styles.Package13}>
                  <Text style={styles.Package15}>Choose Plan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.Package17}>
            <Button
              title="Next"
              color="#7DCEF0"
              onPress={() => navigation.navigate('AddToDaiyPass')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Package: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  Package2: {
    backgroundColor: '#39AFFF',
    width: 250,
    height: 6,
    borderRadius: 10,
  },
  Package1: {
    backgroundColor: '#A1A1A1',
    height: 6,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  Package3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 26,
    color: '#000000',
    paddingLeft: 30,
    marginTop: 20,
  },
  Package5: {
    backgroundColor: '#39AFFF',
    borderRadius: 7,
  },
  Package6: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 35,
    color: '#ffffff',
  },
  Package7: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 35,
    color: '#000000',
  },
  Package8: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 26,
    color: '#39AFFF',
  },
  Package9: {
    display: 'flex',
    borderColor: '#A1A1A1',
    borderWidth: 1,
    margin: 30,
    borderRadius: 10,
  },
  Package10: {
    textAlign: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    marginRight: 8,
  },
  language: {
    flexDirection: 'row',
    marginVertical: 10,
    alignContent: 'center',
    paddingLeft: 4,
  },
  Package12: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  Package13: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7DCEF0',
    borderRadius: 20,
    width: 120,
    height: 45,
  },
  Package14: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 4,
  },
  Package15: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    color: '#ffffff',
  },
  Package16: {
    display: 'flex',
    borderColor: '#A1A1A1',
    borderWidth: 1,
    margin: 30,
    borderRadius: 10,
    opacity: 0.5,
  },
  Package17: {
    margin: 30,
  },
});

export default Package;
