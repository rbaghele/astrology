import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class AstrologyForecastPage extends Component<{}> {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    const dateObj = new Date(params.date);
    const currentDate = new Date();
    const isBdayToday = dateObj.getDate() == currentDate.getDate() && dateObj.getMonth() == currentDate.getMonth();
    const details = params.name.toLowerCase().match('bha') ? bhartiDetails : []

    this.state = {
      name: params.name,
      date: params.date,
      isBdayToday: isBdayToday,
      details: details
    };
  }

  _forecast = () => {
    if (this.state.name.toLowerCase().match('bha') ){
      return bhartiDetails;
    }else{
      return [];
    }
  }

	render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingFont}> {this.state.isBdayToday ? 'Happy Birthday ' : '' } {this.state.name}</Text>
        
        <View style={styles.detailsContainer}>
          {
            this.state.details.map(function(text, index){
              return <Text key={ index }>{text}</Text>;
            })
          }
        </View>
      </View>
    );
	}
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  
  headingFont: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  detailsContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },
  
  paraText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20
  }
})

const bhartiDetails = [
  '1. Your nickname are Illi, Bharat Mata etc.. ',
  '2. I know you dont understand English properly so I am using Hindi.',
  '3. Tumara highest education B.E. hai',
  '4. Tum "Tanda" se belong karti ho',
  '5. Tumara nature Zagdalu hai',
  '6. Tum chhoti chhoti bato par mu phula leti ho',
  '7. Bachhpan me jab mom, dad tumhe kahi le k nhi jate the to tum kapde pakad k bandi bandi bhagti thi',
  '8. Tumhe lagata hai ki tum badi aur samjhdar ho gai ho but aisa nhi hai, tum me aur 2-3 sal k bachhe me ek hi difference hai ki, 2-3 sal k bachho ko jada akal rahti hai',
  '9. Tum apane Mamaji ki bahu(daughter in law) ho',
  '10. Tum abhi apane education k liye bahar rahti ho',
  '11. Actually tum tumare ghar k piche k bandiyo me mili thi(You are adopted child)',
]