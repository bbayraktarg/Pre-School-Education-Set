import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './companent/HomeScreen';
import DetailScreen from './companent/Detail';
import RecordScreen from './companent/RecordScreen';

const AppNavigator=createStackNavigator({
    Home:HomeScreen ,
    Detail:DetailScreen,
    Record:RecordScreen
    },{initialRouteName:"Home",
     defaultNavigationOptions: {
      headerTitleAlign:'center',
      headerBackTitle:'Geri',
      headerTintColor: '#000',
      headerTitleStyle: {
      fontWeight: 'bold', 
      },
      headerTransparent:true,
   
    },});
  
export default createAppContainer(AppNavigator);
  //const AppContainer=createAppContainer(AppNavigator);
  