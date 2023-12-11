import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterType from './RegisterType';
import RegisterCustomerAccountInfo from './RegisterCustomerAccountInfo';
import RegisterCustomerPersonalInfo from './RegisterCustomerPersonalInfo';
const Stack = createNativeStackNavigator();
export default function RegisterPagesNavigator() {
    return (
        <Stack.Navigator initialRouteName="Register Type">
            <Stack.Screen name="Register Type" component={RegisterType} options={{ headerShown: false }} />
            <Stack.Screen name="Customer Registration" component={RegisterCustomerAccountInfo} />
            <Stack.Screen name="Customer Info" component={RegisterCustomerPersonalInfo} />
        </Stack.Navigator>
    );
}
