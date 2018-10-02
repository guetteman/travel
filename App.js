import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

Navigation.registerComponent("travel.AuthScreen", () => AuthScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: "travel.AuthScreen",
        title: "Login"
    }
})