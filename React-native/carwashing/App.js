import React from 'react';
import AppNavigator from './src/AppNavigator';
import firebase from '@react-native-firebase/app';
const App = () => {
 
const firebaseConfig = {
  apiKey: "AIzaSyBmNlhJLJwXuquLL5Q6SSnh4kyx2bKJS2Q",
  authDomain: "fire-base-a546c.firebaseapp.com",
  projectId: "fire-base-a546c",
  databaseURL: "https://fire-base-a546c.firebaseio.com",
  storageBucket: "fire-base-a546c.appspot.com",
  messagingSenderId: "1073770937059",
  appId: "1:1073770937059:web:648623a794be1463fba3d6",
  measurementId: "G-83J9SJ38K1"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  return <AppNavigator />;
};

export default App;
