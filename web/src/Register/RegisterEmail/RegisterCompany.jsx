import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import regImg2 from "../regImg2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterCompany() {
	let navigate = useNavigate();
	let [error, setError] = useState();
	const [selectedDate, setSelectedDate] = useState(null);

	const pickDate = (date) => {
		console.warn("A date has been picked: ", date);
		setSelectedDate(date);
		formik.setFieldValue("establishDate", date.toISOString().split("T")[0]);
		formik.handleChange("establishDate");
	};
	function convertData(inputData) {
		const {
			name,
			email,
			password,
			confirmPassword,
			line1,
			line2,
			city,
			postalCode,
			phone,
			enabled,
			field,
			description,
		} = inputData;
		const transformedData = {
			address: {
				line1,
				line2,
				postalCode,
				city,
			},
			confirmPassword,
			email,
			name,
			password,
			phone,
			enabled,
			field,
			description,
		};

		return transformedData;
	}

	let schema = Yup.object({
		name: Yup.string()
			.required("Please enter your company name")
			.min(3, "At least 3 letters")
			.max(30, "At most 30 letters"),
		establishDate: Yup.string().required(
			"Please enter your company establishment year"
		),
		email: Yup.string()
			.required("Please enter your valid email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "At least 6 characters"),
		confirmPassword: Yup.string()
			.required("confirm your password")
			.oneOf([Yup.ref("password")], "Not matching passwords"),
		line1: Yup.string().required("Please enter your address"),
		line2: Yup.string().optional(),
		city: Yup.string().required("Please enter your city"),
		postalCode: Yup.string()
			.matches(/^[0-9]{5}$/, "Invalid postal code")
			.optional(),
		enabled: Yup.boolean().required(),
		phone: Yup.string()
			.matches(/^[0-9]{10}$/, "Invalid phone number")
			.optional(),
		field: Yup.string()
			.required("Please enter your company field")
			.min(3, "At least 3 letters")
			.max(100, "At most 30 letters"),
		description: Yup.string()
			.required("Please enter description about your company")
			.min(3, "At least 3 letters")
			.max(3000, "At most 30 letters"),
	});

	let formik = useFormik({
		initialValues: {
			name: "",
			establishDate: selectedDate ? selectedDate.toLocaleDateString() : "",
			email: "",
			password: "",
			confirmPassword: "",
			line1: "",
			line2: "",
			city: "",
			postalCode: "",
			phone: "",
			enabled: true,
			field: "",
			description: "",
		},
		validationSchema: schema,
		onSubmit: CheckRegData,
	});

	async function CheckRegData(values) {
		try {
			let { data } = await axios.post(
				"http://192.168.1.17:8085/register/company",
				convertData(values)
			);
			// console.log(data)
			Swal.fire({
				position: "center-center",
				icon: "success",
				title: "Your account created successfully!",
				iconColor: "#64b1b6",
				showConfirmButton: false,
				timer: 2300,
			});
			setInterval(() => {
				navigate("/login");
			}, 2310);
		} catch (error) {
			let errorMessage = error.message;
			setError(errorMessage);
		}
	}

	return (
		<div>
			<div className={`${style.registerEmail} d-flex`}>
				<div className={`${style.registerEmailImg} col-5`}>
					<div
						className={`${style.registerDetailsTitle} d-flex align-items-center justify-content-between w-100`}
					>
						<Link className={`${style.projectNameNav} navbar-brand`} to="/">
							CS<span>PP</span>
						</Link>

						<div className="d-flex align-items-center gap-3">
							<h4 className="text-capitalize m-0">already have account?</h4>
							<Link
								className={`${style.getStarted} nav-link text-capitalize`}
								to="/login"
							>
								login
							</Link>
						</div>
					</div>

					<div className={`${style.registerEmailImgbottom}`}>
						<div className={`${style.registerEmailImgDesc}`}>
							<h2 className="text-capitalize pb-1">register as a company</h2>
							<p>Start now and get 30% OFF for each delivery untip Sep 30th.</p>

							<div className={`d-flex flex-column pt-4`}>
								<div
									className={`${style.registerStep} d-flex align-items-top gap-3`}
								>
									<div className="d-flex flex-column justify-content-center gap-1">
										{!formik.errors.name && !formik.errors.email ? (
											<i
												className={`${style.registerStepCheck} fa-regular fa-circle-check mt-1`}
											></i>
										) : (
											<i class="fa-regular fa-circle mt-1"></i>
										)}
										<div className={`${style.registerStepBar} `}></div>
									</div>

									<h3 className="text-capitalize">account info</h3>
								</div>

								<div
									className={`${style.registerStep} d-flex align-items-top gap-3`}
								>
									<div className="d-flex flex-column justify-content-center gap-1">
										{!formik.errors.password &&
										!formik.errors.confirmPassword ? (
											<i
												className={`${style.registerStepCheck} fa-regular fa-circle-check mt-1`}
											></i>
										) : (
											<i class="fa-regular fa-circle mt-1"></i>
										)}
										<div className={`${style.registerStepBar} `}></div>
									</div>

									<h3 className="text-capitalize">password</h3>
								</div>

								<div
									className={`${style.registerStep} d-flex align-items-top gap-3`}
								>
									{!formik.errors.line1 && !formik.errors.city ? (
										<i
											className={`${style.registerStepCheck} fa-regular fa-circle-check mt-1`}
										></i>
									) : (
										<i class="fa-regular fa-circle mt-1"></i>
									)}
									<h3 className="text-capitalize">general information</h3>
								</div>
							</div>
						</div>

						<div className={`${style.registerEmailHelp}`}>
							<h3 className="text-capitalize">need help?</h3>
							<h4>Having a problen in Registration</h4>
							<h4>
								Contact us at:{" "}
								<Link
									className={`${style.registerEmailSupport}`}
									to="mailto:support@CSPP.com"
								>
									support@CSPP.com
								</Link>
							</h4>
						</div>
					</div>

					<img src={regImg2} alt="girl waving" />
				</div>

				<div className={`${style.registerDetailsForm} col-7`}>
					<div
						className={`${style.registerFormTitle} d-flex align-items-center justify-content-center`}
					>
						<h2 className="text-capitalize">create company account</h2>
					</div>
					{error ? (
						<p className={`${style.errors} text-center`}>{error}</p>
					) : (
						""
					)}
					<form onSubmit={formik.handleSubmit}>
						<div className={`${style.regform}`}>
							<div className="d-flex justify-content-center gap-5">
								<div className="col-5">
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="name">
											Company name
										</label>
										<input
											type="text"
											placeholder="Enter your company name"
											name="name"
											value={formik.values.name}
											onChange={formik.handleChange}
											id="name"
											autoComplete="off"
										/>
										{formik.errors.name && formik.touched.name ? (
											<p className={`${style.errors}`}>{formik.errors.name}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="email">
											email address
										</label>
										<input
											type="email"
											placeholder="Enter your email address"
											name="email"
											value={formik.values.email}
											onChange={formik.handleChange}
											id="email"
											autoComplete="off"
										/>
										{formik.errors.email && formik.touched.email ? (
											<p className={`${style.errors}`}>{formik.errors.email}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="password">
											password
										</label>
										<input
											type="password"
											placeholder="Enter your password"
											name="password"
											value={formik.values.password}
											onChange={formik.handleChange}
											id="password"
											autoComplete="off"
										/>
										{formik.errors.password && formik.touched.password ? (
											<p className={`${style.errors}`}>
												{formik.errors.password}
											</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label
											className="text-capitalize"
											htmlFor="confirmPassword"
										>
											confirm password
										</label>
										<input
											type="password"
											placeholder="Confirm your password"
											name="confirmPassword"
											value={formik.values.confirmPassword}
											onChange={formik.handleChange}
											id="confirmPassword"
											autoComplete="off"
										/>
										{formik.errors.confirmPassword &&
										formik.touched.confirmPassword ? (
											<p className={`${style.errors}`}>
												{formik.errors.confirmPassword}
											</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="establishDate">
											Establish Year
										</label>
										<DatePicker
											selected={selectedDate}
											onChange={(date) => pickDate(date)}
											id="establishDate"
											closeOnScroll={true}
											placeholderText="Enter company establisht year"
											fixedHeight
											showYearPicker
											dateFormat="yyyy"
											dropdownMode="select"
											className={"w-100"}
										/>
										{formik.errors.establishDate &&
										formik.touched.establishDate ? (
											<p className={`${style.errors}`}>
												{formik.errors.establishDate}
											</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="description">
											Company description
										</label>
										<textarea
											rows="3"
											placeholder="Enter your company description"
											name="description"
											value={formik.values.description}
											onChange={formik.handleChange}
											id="description"
											autoComplete="off"
											className={`${style.description}`}
										></textarea>

										{formik.errors.description && formik.touched.description ? (
											<p className={`${style.errors}`}>
												{formik.errors.description}
											</p>
										) : (
											""
										)}
									</div>
								</div>

								<div className="col-5">
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="city">
											city
										</label>
										<input
											type="text"
											placeholder="Enter your city"
											name="city"
											value={formik.values.city}
											onChange={formik.handleChange}
											id="city"
											autoComplete="off"
										/>
										{formik.errors.city && formik.touched.city ? (
											<p className={`${style.errors}`}>{formik.errors.city}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="line1">
											address line 1
										</label>
										<input
											type="text"
											placeholder="Enter your address line"
											name="line1"
											value={formik.values.line1}
											onChange={formik.handleChange}
											id="line1"
											autoComplete="off"
										/>
										{formik.errors.line1 && formik.touched.line1 ? (
											<p className={`${style.errors}`}>{formik.errors.line1}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="line2">
											Address line 2
										</label>
										<input
											type="text"
											placeholder="Enter your address line"
											name="line2"
											value={formik.values.line2}
											onChange={formik.handleChange}
											id="line2"
											autoComplete="off"
										/>
										{formik.errors.line2 && formik.touched.line2 ? (
											<p className={`${style.errors}`}>{formik.errors.line2}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="postalCode">
											Postal Code
										</label>
										<input
											type="text"
											placeholder="Enter your address line"
											name="postalCode"
											value={formik.values.postalCode}
											onChange={formik.handleChange}
											id="postalCode"
											autoComplete="off"
										/>
										{formik.errors.postalCode && formik.touched.postalCode ? (
											<p className={`${style.errors}`}>
												{formik.errors.postalCode}
											</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="phone">
											phone number
										</label>
										<input
											type="text"
											placeholder="Enter your phone number"
											name="phone"
											value={formik.values.phone}
											onChange={formik.handleChange}
											id="phone"
											autoComplete="off"
										/>
										{formik.errors.phone && formik.touched.phone ? (
											<p className={`${style.errors}`}>{formik.errors.phone}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="field">
											Company Field
										</label>
										<input
											type="text"
											placeholder="Enter your company field"
											name="field"
											value={formik.values.field}
											onChange={formik.handleChange}
											id="field"
											autoComplete="off"
										/>
										{formik.errors.field && formik.touched.field ? (
											<p className={`${style.errors}`}>{formik.errors.field}</p>
										) : (
											""
										)}
									</div>
								</div>
							</div>
						</div>

						<div className={`mb-0 w-100 position-relative overflow-hidden`}>
							<div
								className={`${style.registerNext} d-flex justify-content-center gap-5`}
							>
								<p className="col-5">
									By clicking Register, you are agree to our{" "}
									<Link className={`${style.registerTermsLink}`} to="/">
										Terms of Service
									</Link>{" "}
									and that you have read our
									<Link className={`${style.registerTermsLink}`} to="/">
										{" "}
										Privacy Policy
									</Link>{" "}
									.{" "}
								</p>
								<div className="col-5">
									<input
										type="submit"
										value="register"
										className={`${style.registerNextLink} nav-link text-capitalize ms-auto`}
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
