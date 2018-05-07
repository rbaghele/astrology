/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import AstrologyForecastPage from './AstrologyForecastPage';
import TestPage from './TestPage'
import ScrollViewExample from './ScrollViewExample'

const App = StackNavigator({
  Home: { screen: HomePage },
  Results: { screen: AstrologyForecastPage },
  TestPage: {screen: TestPage},
  ScrollViewExample: {screen: ScrollViewExample }
},
{
  initialRouteName: 'Home',
});
export default App;