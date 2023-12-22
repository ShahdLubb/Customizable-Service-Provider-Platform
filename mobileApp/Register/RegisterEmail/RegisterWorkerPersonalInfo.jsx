import React, { useState, useMemo, useRef, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	Button,
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

export default function RegisterWorkerPersonalInfo({ route }) {
	const { email, password, confirmPassword } = route.params;
	const navigation = useNavigation();
	const [errors, setError] = useState();
	const [companies, setCompanies] = useState([]);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedCompany, setSelectedCompany] = useState(null);
	const radioButtons = useMemo(
		() => [
			{
				id: "1",
				label: "Company Employee",
				value: "option1",
				labelStyle: styles.label,
				description: "how are you there?!",
			},
			{
				id: "2",
				label: "Self-Employed",
				value: "option2",
				labelStyle: styles.label,
			},
		],
		[]
	);

	const [selectedId, setSelectedId] = useState();
	useEffect(() => {
		console.log("changeeee");
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://192.168.1.17:8085/companies");
				setCompanies(data);
				console.log(data);
				setSelectedCompany(data[0].name);
				formik.setFieldValue("companyName", data[0].name);
				formik.handleChange("companyName");
				setError(null);
			} catch (error) {
				const errorMessage = error.message;
				setError(errorMessage);
			}
		};
		fetchData();
	}, [selectedId]);

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
	const pickerRef = useRef();

	function open() {
		pickerRef.current.focus();
	}

	function close() {
		pickerRef.current.blur();
	}
	function convertData(inputData) {
		const {
			fullName,
			dateOfBirth,
			yearsOfExperience,
			email,
			password,
			confirmPassword,
			line1,
			line2,
			city,
			postalCode,
			phone,
			enabled,
			companyName,
		} = inputData;
		const transformedData = {
			address: {
				line1,
				line2,
				postalCode,
				city,
			},
			dateOfBirth,
			yearsOfExperience,
			confirmPassword,
			email,
			fullName,
			password,
			phone,
			enabled,
			companyName,
		};

		return transformedData;
	}

	const schema = Yup.object({
		fullName: Yup.string()
			.required("Please enter your full name")
			.min(3, "At least 3 letters")
			.max(30, "At most 30 letters"),
		dateOfBirth: Yup.string().required("Please enter your Birthday"),
		yearsOfExperience: Yup.string()
			.matches(/^[0-9]$/, "Invalid phone number")
			.required("Please enter your years of experience"),
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
		companyName: Yup.string().optional(),
	});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			dateOfBirth: selectedDate ? selectedDate.toLocaleDateString() : "",
			yearsOfExperience: 0,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			line1: "",
			line2: "",
			city: "",
			postalCode: "",
			phone: "",
			enabled: true,
			companyName: selectedCompany ? selectedCompany : "",
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		try {
			console.log(convertData(values));
			const { data } = await axios.post(
				"http://192.168.1.17:8085/register/employee",
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
									/>
									{formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
										<Text style={styles.errors}>
											{formik.errors.dateOfBirth}
										</Text>
									) : null}
								</View>
								<View style={styles.formField}>
									<Text style={styles.label}>Years of Experience</Text>
									<TextInput
										style={styles.input}
										placeholder="Years of Experience"
										name="yearsOfExperience"
										value={formik.values.yearsOfExperience}
										onChangeText={formik.handleChange("yearsOfExperience")}
										autoCompleteType="yearsOfExperience"
									/>
									{formik.errors.yearsOfExperience &&
									formik.touched.yearsOfExperience ? (
										<Text style={styles.errors}>
											{formik.errors.yearsOfExperience}
										</Text>
									) : null}
								</View>
								<View style={styles.formField}>
									<Text style={styles.label}>{formik.values.companyName}</Text>
									<RadioGroup
										radioButtons={radioButtons}
										onPress={setSelectedId}
										selectedId={selectedId}
										containerStyle={styles.InputwithIcon}
										layout="column"
									/>
									{selectedId === "1" ? (
										<Picker
											selectedValue={selectedCompany}
											prompt="Select your company.."
											onValueChange={(itemValue, itemIndex) => {
												console.log("chaaaaangeee" + itemValue);
												setSelectedCompany(itemValue);
												formik.setFieldValue("companyName", itemValue);
												formik.handleChange("companyName");
											}}
										>
											{companies.map((company) => (
												<Picker.Item
													key={company.id}
													label={company.name}
													value={company.name}
												/>
											))}
										</Picker>
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
									{formik.errors.postalCode && formik.touched.cpostalCodeity ? (
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
						<View style={styles.buttonContainer}>
							<View style={styles.slider}>
								<View style={styles.buttonContainerSliderPage2}></View>
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
