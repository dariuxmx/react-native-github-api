import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loading from '../screens/Loading';
import Home from '../screens/HomeScreen';
import ListRepos from '../screens/ListRepos';

const stackNavigation = createStackNavigator (
    {
        LoadingScreen: Loading,
        HomeScreen: Home,
        ListReposScreen: ListRepos
    },
    {
        initialRouteName: "LoadingScreen"
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