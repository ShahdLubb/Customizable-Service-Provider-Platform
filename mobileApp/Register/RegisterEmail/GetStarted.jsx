import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./GetStarted.styles";
export default function GetStarted() {
	const navigation = useNavigation();

	const handleGetStarted = () => {
		navigation.navigate("Log in");
	};
	const handleLogIn = () => {
		navigation.navigate("Log in");
	};
	return (
		<View style={styles.page}>
			<View style={styles.RegisterView}>
				<View>
					<View style={styles.projectNameNavContainer}>
						<Text style={styles.projectNameNav}>
							CS<Text style={styles.spanText}>PP</Text>
						</Text>
					</View>
				</View>

				<View style={styles.newCustomerContainer}>
					<Text style={styles.newCustomerText}>Register as New Customer</Text>
					<Text style={styles.newCustomerOfferText}>
						Start now and get 3% OFF for each delivery until September 30th.
					</Text>
					<View style={styles.getStartedButton}>
						<TouchableOpacity
							style={styles.getStartedTouchableButton}
							onPress={() => handleGetStarted()}
						>
							<Text style={styles.getStartedButtonText}>Get Started</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.logInView}>
				<View style={styles.LoginContainer}>
					<Text style={styles.LoginText}>Already Have Account?</Text>
					<View style={styles.LoginButton}>
						<TouchableOpacity
							style={styles.LoginTouchableButton}
							onPress={() => handleLogIn()}
						>
							<Text style={styles.LoginButtonText}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.needHelpView}>
				<Text style={styles.needHelpTitle}>Need Help?</Text>
				<Text style={styles.needHelpMsg}>Having a problem in Registration</Text>
				<Text style={styles.needHelpContact}>
					Contact us at:{" "}
					<Text style={styles.needHelpContactEmail}>support@CSPP.com</Text>
				</Text>
			</View>
		</View>
	);
}
