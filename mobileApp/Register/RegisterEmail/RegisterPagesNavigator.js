import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterType from './RegisterType';
import RegisterCustomerAccountInfo from './RegisterCustomerAccountInfo';
import RegisterCustomerPersonalInfo from './RegisterCustomerPersonalInfo';
import RegisterWorkerAccountInfo from './RegisterWorkerAccountInfo';
import RegisterWorkerPersonalInfo from './RegisterWorkerPersonalInfo';
import RegisterCompanyAccountInfo from './RegisterCompanyAccountInfo';
import RegisterCompanyPersonalInfo from './RegisterCompanyPersonalInfo';
const Stack = createNativeStackNavigator();
export default function RegisterPagesNavigator() {
    return (
        <Stack.Navigator initialRouteName="Register Type">
            <Stack.Screen name="Register Type" component={RegisterType} options={{ headerShown: false }} />
            <Stack.Screen name="Customer Registration" component={RegisterCustomerAccountInfo} />
            <Stack.Screen name="Customer Info" component={RegisterCustomerPersonalInfo} />
            <Stack.Screen name="Worker Registration" component={RegisterWorkerAccountInfo} />
            <Stack.Screen name="Worker Info" component={RegisterWorkerPersonalInfo} />
            <Stack.Screen name="Company Registration" component={RegisterCompanyAccountInfo} />
            <Stack.Screen name="Company Info" component={RegisterCompanyPersonalInfo} />
        </Stack.Navigator>
    );
}
