import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from "./Register.styles";

export default function RegisterCustomerAccountInfo() {
	const navigation = useNavigation();
	const [errors, setError] = useState();

	const schema = Yup.object({
		email: Yup.string()
			.required("Please enter your valid email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "At least 6 characters"),
		confirmPassword: Yup.string()
			.required("Confirm your password")
			.oneOf([Yup.ref("password")], "Not matching passwords"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		navigation.navigate("Customer Info", values);
	}

	return (
		<KeyboardAvoidingView behavior={"height"}>
			<View style={styles.page}>
				<View style={styles.projectNameNavContainer}>
					<Text style={styles.projectNameNav}>
						CS<Text style={styles.spanText}>PP</Text>
					</Text>
				</View>

				<View style={styles.RegisterView}>
					<View style={styles.registerFormTitleContainer}>
						<Text style={styles.registerFormTitleText}>Account Info</Text>
						{errors ? <Text style={styles.errors}>{errors}</Text> : null}
					</View>

					<View style={styles.regform}>
						<View style={styles.regformFields}>
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
							<View style={styles.formField}>
								<Text style={styles.label}>Confitn Password</Text>
								<TextInput
									style={styles.input}
									placeholder="Confitm your password"
									name="confirmPassword"
									value={formik.values.confirmPassword}
									onChangeText={formik.handleChange("confirmPassword")}
									secureTextEntry
									autoCompleteType="password"
								/>
								{formik.errors.password && formik.touched.password ? (
									<Text style={styles.errors}>
										{formik.errors.confirmPassword}
									</Text>
								) : null}
							</View>
						</View>
						<View style={styles.buttonContainer}>
							<View style={styles.slider}>
								<View style={styles.buttonContainerSlider1}></View>
								<View style={styles.buttonContainerSlider2}></View>
							</View>
							<TouchableOpacity
								style={styles.submitButton}
								onPress={formik.handleSubmit}
							>
								<Text style={styles.submitButtonText}>Next</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* <View style={styles.registerNext}>
					<Text style={styles.errors}>{errors}</Text>

					<View style={styles.registerNext}>
						<Text style={styles.registerNextP}>
							By clicking Register, you agree to our{" "}
							<Text style={styles.registerTermsLink}>Terms of Service</Text> and
							that you have read our{" "}
							<Text style={styles.registerTermsLink}>Privacy Policy</Text>.
						</Text>
						<TouchableOpacity
							style={styles.registerNextLink}
							onPress={formik.handleSubmit}
							activeOpacity={0.8}
						>
							<Text style={styles.registerNextLink}>Register</Text>
						</TouchableOpacity>
					</View>
				</View> */}
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
