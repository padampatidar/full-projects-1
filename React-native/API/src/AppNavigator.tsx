import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import API from './normal/API';
import next from './normal/next';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="API" component={API} />
        <Stack.Screen name="Next" component={next} 
        options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
