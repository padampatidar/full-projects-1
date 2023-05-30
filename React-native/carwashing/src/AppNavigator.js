import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// screens
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import Loginaccount from './Loginaccount';
import Addavehicle from './normal/Addavehicle';
import VehicleType from './normal/VehicleType';
import VehicleModel from './normal/VehicleModel';
import MiniCar from './normal/MiniCar';
import Package from './normal/Package';
import AddToDaiyPass from './normal/AddToDaiyPass';
import Backtohome from './normal/Backtohome';
import Home from './normal/Home';
import Help from './normal/Help';
// import Contact from './normal/Contact';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Loginaccount"
          component={Loginaccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Addavehicle"
          component={Addavehicle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VehicleType"
          component={VehicleType}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="VehicleModel"
          component={VehicleModel}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="MiniCar"
          component={MiniCar}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Package"
          component={Package}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AddToDaiyPass"
          component={AddToDaiyPass}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Backtohome"
          component={Backtohome}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
