import React, { useState, useEffect, useContext } from "react";
import { Button, View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
export default function WorkerHome({ navigation }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const bootstrapAsync = async () => {
			try {
				const storedUser = await SecureStore.getItemAsync("user");
				setUser(JSON.parse(storedUser));
				console.log(user);
			} catch (e) {
				console.error("Error fetching user:", e);
			}
		};

		bootstrapAsync();
	}, []);

	return (
		<View>
			{user ? (
				<>
					<Text style={{ color: "red" }}>{user.fullName}</Text>
					<Text style={{ color: "red" }}>{user.role}</Text>
				</>
			) : (
				<Text>Loading user...</Text>
			)}
		</View>
	);
}
