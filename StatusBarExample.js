import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';

export default class StatusBarExample extends Component <{}>{
  render(){
    return(
      <StatusBar barStyle = "dark-content" hidden = {false}/>
    )
  }
}