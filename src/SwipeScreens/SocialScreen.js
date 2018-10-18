import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Container, Content } from 'native-base';
//import CardComponent from '/Users/anthony/Desktop/Manifest/App4/src/screens/CardComponent.js';
import UserInfo from '../screens/UserInfo';


class SocialScreen extends React.Component {
  render() {
    return (
      <View>
        
            <UserInfo/>
        
      </View>
    );
  }
}

export default SocialScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  
    
}}
);

