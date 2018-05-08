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
import WebViewExample from './WebViewExample'
import ModalExample from './ModalExample'
import StatusBar from './StatusBarExample'
import SwitchExample from './SwitchExample'

const Routes = StackNavigator({
  Home: { screen: HomePage },
  Results: { screen: AstrologyForecastPage },
  TestPage: {screen: TestPage},
  ScrollViewExample: {screen: ScrollViewExample },
  FetchExample: {screen: FetchExample},
  AnimationExample: {screen: AnimationExample},
  WebViewExample: {screen: WebViewExample},
  ModalExample: { screen: ModalExample },
  StatusBar: {screen: StatusBar},
  SwitchExample: {screen: SwitchExample}
},
{
  initialRouteName: 'Home',
});

export default Routes