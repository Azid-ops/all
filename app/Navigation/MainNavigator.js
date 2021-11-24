import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ServiceSeeker from '../Screens/ServiceSeeker';
import ServiceProvider from '../Screens/ServiceProvider';
import MaterialProvider from '../Screens/MaterialProvider';
import MainPage from '../Screens/MainScreen';
import SignUp from '../Screens/Signup';
import Data from '../Screens/Service Seeker/Data';
const Navigator = createStackNavigator({
    "Service Seeking Pakistan":MainPage,
    "Login":MainPage,
    "Home": MainPage,
    "Signup":SignUp,
    "Welcome User":Data,
    "Service Seeker":ServiceSeeker,
    "Service Provider":ServiceProvider,
    "Material Provider":MaterialProvider
});

export default createAppContainer(Navigator);