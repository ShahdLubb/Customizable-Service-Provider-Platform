import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import styles from "./Login.styles";
import AuthContext from "../AuthContext";
export default function Login() {
	const navigation = useNavigation();
	const [errors, setErrors] = useState("");
	const { signIn } = React.useContext(AuthContext);
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
	const saveUserToStorage = async (userData) => {
		try {
			await SecureStore.setItemAsync("user", userData);
			console.log("user saved successfully");
		} catch (error) {
			console.error("Error saving user:", error);
		}
	};
	async function checkDataAuth(values) {
		try {
			const { data } = await axios.post(
				"http://192.168.1.3:8085/login",
				values
			);
			console.log(data);
			saveUserToStorage(JSON.stringify(data));
			signIn(data);
			setErrors("");
			if (data.role === "ROLE_CUSTOMER") {
				navigation.navigate("Customer Screens");
			} else if (data.role === "ROLE_EMPLOYEE") {
				navigation.navigate("Worker Screens");
			} else {
				navigation.navigate("Home");
			}
		} catch (error) {
			const errorMessage = error.message;
			console.log(error.code);
			if (error.code === "ERR_BAD_REQUEST") {
				setErrors("Wrong email or password");
			} else {
				setErrors("something went wrong try after a couple of minutes");
			}
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
					onPress={() => navigation.navigate("RegisterPagesNavigator")}
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
