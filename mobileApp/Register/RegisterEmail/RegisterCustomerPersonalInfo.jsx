import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	Button,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./Register.styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

export default function RegisterCustomerPersonalInfo({ route }) {
	const { email, password, confirmPassword } = route.params;
	const navigation = useNavigation();
	const [errors, setError] = useState();
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		setSelectedDate(date);
		formik.setFieldValue("dateOfBirth", date.toISOString().split("T")[0]);
		formik.handleChange("dateOfBirth");
		hideDatePicker();
	};
	function convertData(inputData) {
		const {
			fullName,
			dateOfBirth,
			email,
			password,
			confirmPassword,
			line1,
			line2,
			city,
			postalCode,
			phone,
			enabled,
		} = inputData;
		const transformedData = {
			address: {
				line1,
				line2,
				postalCode,
				city,
			},
			dateOfBirth,
			confirmPassword,
			email,
			fullName,
			password,
			phone,
			enabled,
		};

		return transformedData;
	}

	const schema = Yup.object({
		fullName: Yup.string()
			.required("Please enter your full name")
			.min(3, "At least 3 letters")
			.max(30, "At most 30 letters"),
		dateOfBirth: Yup.string().required("Please enter your Birthday"),
		line1: Yup.string().required("Please enter your address"),
		line2: Yup.string().optional(),
		city: Yup.string().required("Please enter your city"),
		postalCode: Yup.string()
			.matches(/^[0-9]{5}$/, "Invalid postal code")
			.optional(),
		phone: Yup.string()
			.matches(/^[0-9]{10}$/, "Invalid phone number")
			.optional(),
		enabled: Yup.boolean().required(),
	});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			dateOfBirth: selectedDate ? selectedDate.toLocaleDateString() : "",
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			line1: "",
			line2: "",
			city: "",
			postalCode: "",
			phone: "",
			enabled: true,
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		try {
			console.log(convertData(values));
			const { data } = await axios.post(
				"http://192.168.1.3:8085/register/customer",
				convertData(values)
			);
			setTimeout(() => {
				navigation.navigate("Log in");
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
					<View style={styles.registerFormTitleContainer}>
						<Text style={styles.registerFormTitleText}>Personal Info</Text>
						{errors ? <Text style={styles.errors}>{errors}</Text> : null}
					</View>

					<View style={styles.regform}>
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<ScrollView onScroll={Keyboard.dismiss}>
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
											<Text style={styles.errors}>
												{formik.errors.fullName}
											</Text>
										) : null}
									</View>
									<View style={styles.formField}>
										<Text style={styles.label}>Birthday</Text>
										<View style={styles.TextandIcon}>
											<TouchableOpacity
												style={styles.IconContainer}
												onPress={showDatePicker}
											>
												<FontAwesomeIcon
													style={styles.Icon}
													size={20}
													icon={faCalendarDays}
												/>
											</TouchableOpacity>
											<TextInput
												style={
													selectedDate
														? styles.dateInputSelected
														: styles.dateInputNotSelected
												}
												placeholder="Enter your birthday"
												name="dateOfBirth"
												value={formik.values.dateOfBirth}
												editable={false}
											/>
										</View>

										<DateTimePickerModal
											isVisible={isDatePickerVisible}
											mode="date"
											onConfirm={handleConfirm}
											onCancel={hideDatePicker}
											textColor="black
										"
										/>
										{formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
											<Text style={styles.errors}>
												{formik.errors.dateOfBirth}
											</Text>
										) : null}
									</View>
									<View style={styles.formField}>
										<Text style={styles.label}>Address Line 1</Text>
										<TextInput
											style={styles.input}
											placeholder="Address Line 2"
											name="line1"
											value={formik.values.line1}
											onChangeText={formik.handleChange("line1")}
											autoCompleteType="line1"
										/>
										{formik.errors.line1 && formik.touched.line1 ? (
											<Text style={styles.errors}>{formik.errors.line1}</Text>
										) : null}
									</View>
									<View style={styles.formField}>
										<View style={styles.optionalInputContainer}>
											<Text style={styles.labelForOptionalField}>
												Address Line 2
											</Text>
											<Text style={styles.optionalText}>optional</Text>
										</View>
										<TextInput
											style={styles.input}
											placeholder="Address Line 2"
											name="line2"
											value={formik.values.line2}
											onChangeText={formik.handleChange("line2")}
											autoCompleteType="line2"
										/>
										{formik.errors.line2 && formik.touched.line2 ? (
											<Text style={styles.errors}>{formik.errors.line2}</Text>
										) : null}
									</View>
									<View style={styles.formField}>
										<Text style={styles.label}>City</Text>
										<TextInput
											style={styles.input}
											placeholder="Enter your city"
											name="city"
											value={formik.values.city}
											onChangeText={formik.handleChange("city")}
											autoCompleteType="city"
										/>
										{formik.errors.city && formik.touched.city ? (
											<Text style={styles.errors}>{formik.errors.city}</Text>
										) : null}
									</View>
									<View style={styles.formField}>
										<View style={styles.optionalInputContainer}>
											<Text style={styles.labelForOptionalField}>
												Postal Code
											</Text>
											<Text style={styles.optionalText}>optional</Text>
										</View>
										<TextInput
											style={styles.input}
											placeholder="Enter your postal code"
											name="postalCode"
											value={formik.values.postalCode}
											onChangeText={formik.handleChange("postalCode")}
											autoCompleteType="postalCode"
										/>
										{formik.errors.postalCode &&
										formik.touched.cpostalCodeity ? (
											<Text style={styles.errors}>
												{formik.errors.postalCode}
											</Text>
										) : null}
									</View>

									<View style={styles.formField}>
										<View style={styles.optionalInputContainer}>
											<Text style={styles.labelForOptionalField}>
												Phone number
											</Text>
											<Text style={styles.optionalText}>optional</Text>
										</View>
										<View style={styles.TextandIcon}>
											<View style={styles.IconContainer}>
												<FontAwesomeIcon
													style={styles.Icon}
													size={20}
													icon={faPhone}
												/>
											</View>
											<TextInput
												style={styles.InputwithIcon}
												placeholder="Enter your phone number"
												name="phone"
												value={formik.values.phone}
												onChangeText={formik.handleChange("phone")}
											/>
										</View>

										{formik.errors.phone && formik.touched.phone ? (
											<Text style={styles.errors}>{formik.errors.phone}</Text>
										) : null}
									</View>
								</View>
							</ScrollView>
						</TouchableWithoutFeedback>
						<View style={styles.buttonContainer}>
							<View style={styles.slider}>
								<View style={styles.buttonContainerFullSlider}></View>
							</View>
							<TouchableOpacity
								style={styles.submitButton}
								onPress={formik.handleSubmit}
							>
								<Text style={styles.submitButtonText}>Register</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.registerAgree}>
						<Text style={styles.registerAgreeP}>
							By clicking Register, you agree to our{" "}
							<Text style={styles.registerTermsLink}>Terms of Service</Text> and
							that you have read our{" "}
							<Text style={styles.registerTermsLink}>Privacy Policy</Text>.
						</Text>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
