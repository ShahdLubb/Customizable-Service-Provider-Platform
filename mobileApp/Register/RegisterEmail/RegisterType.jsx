import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import regImg2 from "../regImg2.png";

export default function Register() {
	let navigate = useNavigate();

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
									<h3 className={`${style.welcom}`}>
										we look forward having you with us!
									</h3>
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

				<div
					className={`${style.registerDetailsForm} col-7 d-flex  flex-column align-items-center gap-5`}
				>
					<div
						className={`${style.registerFormTitle} d-flex align-items-center justify-content-center `}
					>
						<h2 className="text-capitalize">
							What best describes how you'll be using the platform?
						</h2>
					</div>

					<div className={` d-flex  flex-column align-items-center `}>
						<p className="d-flex flex-column pb-1">
							Searching for profitionals to serve diverse and exceptional
							services?
						</p>
						<div className="d-flex align-items-center gap-3">
							<Link
								className={`${style.registerNextLink} nav-link text-capitalize ms-auto `}
								to="/register/customer"
							>
								join as Customer
							</Link>
						</div>
					</div>

					<div className={`d-flex  flex-column align-items-center`}>
						<p className="d-flex flex-column pb-1">
							You're skilled in your working field and aim to attract new
							clients?
						</p>
						<div className="d-flex align-items-center gap-3">
							<Link
								className={`${style.registerNextLink} nav-link text-capitalize ms-auto`}
								to="/register/employee"
							>
								join as Employee
							</Link>
						</div>
					</div>

					<div className={`d-flex  flex-column align-items-center`}>
						<p className="d-flex flex-column pb-1">
							you own a company with many employees and provide differnt
							services?
						</p>
						<div className="d-flex align-items-center gap-3">
							<Link
								className={`${style.registerNextLink} nav-link text-capitalize ms-auto`}
								to="/register/company"
							>
								join as Company
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
