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
import FetchExample from './FetchExample'
import AnimationExample from './AnimationExample'

const App = StackNavigator({
  Home: { screen: HomePage },
  Results: { screen: AstrologyForecastPage },
  TestPage: {screen: TestPage},
  ScrollViewExample: {screen: ScrollViewExample },
  FetchExample: {screen: FetchExample},
  AnimationExample: {screen: AnimationExample}
},
{
  initialRouteName: 'Home',
});
export default App;