import SplashScreen from 'react-native-splash-screen'
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
import DatePicker from 'react-native-datepicker'


export default class HomePage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: '',
      message: '',
      date: "",
      nameError: '',
      dateError: ''
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  _validateValues = () => {
    const name = this.state.name.trim();
    const date = this.state.date.trim();

    const nameError = name == '' ? 'Please enter your name' : '';
    const dateError = date == '' ? 'Please select date of birth' : '';

    
    this.setState({
      nameError: nameError,
      dateError: dateError 
    });

    return name != '' && date != '';
  };

	_onNameChnaged = (event) => {
		this.setState( { 
			name: event.nativeEvent.text 
		})
	};

	_onSearchPressed = () => {
		this.setState({ 
			isLoading: true
		});

    const isValid = this._validateValues();
    this.setState({ isLoading: false });

    if(isValid){
      this.props.navigation.navigate('Results', { name: this.state.name, date: this.state.date } );
    }
	};

	render(){
		const loader = this.state.isLoading ? <ActivityIndicator size='large' /> : null;
		return(
			<View style={styles.container}>
				<TextInput 
				onChange={this._onNameChnaged} 
				placeholder='* Please enter your name.'
				style={styles.inputBox}
				/>
        <Text style={styles.error}>{this.state.nameError}</Text>

				<DatePicker
        date={this.state.date}
        mode="date"
        placeholder="* Please select date of birth."
        format="YYYY-MM-DD"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {this.setState({date: date})}}
        style={styles.datePicker}
        customStyles={{dateInput: {borderBottomWidth: 1, borderWidth:0, alignItems:'flex-start'}}}
      	/>
        <Text style={styles.error}>{this.state.dateError}</Text>

				<Button 
        style={styles.button}
				onPress={this._onSearchPressed} 
				title='Know about me'
				/>
        
				{loader}
        
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

	inputBox: {
		marginBottom: 10,
	},

	datePicker: {
		marginBottom: 10,
    width: '100%'
	},

  error: {
    color: 'red',
    marginTop: 0,
    marginBottom: 5
  },

  button: {
    flex: 1
  }
})