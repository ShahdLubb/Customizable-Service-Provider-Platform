import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomerHome from "./CustomerHome";

const Drawer = createDrawerNavigator();

export default function CustomerScreens() {
	return (
		<Drawer.Navigator initialRouteName="Customer Home">
			<Drawer.Screen name="Customer Home" component={CustomerHome} />
		</Drawer.Navigator>
	);
}
