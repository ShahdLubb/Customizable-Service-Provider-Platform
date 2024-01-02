import React from "react";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";

export default function Profile({ userData, setUserData }) {
	React.useEffect(() => {
		const storedUserData = localStorage.getItem("user");
		if (storedUserData) {
			const parsedUserData = JSON.parse(storedUserData);
			console.log(parsedUserData);
			setUserData(parsedUserData);
		}
	}, [userData]);
	return (
		<div>
			<div className={`${style.profile} d-flex`}>
				<div className={`${style.accountSideBar} pb-5 position-relative`}>
					<div
						className={`${style.accountSideBarTitle} d-flex justify-content-center`}
					>
						<div
							className={`${style.accountSideBarTitleImg} d-flex align-items-center justify-content-center position-absolute`}
						>
							<h3>{userData.fullName}</h3>
						</div>
					</div>

					<div className={`${style.accountSideBarContent}`}>
						<ul className="p-0">
							<li className={`${style.active}`}>
								<Link
									to=""
									className={`${style.sideBarLink} ${style.activeLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">account info</span>
									<i class="fa-solid fa-address-card"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="payment"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">payment method</span>
									<i class="fa-solid fa-hand-holding-dollar"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="myOrders"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">my orders</span>
									<i class="fa-solid fa-cart-arrow-down"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="servicesHistory"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">service history</span>
									<i class="fa-solid fa-boxes-stacked"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="ratings"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">my ratings</span>
									<i class="fa-solid fa-star-half-stroke"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="myMessages"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">messages</span>
									<i class="fa-solid fa-comment-dots"></i>
								</Link>
							</li>
							<li className="">
								<Link
									to="setting"
									className={`${style.sideBarLink} nav-link text-capitalize d-flex justify-content-between align-items-center`}
								>
									<span className="">settings</span>
									<i class="fa-solid fa-gear"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className={`${style.accountContent}`}>
					<div
						className={`${style.accountContentTitle} d-flex align-items-center justify-content-center`}
					>
						<h2 className="text-capitalize">account info</h2>
					</div>

					<div className={`${style.accountContentDetails} d-flex flex-wrap`}>
						{/* <div className={` ${style.formField} d-flex flex-column`}>
                                    <label className='text-capitalize' htmlFor="fullName">full name</label>
                                    <input type="text" placeholder='Enter your full name' name='fullName' value={formik.values.fullName} onChange={formik.handleChange} id='fullName' autoComplete='off'/>
                                    {formik.errors.fullName && formik.touched.fullName ? 
                                    (<p className={`${style.errors}`}>{formik.errors.fullName}</p>)
                                    : ''
                                    }
                                </div>
                                <div className={` ${style.formField} d-flex flex-column`}>
                                    <label className='text-capitalize' htmlFor="age">age</label>
                                    <input type="text" placeholder='Enter your age' name='age' value={formik.values.age} onChange={formik.handleChange} id='age' autoComplete='off'/>
                                    {formik.errors.age && formik.touched.age ? 
                                    (<p className={`${style.errors}`}>{formik.errors.age}</p>)
                                    : ''
                                    }
                                </div>
                                <div className={` ${style.formField} d-flex flex-column`}>
                                    <label className='text-capitalize' htmlFor="location">location</label>
                                    <input type="text" placeholder='Enter your location' name='location' value={formik.values.location} onChange={formik.handleChange} id='location' autoComplete='off'/>
                                    {formik.errors.location && formik.touched.location ? 
                                    (<p className={`${style.errors}`}>{formik.errors.location}</p>)
                                    : ''
                                    }
                                </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
