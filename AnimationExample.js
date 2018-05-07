import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  ScrollView,
  Animated
} from 'react-native';


export default class AnimationExample extends Component<{}>{
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     myStyle: {
  //       height: 100,
  //       backgroundColor: 'red'
  //     }
  //   };
  // }

  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(50);
    this.animatedHeight = new Animated.Value(100);
  }

  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
      toValue: 200,
      duration: 1000
    }).start();

    Animated.timing(this.animatedHeight, {
      toValue: 500,
      duration: 500
    }).start();

  }

  // expand = () => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  //   this.setState({
  //     myStyle: {
  //       height: 300,
  //       backgroundColor: 'red'
  //     }
  //   })
  // }

  // collapse = () => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  //   this.setState({
  //     myStyle: {
  //       height: 100,
  //       backgroundColor: 'red'
  //     }
  //   })
  // }

  // render(){
  //   return(
  //     <View>
  //       <ScrollView>
  //         <View style={this.state.myStyle}>
  //         </View>

  //         <TouchableOpacity>
  //           <Text onPress={this.expand} style={styles.button}> Expand </Text>
  //         </TouchableOpacity>

  //         <TouchableOpacity>
  //           <Text  onPress={this.collapse} style={styles.button}> Collapse </Text>
  //         </TouchableOpacity>
  //       </ScrollView>  
  //     </View>
  //   )
  // }


  render(){
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
    return(
      <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})

// const styles = StyleSheet.create({
//   button: {
//     borderWidth: 1,
//     borderColor: 'red',
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 50,
//     padding: 10
//   }
// })

