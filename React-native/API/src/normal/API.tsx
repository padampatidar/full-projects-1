import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { API_URL } from "@env"

const API = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState([]);


  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';

    return fetch(url)
      .then((response: any) => response.json())
      .then(responseJson => {
        setData(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      {data.map((post: any) => {
        return (
              <ScrollView>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Next', { 'postId': post.id})}
            >
              <Text style={styles.item1}>{post.id}</Text>
              <Text style={styles.item1}>{post.title}</Text>
              <Text style={styles.item1}>{post.body}</Text>
            </TouchableOpacity>
            </ScrollView>
         
        );
      })}

    </View>
  );
};
const styles = StyleSheet.create({
  ScrollView: {
  flex: 1,
  justifyContent:'center',
  },
  item: {
    padding: 20,
  },
  item1: {
    fontSize: 15,
    padding: 5,
  }
});

export default API;
