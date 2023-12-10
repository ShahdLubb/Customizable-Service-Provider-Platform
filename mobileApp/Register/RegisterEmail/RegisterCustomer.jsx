import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import regImg2 from "../regImg2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

export default function RegisterCustomer() {
	let navigate = useNavigate();
	let [error, setError] = useState();

	let schema = Yup.object({
		fullName: Yup.string()
			.required("Please enter your full name")
			.min(3, "At least 3 letters")
			.max(30, "At most 30 letters"),
		age: Yup.number("Numbers only!")
			.required("Please enter your age")
			.positive("Your age must be more than 0")
			.integer("Years only!")
			.min(1, "Psotive numbers only"),
		email: Yup.string()
			.required("Please enter your valid email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Please enter your password")
			.min(6, "At least 6 characters"),
		confirmPassword: Yup.string()
			.required("confirm your password")
			.oneOf([Yup.ref("password")], "Not matching passwords"),
		location: Yup.string().required("Please enter your location"),
		enabled: Yup.boolean().required(),
	});

	let formik = useFormik({
		initialValues: {
			fullName: "",
			age: "",
			email: "",
			password: "",
			confirmPassword: "",
			location: "",
			enabled: "true",
		},
		validationSchema: schema,
		onSubmit: CheckRegData,
	});

	async function CheckRegData(values) {
		try {
			let { data } = await axios.post(
				"http://192.168.1.27:8085/register/customer",
				values
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
							<h4 className="text-capitalize m-0">already a customer?</h4>
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
							<h2 className="text-capitalize pb-1">register as new customer</h2>
							<p>Start now and get 30% OFF for each delivery untip Sep 30th.</p>

							<div className={`d-flex flex-column pt-4`}>
								<div
									className={`${style.registerStep} d-flex align-items-top gap-3`}
								>
									<div className="d-flex flex-column justify-content-center gap-1">
										{!formik.errors.fullName && !formik.errors.email ? (
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
									{!formik.errors.location && !formik.errors.age ? (
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
						<h2 className="text-capitalize">create account</h2>
					</div>

					<form onSubmit={formik.handleSubmit} className="">
						<div className={`${style.regform}`}>
							<div className="d-flex justify-content-center gap-5">
								<div className="col-5">
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="fullName">
											full name
										</label>
										<input
											type="text"
											placeholder="Enter your full name"
											name="fullName"
											value={formik.values.fullName}
											onChange={formik.handleChange}
											id="fullName"
											autoComplete="off"
										/>
										{formik.errors.fullName && formik.touched.fullName ? (
											<p className={`${style.errors}`}>
												{formik.errors.fullName}
											</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="age">
											age
										</label>
										<input
											type="text"
											placeholder="Enter your age"
											name="age"
											value={formik.values.age}
											onChange={formik.handleChange}
											id="age"
											autoComplete="off"
										/>
										{formik.errors.age && formik.touched.age ? (
											<p className={`${style.errors}`}>{formik.errors.age}</p>
										) : (
											""
										)}
									</div>
									<div className={` ${style.formField} d-flex flex-column`}>
										<label className="text-capitalize" htmlFor="location">
											location
										</label>
										<input
											type="text"
											placeholder="Enter your location"
											name="location"
											value={formik.values.location}
											onChange={formik.handleChange}
											id="location"
											autoComplete="off"
										/>
										{formik.errors.location && formik.touched.location ? (
											<p className={`${style.errors}`}>
												{formik.errors.location}
											</p>
										) : (
											""
										)}
									</div>
								</div>

								<div className="col-5">
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
								</div>
							</div>

							{error ? (
								<p className={`${style.errors} text-center`}>{error}</p>
							) : (
								""
							)}
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
