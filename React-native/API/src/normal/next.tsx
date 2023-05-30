import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, { useEffect, useState, useLayoutEffect, Component } from 'react';
import { API_URL } from "@env"
import { FlatList } from 'react-native-gesture-handler';


const next = (props:any) => {
  
  const [data, setData] = useState({id:'',title:'',body:''});
  const [commend, setData1] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getAPIData = async () => { 
    const url = API_URL+'/posts/'+props.route.params.postId;

    
    return fetch(url)
      .then((response: any) => response.json())
      .then(responseJson => {
        setData(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  const getAPIComment = async () => { 
    const url = 'https://jsonplaceholder.typicode.com/posts/'+props.route.params.postId+'/comments';

    return fetch(url)
      .then((response: any) => response.json())
      .then(responseJson => {
        setData1(responseJson);
        setIsLoaded(false);
      })
      
      .catch(error => {
        console.error(error);
      });
  };
 

  useEffect(() => {
    getAPIData();
    getAPIComment();
  });


  return (
    <View style={styles.item2}>
      {isLoaded ?
      (
        <View style={styles.looder}> 
        <ActivityIndicator size="large" color="#000000"/>
        </View>)
        :  
        (
            <View>
              
            </View>
        )
      }
    
      {commend.map((comment: any) => {
        return (
            <View>
              <Text>{comment.id}</Text>
              <Text>{comment.name}</Text>
              <Text>{comment.email}</Text>
              <Text>{comment.body}</Text>
              </View>
         
        );
      })}

    
    </View>
  )
};
const styles = StyleSheet.create({
  item2: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  item3: {
    textAlign: 'left',
    fontSize: 15,
    padding: 5,
  },
  looder: {
flex: 1,
justifyContent: 'center',
  },
 

}
);

export default next;
