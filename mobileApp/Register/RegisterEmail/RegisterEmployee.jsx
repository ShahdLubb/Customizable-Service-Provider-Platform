import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

import styles from "./RegisterEmployee.styles";

export default function RegisterEmployee() {
	const navigation = useNavigation();
	const [error, setError] = useState();

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
		email: Yup.string()
			.required("Please enter your valid email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "At least 6 characters"),
		confirmPassword: Yup.string()
			.required("Confirm your password")
			.oneOf([Yup.ref("password")], "Not matching passwords"),
		location: Yup.string().required("Please enter your location"),
		enabled: Yup.boolean().required(),
	});

	const formik = useFormik({
		initialValues: {
			fullName: "",
			age: "",
			email: "",
			password: "",
			confirmPassword: "",
			location: "",
			enabled: true,
		},
		validationSchema: schema,
		onSubmit: checkRegData,
	});

	async function checkRegData(values) {
		try {
			const { data } = await axios.post(
				"http://192.168.1.27:8085/register/employee",
				values
			);
			Swal.fire({
				position: "center-center",
				icon: "success",
				title: "Your account created successfully!",
				iconColor: "#64b1b6",
				showConfirmButton: false,
				timer: 2300,
			});
			setTimeout(() => {
				navigation.navigate("Login");
			}, 2310);
		} catch (error) {
			const errorMessage = error.message;
			setError(errorMessage);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.registerEmailImg}>
				<View style={styles.registerDetailsTitle}>
					{/* Your existing JSX code for the title */}
				</View>

				<View style={styles.registerEmailImgbottom}>
					{/* Your existing JSX code for the bottom part */}
				</View>

				<Image
					source={require("../regImg2.png")}
					style={styles.registerEmailImgImg}
				/>
			</View>

			<View style={styles.registerDetailsForm}>
				<View style={styles.registerFormTitle}>
					<Text style={styles.registerFormTitleH2}>Create Account</Text>
				</View>

				<View style={styles.regform}>
					{/* Your existing JSX code for the form fields */}
				</View>

				<View style={styles.registerNext}>
					<Text style={styles.errors}>{error}</Text>

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
				</View>
			</View>
		</View>
	);
}
