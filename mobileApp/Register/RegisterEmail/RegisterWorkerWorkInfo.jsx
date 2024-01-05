import React, { useState, useMemo, useRef, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import { globalVars } from "../../App.styles";
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

export default function RegisterWorkerWorkInfo({ route }) {
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
	} = route.params;
	const navigation = useNavigation();
	const [errors, setError] = useState();
	const [companies, setCompanies] = useState([]);
	const [selectedCompany, setSelectedCompany] = useState(null);
	const radioButtons = useMemo(
		() => [
			{
				id: "1",
				label: "Company Employee",
				value: "option1",
				labelStyle: styles.radioButtonLabel,
				description: "you work for a company that's registerd in this platform",
				descriptionStyle: styles.radioButtonDescription,
			},
			{
				id: "2",
				label: "Self-Employed",
				value: "option2",
				labelStyle: styles.radioButtonLabel,
				description:
					"you work as individual professional, freelancer, or a small business owner",
				descriptionStyle: styles.radioButtonDescription,
			},
		],
		[]
	);

	const [selectedId, setSelectedId] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://192.168.1.3:8085/companies");
				setCompanies(data);
				setError(null);
			} catch (error) {
				const errorMessage = error.message;
				setError(errorMessage);
			}
		};
		fetchData();
		if (selectedId === "1") {
			// Company Employee
			console.log("Company Employee");
			setSelectedCompany(companies[0].name);
			formik.setFieldValue("companyName", companies[0].name);
			formik.handleChange("companyName");
		} else {
			// Self-Employed
			console.log("Self-Employed");
			setSelectedCompany("");
			formik.setFieldValue("companyName", "");
			formik.handleChange("companyName");
		}
	}, [selectedId]);

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
		yearsOfExperience: Yup.string()
			.matches(/^[0-9]$/, "years of experience should be a valid number")
			.required("Please enter your years of experience"),
		companyName: Yup.string().optional(),
	});

	const formik = useFormik({
		initialValues: {
			fullName: fullName,
			dateOfBirth: dateOfBirth,
			yearsOfExperience: 0,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			line1: line1,
			line2: line2,
			city: city,
			postalCode: postalCode,
			phone: phone,
			enabled: true,
			companyName: "",
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		try {
			console.log(convertData(values));
			const { data } = await axios.post(
				"http://192.168.1.3:8085/register/employee",
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
						<Text style={styles.registerFormTitleText}>Work Details</Text>
						{errors ? <Text style={styles.errors}>{errors}</Text> : null}
					</View>

					<View style={styles.regform}>
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<ScrollView onScroll={Keyboard.dismiss}>
								<View style={styles.regformFields}>
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
									<View style={styles.employmentStatusformField}>
										<Text style={styles.label}> Your Employment Status: </Text>
										<RadioGroup
											radioButtons={radioButtons}
											onPress={setSelectedId}
											selectedId={selectedId}
											containerStyle={styles.radioButtonContainer}
											layout="column"
										/>
									</View>
									{selectedId === "1" ? (
										<View style={styles.formField}>
											<Text style={styles.label}>
												Select the company you work for:
											</Text>
											<View style={styles.pickerView}>
												<Picker
													selectedValue={selectedCompany}
													prompt="Select your company.."
													style={styles.picker}
													itemStyle={styles.pickerItem}
													themeVariant="dark"
													onValueChange={(itemValue, itemIndex) => {
														setSelectedCompany(itemValue);
														formik.setFieldValue("companyName", itemValue);
														formik.handleChange("companyName");
													}}
													dropdownIconColor="white"
												>
													{companies.map((company) => (
														<Picker.Item
															key={company.id}
															label={company.name}
															value={company.name}
															style={styles.pickerItem}
														/>
													))}
												</Picker>
											</View>
										</View>
									) : null}
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
