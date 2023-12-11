import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./Register.styles";
import CustomDatePicker from "../../generalComponents/CustomDatePicker";

export default function RegisterCustomerPersonalInfo({ route }) {
	const navigation = useNavigation();
	const [errors, setError] = useState();

	const { email, password, confirmPassword } = route.params;
	const handleDateChange = (newDate) => {
		console.log("New date in MyComponent2:", newDate);
	};
	const schema = Yup.object({
		fullName: Yup.string()
			.required("Please enter your full name")
			.min(3, "At least 3 letters")
			.max(30, "At most 30 letters"),
		age: Yup.number("Numbers only!")
			.required("Please enter your age")
			.positive("Your age must be more than 0")
			.integer("Years only!")
			.min(1, "Positive numbers only"),
		location: Yup.string().required("Please enter your location"),
		enabled: Yup.boolean().required(),
	});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			age: "",
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			location: "",
			enabled: true,
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		try {
			const { data } = await axios.post(
				"http://192.168.1.27:8085/register/customer",
				values
			);
			setTimeout(() => {
				navigation.navigate("Login");
			}, 2310);
		} catch (error) {
			const errorMessage = error.message;
			setError(errorMessage);
		}
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
					<CustomDatePicker />
					<View style={styles.registerFormTitleContainer}>
						<Text style={styles.registerFormTitleText}>Account Info</Text>
						{errors ? <Text style={styles.errors}>{errors}</Text> : null}
					</View>

					<View style={styles.regform}>
						<ScrollView>
							<View style={styles.regformFields}>
								<View style={styles.formField}>
									<Text style={styles.label}>Full Name</Text>
									<TextInput
										style={styles.input}
										placeholder="Enter your full name"
										name="fullName"
										value={formik.values.fullName}
										onChangeText={formik.handleChange("fullName")}
										autoCapitalize="none"
										autoCompleteType="fullName"
									/>
									{formik.errors.fullName && formik.touched.fullName ? (
										<Text style={styles.errors}>{formik.errors.fullName}</Text>
									) : null}
								</View>
								<View style={styles.formField}>
									<Text style={styles.label}>Birthday</Text>
									<TextInput
										style={styles.input}
										placeholder="Enter your address"
										name="location"
										value={formik.values.location}
										onChangeText={formik.handleChange("location")}
										secureTextEntry
										autoCompleteType="location"
									/>
									{formik.errors.location && formik.touched.location ? (
										<Text style={styles.errors}>
											{formik.errors.passlocationword}
										</Text>
									) : null}
								</View>
								<View style={styles.formField}>
									<Text style={styles.label}>Address</Text>
									<TextInput
										style={styles.input}
										placeholder="Enter your address"
										name="location"
										value={formik.values.location}
										onChangeText={formik.handleChange("location")}
										secureTextEntry
										autoCompleteType="location"
									/>
									{formik.errors.location && formik.touched.location ? (
										<Text style={styles.errors}>
											{formik.errors.passlocationword}
										</Text>
									) : null}
								</View>
							</View>
						</ScrollView>
						<View style={styles.buttonContainer}>
							<View style={styles.slider}>
								<View style={styles.buttonContainerSlider1}></View>
								<View style={styles.buttonContainerSlider2}></View>
							</View>
							<TouchableOpacity
								style={styles.submitButton}
								onPress={formik.handleSubmit}
							>
								<Text style={styles.submitButtonText}>Register</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.registerNext}>
						<Text style={styles.errors}>{errors}</Text>

						<View style={styles.registerNext}>
							<Text style={styles.registerNextP}>
								By clicking Register, you agree to our{" "}
								<Text style={styles.registerTermsLink}>Terms of Service</Text>{" "}
								and that you have read our{" "}
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
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
