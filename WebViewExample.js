import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  WebView
} from 'react-native';

export default class WebViewExample extends Component <{}>{
  static navigationOptions = {
    title: 'Web View Example'
  };

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <WebView source={{uri: 'http://google.com'}}>
        </WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})
