import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WorkerHome from "./WorkerHome";

const Drawer = createDrawerNavigator();

export default function WorkerScreens() {
	return (
		<Drawer.Navigator initialRouteName="Worker Home">
			<Drawer.Screen name="Worker Home" component={WorkerHome} />
		</Drawer.Navigator>
	);
}
