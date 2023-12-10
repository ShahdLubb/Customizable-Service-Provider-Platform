// About.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./About.styles";

export default function About() {
	const navigation = useNavigation();

	const handleGetStarted = () => {
		navigation.navigate("Get started");
	};

	return (
		<View style={[styles.about, styles.textStart]}>
			<Text style={styles.heading}>Powering your journey, on your terms.</Text>
			<Text style={styles.subheading}>On-Demand cleaning service.</Text>

			<View style={styles.aboutButton}>
				<TouchableOpacity
					style={styles.aboutLink}
					onPress={() => handleGetStarted()}
				>
					<Text style={styles.aboutLinkText}>Get Started</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.aboutButtonText}>
				Start now and get 3% OFF for each delivery until September 30th.
			</Text>
		</View>
	);
}
