import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={StyleSheet.container}>
      <View style={styles.Home}>
        <ScrollView>
          <View style={styles.Home1}>
            <View>
              <TouchableOpacity>
                <Image source={require('../asset/image/noti.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.Home2}>
                <Image
                  style={styles.Home10}
                  source={require('../asset/image/arowiacon.png')}
                />
                <Text>Your Vahicle</Text>
              </View>
              <View style={styles.Home2}>
                <Text style={styles.Home3}>Add Vehicle </Text>
                <Image source={require('../asset/image/caricon.png')} />
              </View>
            </View>
          </View>
          <View style={styles.Home4}>
            <Image
              style={styles.Home5}
              source={require('../asset/image/sliderimage.png')}
            />
          </View>
          <View style={styles.Home6}>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/carcaricon.png')} />
              <Text style={styles.Home8}>Pressure car wash</Text>
            </View>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/caricon-2.png')} />
              <Text style={styles.Home8}>Interior only</Text>
            </View>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/caricon-3.png')} />
              <Text style={styles.Home8}>Waterless carclean</Text>
            </View>
          </View>
          <View style={styles.Home6}>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/caricon-4.png')} />
              <Text style={styles.Home8}>Car deep clean</Text>
            </View>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/caricon-5.png')} />
              <Text style={styles.Home8}>Wash andcoat</Text>
            </View>
            <View style={styles.Home7}>
              <Image source={require('../asset/image/caricon-6.png')} />
              <Text style={styles.Home8}>Bike Washing</Text>
            </View>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image
                    style={styles.modalText}
                    source={require('../asset/image/Defaultwhatsappicon.png')}
                  />
                  <Image
                    style={styles.modalText}
                    source={require('../asset/image/Defaultphoneicon.png')}
                  />
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      style={styles.modalText}
                      source={require('../asset/image/closeicon.png')}
                    />
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image source={require('../asset/image/Default.png')} />
            </Pressable>
          </View>

          <View style={styles.Home11}>
            <TouchableOpacity style={styles.Home12}>
              <Image source={require('../asset/image/footercaricon.png')} />
              <Text style={styles.Home13}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.google.com/maps/@22.7166109,75.9114717,15z',
                )
              }
              style={styles.Home12}>
              <Image
                source={require('../asset/image/footerlocationicon.png')}
              />
              <Text style={styles.Home13}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Home12}
              onPress={() => navigation.navigate('Help')}>
              <Image source={require('../asset/image/footerhelpicon.png')} />
              <Text style={styles.Home13}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Home12}>
              <Image source={require('../asset/image/footerprofileicon.png')} />
              <Text style={styles.Home13}>Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  Home1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  Home2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  Home3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    color: '#000000',
  },
  Home5: {
    width: '100%',
  },
  Home4: {
    margin: 20,
  },
  Home6: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  Home7: {
    display: 'flex',
    alignItems: 'center',
  },
  Home8: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#000000',
  },
  Home9: {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingRight: 30,
    paddingTop: 150,
  },
  Home10: {
    marginRight: 5,
  },
  Home11: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  Home12: {
    alignItems: 'center',
  },
  Home13: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    color: '#000000',
  },
  // hhhh

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingTop: 150,
  },
  modalView: {
    position: 'relative',
    top: 150,
  },
  modalText: {
    marginTop: 7,
  },
});

export default Home;
