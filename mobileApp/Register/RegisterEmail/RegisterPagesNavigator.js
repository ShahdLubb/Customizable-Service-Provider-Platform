import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterType from './RegisterType';
import RegisterCustomerAccountInfo from './RegisterCustomerAccountInfo';
import RegisterCustomerPersonalInfo from './RegisterCustomerPersonalInfo';
import RegisterWorkerAccountInfo from './RegisterWorkerAccountInfo';
import RegisterWorkerPersonalInfo from './RegisterWorkerPersonalInfo';
import RegisterWorkerWorkInfo from './RegisterWorkerWorkInfo';

const Stack = createNativeStackNavigator();
export default function RegisterPagesNavigator() {
    return (
        <Stack.Navigator initialRouteName="Register Type" screenOptions={{ headerBackTitleVisible: false }} >
            <Stack.Screen name="Register Type" component={RegisterType} options={{ headerShown: false }} />
            <Stack.Screen name="Customer Registration" component={RegisterCustomerAccountInfo} />
            <Stack.Screen name="Customer Info" component={RegisterCustomerPersonalInfo} />
            <Stack.Screen name="Worker Registration" component={RegisterWorkerAccountInfo} />
            <Stack.Screen name="Worker Info" component={RegisterWorkerPersonalInfo} />
            <Stack.Screen name="Work Info" component={RegisterWorkerWorkInfo} />

        </Stack.Navigator>
    );
}
