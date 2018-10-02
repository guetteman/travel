import { Navigation } from 'react-native-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome5';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("map", 30),
        Icon.getImageSource("share", 30)
    ]). then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "travel.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0]
                },
                {
                    screen: "travel.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;