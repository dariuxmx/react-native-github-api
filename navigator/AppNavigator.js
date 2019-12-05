import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../screens/Loading';
import HomeScreen from '../screens/HomeScreen';

const stackNavigation = createStackNavigator (
    {
        Loading: LoadingScreen,
        Home: HomeScreen
    },
    {
        initialRouteName: "Loading"
    },
    {
        navigationOptions: {
            headerMode: "none",
            headerStyle: {
                backgroundColor: "#035098"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "normal"
            }
        }
    },
    {
        mode: "modal"
    }
)

const AppNavigator = createAppContainer (stackNavigation);
export default AppNavigator;