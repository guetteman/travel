import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("travel.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("travel.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("travel.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("travel.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("travel.SideDrawer", () => SideDrawerScreen, store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: "travel.AuthScreen",
        title: "Login"
    }
})