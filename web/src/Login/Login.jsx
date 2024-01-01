import React, { useState } from "react";
import style from "./Login.module.css";
import { Link, json, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

export default function Login({ userData, setUserData }) {
	let navigate = useNavigate();
	let [errors, setErrors] = useState("");

	let schema = Yup.object({
		email: Yup.string()
			.required("Enter your email")
			.email("Must be a valid email"),
		password: Yup.string()
			.required("Enter your password")
			.min(6, "At least 6 letters")
			.max(16, "At most 16 letters"),
		// .matches(
		// 	/^(?=.*[A-Z])(?!.*[\W_]).*$/,
		// 	"At least one uppercase letter and no special characters"
		// ),
	});

	let formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: schema,
		onSubmit: CheckDataAuth,
	});

	async function CheckDataAuth(values) {
		try {
			let { data } = await axios.post("http://192.168.1.17:8085/login", values);
			console.log(data);
			localStorage.setItem("user", JSON.stringify(data));
			setUserData(data);
			if (data.role === "ROLE_CUSTOMER") {
				navigate("/all-services/1/services");
			} else if (data.role === "ROLE_EMPLOYEE") {
				navigate("/account");
			} else if (data.role === "ROLE_CADMIN") {
				navigate("/account");
			} else {
				navigate("/account");
			}

			setErrors("");
		} catch (error) {
			let errorMessage = error.message;
			setErrors(errorMessage);
			console.log(errorMessage);
		}
	}

	return (
		<div>
			<div className={`${style.login} d-flex`}>
				<div
					className={`${style.loginDetails} col-5 d-flex flex-column align-items-center justify-content-between`}
				>
					<div
						className={`${style.loginDetailsTitle} d-flex align-items-center justify-content-between w-100`}
					>
						<Link className={`${style.projectNameNav} navbar-brand`} to="/">
							CS<span>PP</span>
						</Link>

						<div className="d-flex align-items-center gap-3">
							<h4 className="text-capitalize m-0">new customer?</h4>
							<Link
								className={`${style.getStarted} nav-link text-capitalize`}
								to="/register"
							>
								register now
							</Link>
						</div>
					</div>

					<div className={`${style.loginDetailsForm} col-7 mb-5 pb-5`}>
						<div className={`${style.loginDetailsFormTitle} py-5`}>
							<h2 className="text-center">Log in to your account</h2>
							{errors ? <p className={`${style.errors}`}>{errors}</p> : ""}
						</div>
						<form onSubmit={formik.handleSubmit}>
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
								) : null}
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
									<p className={`${style.errors}`}>{formik.errors.password}</p>
								) : null}
							</div>

							<div className="d-flex align-items-center justify-content-between">
								<input type="submit" value="Login" />
								<Link
									className={`${style.loginForget} text-capitalize`}
									to="forgetPass"
								>
									forgot password?
								</Link>
							</div>
						</form>
					</div>

					<div className={`${style.loginDetailsHelp} pb-5 w-100 text-center`}>
						<h4>Having problems logging in?</h4>
						<h4>
							Contact us at:
							<Link
								className={`${style.loginSupport}`}
								to="mailto:support@CSPP.com"
							>
								support@CSPP.com
							</Link>
						</h4>
					</div>
				</div>

				<div className={`${style.loginImg} col-7`}></div>
			</div>
		</div>
	);
}
