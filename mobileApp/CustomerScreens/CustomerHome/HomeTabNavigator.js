import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerHome from "./CustomerHome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalVars } from '../../App.styles';
const Tab = createBottomTabNavigator();
const homeName = "Home";
const chatName = "Chat";
const notificationName = "Notification";
export default function HomeTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline';

                } else if (rn === chatName) {
                    iconName = focused ? 'chatboxes' : 'chatboxes';

                } else if (rn === notificationName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: globalVars.decorColor,
                inactiveTintColor: globalVars.boldGray,
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 }
            }}>
            <Tab.Screen name="Home" component={CustomerHome} />
            <Tab.Screen name="Chat" component={CustomerHome} />
            <Tab.Screen name="Notification" component={CustomerHome} />
        </Tab.Navigator>
    );
}