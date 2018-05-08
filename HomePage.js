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
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class HomePage extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: '',
      message: '',
      date: "",
      namePlaceholderColor: '#9a73ef',
      datePickerPlaceholderColor: '#9a73ef'
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

    const nameColor = name == '' ? 'red' : '#9a73ef';
    const dateColor = date == '' ? 'red' : '#9a73ef';

    
    this.setState({
      namePlaceholderColor: nameColor,
      datePickerPlaceholderColor: dateColor 
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

  _navigateToTestPage = () => {
    this.props.navigation.navigate('TestPage', {});
  };

  _navigateToScrollViewExample = () => {
    this.props.navigation.navigate('ScrollViewExample', {});
  };

  _navigateToFetchExample = () => {
    this.props.navigation.navigate('FetchExample', {});
  };

  _navigateToAnimationExample = () => {
    this.props.navigation.navigate('AnimationExample', {})
  };
  
  _navigateToWebViewExample = () => {
    this.props.navigation.navigate('WebViewExample', {});
  };

  _navigateToModalExample = () => {
    this.props.navigation.navigate('ModalExample');
  };

  _navigateToStatusBarExample = () => {
    this.props.navigation.navigate('StatusBar');
  };

  _navigateToSwitchExample = () => {
    this.props.navigation.navigate('SwitchExample');
  };

	render(){
		const loader = this.state.isLoading ? <ActivityIndicator size='large' /> : null;
		return(
			<View style={styles.container}>
				<TextInput 
				onChange={this._onNameChnaged} 
				placeholder='* Please enter your name.'
        placeholderTextColor = {this.state.namePlaceholderColor}
				style={styles.input}
        underlineColorAndroid = "transparent"
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
        customStyles={{ 
          dateInput: { 
            borderBottomWidth: 1,
            borderWidth:0,
            borderBottomColor: '#d3d3d3',
            alignItems:'flex-start'
          }, 
          placeholderText: {
            color: this.state.datePickerPlaceholderColor
          }
        }}
      	/>
        <Text style={styles.error}>{this.state.dateError}</Text>

				<Button 
        style={styles.button}
				onPress={this._onSearchPressed} 
				title='Know about me'
				/>
        

        {loader}

        <TouchableOpacity onPress={this._navigateToTestPage} style={styles.marginTop10}>
          <Text>Click here to go to test screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToScrollViewExample} style={styles.marginTop10}>
          <Text>Click here to go to scroll view Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToFetchExample} style={styles.marginTop10}>
          <Text>Click here to go to Fetch Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToAnimationExample} style={styles.marginTop10}>
          <Text>Click here to go to Animation Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToWebViewExample} style={styles.marginTop10}>
          <Text>Click here to go to Web View Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToModalExample} style={styles.marginTop10}>
          <Text>Click here to go to Modal Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToStatusBarExample} style={styles.marginTop10}>
          <Text>Navigate to Status Bar Example</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._navigateToSwitchExample} style={styles.marginTop10}>
          <Text>Navigate to Switch Example</Text>
        </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

	input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    marginBottom: 10,
	},

	datePicker: {
    width: '100%',
    marginBottom: 10,
	},

  error: {
    color: 'red',
    marginTop: 0,
    marginBottom: 5
  },

  button: {
    width: '100%'
  },

  marginTop10: {
    marginTop: 10,
  }
})