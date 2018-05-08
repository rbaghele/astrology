import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';


export default class FetchExample extends Component <{}>{
  static navigationOptions = {
    title: 'Fetch API Example'
  };
  
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: 'GET'
    })
    .then( (response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  constructor(props){
    super(props);
    this.state = {
      data: ''
    };
  }


  render(){
    return(
      <View>
        <Text>
          {this.state.data.body}
        </Text>
      </View>
    )
  }
}