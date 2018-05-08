import React, { Component } from 'react';
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'


export default class AsyncStorageExample extends Component<{}>{
  constructor(props){
    super(props);

    this.state = {
      name: ''
    }
  }

  componentDidMount = () => {
    AsyncStorage.getItem("name").then((value) => { 
      this.setState({name: value})
    })

    // this.setState({name: val})
  }

  setName = (value) => {
    console.log(value);
    this.setState({name: value});
    AsyncStorage.setItem("name", value);
  }

  render(){
    return(
      <View style = {styles.container}>
        <TextInput style = {styles.textInput} autoCapitalize = 'none' 
           onChangeText = {(value) => {this.setName(value)}}/>
        <Text>
           {this.state.name}
        </Text>
     </View>
    )
  }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    margin: 15,
    height: 35,
    borderWidth: 1,
    width: '100%'
  }
})