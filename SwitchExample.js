import React, { Component } from 'react';
import {
  View,
  Switch
} from 'react-native';


export default class SwitchExample extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      switch1Value: false,
      switch2Value: false,
    }
  }

  toggleSwitch1 = (value) => {
    this.setState({
      switch1Value: value
    });
  }

  toggleSwitch2 = (value) => {
    this.setState({
      switch2Value: value
    }); 
  }

  render(){
    return(
      <View>
        <Switch onValueChange={(value) => {this.toggleSwitch1(value)}} value={this.state.switch1Value} />
        <Switch onValueChange={(value) => {this.toggleSwitch2(value)}} value={this.state.switch2Value} />
      </View>
    )
  }

}