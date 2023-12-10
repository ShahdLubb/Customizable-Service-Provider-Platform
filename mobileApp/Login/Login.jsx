import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./Login.styles"; // React Native styles for your component

export default function Login({ route }) {
	const { decodeUserData } = route.params;
	const navigation = useNavigation();
	const [errors, setErrors] = useState("");

	const schema = Yup.object({
		email: Yup.string()
			.required("Enter your email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Enter your password")
			.min(6, "At least 6 letters")
			.max(16, "At most 16 letters"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: schema,
		onSubmit: checkDataAuth,
	});
	const saveTokenToStorage = async (token) => {
		try {
			await AsyncStorage.setItem("userToken", token);
			console.log("Token saved successfully");
		} catch (error) {
			console.error("Error saving token:", error);
		}
	};
	async function checkDataAuth(values) {
		try {
			const { data } = await axios.post(
				"http://192.168.1.27:8085/login",
				values
			);
			await saveTokenToStorage(data.access_token);
			decodeUserData();
			setErrors("");
			navigation.navigate("Home");
		} catch (error) {
			const errorMessage = error.message;
			setErrors(errorMessage);
			console.log(error);
			console.log(errorMessage);
		}

		console.log("authenticated");
	}

	return (
		<View style={styles.loginDetails}>
			<View style={styles.projectNameNavContainer}>
				<Text style={styles.projectNameNav}>
					CS<Text style={styles.spanText}>PP</Text>
				</Text>
			</View>

			<View style={styles.loginDetailsForm}>
				<View style={styles.loginDetailsFormTitle}>
					<Text style={styles.loginDetailsFormTitleText}>
						Log in to your account
					</Text>
					{errors ? <Text style={styles.errors}>{errors}</Text> : null}
				</View>
				<View style={styles.formField}>
					<Text style={styles.label}>Email Address</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter your email address"
						name="email"
						value={formik.values.email}
						onChangeText={formik.handleChange("email")}
						autoCapitalize="none"
						autoCompleteType="email"
					/>
					{formik.errors.email && formik.touched.email ? (
						<Text style={styles.errors}>{formik.errors.email}</Text>
					) : null}
				</View>

				<View style={styles.formField}>
					<Text style={styles.label}>Password</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter your password"
						name="password"
						value={formik.values.password}
						onChangeText={formik.handleChange("password")}
						secureTextEntry
						autoCompleteType="password"
					/>
					{formik.errors.password && formik.touched.password ? (
						<Text style={styles.errors}>{formik.errors.password}</Text>
					) : null}
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.submitButton}
						onPress={formik.handleSubmit}
					>
						<Text style={styles.submitButtonText}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.loginForget}
						onPress={() => navigation.navigate("ForgetPass")}
					>
						<Text style={styles.loginForgetText}>Forgot Password?</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.newCustomerContainer}>
				<Text style={styles.newCustomerText}>Are you a new customer?</Text>
				<TouchableOpacity
					style={styles.getStarted}
					onPress={() => navigation.navigate("RegisterEmail")}
				>
					<Text style={styles.getStartedText}>Register Now</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.loginDetailsHelp}>
				<Text style={styles.loginDetailsHelpText}>
					Having problems logging in?
				</Text>
				<Text style={styles.loginSupport}>
					Contact us at:{" "}
					<Text style={styles.loginSupportLink}>support@CSPP.com</Text>
				</Text>
			</View>
		</View>
	);
}
