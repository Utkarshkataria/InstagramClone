import {
    createStackNavigator
  } from 'react-navigation';
import MainScreen from '../Components/MainScreen'
import Test from '../Components/test'

const AppStack = createStackNavigator({
    MainScreen: {
    screen: MainScreen
  },
  Test: {
    screen: Test
  }
});
 


// const AppStack = createAppContainer(RootStack);

export default AppStack;