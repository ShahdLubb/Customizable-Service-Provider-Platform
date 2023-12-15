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
			<Text style={styles.heading}>Get your needs, on your terms.</Text>
			<Text style={styles.subheading}>Diverse On-Demand services.</Text>

			<View style={styles.aboutButton}>
				<TouchableOpacity
					style={styles.aboutLink}
					onPress={() => handleGetStarted()}
				>
					<Text style={styles.aboutLinkText}>Get Started</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.aboutButtonText}>
				Start now and get 30% OFF for new services on the first month.
			</Text>
		</View>
	);
}
