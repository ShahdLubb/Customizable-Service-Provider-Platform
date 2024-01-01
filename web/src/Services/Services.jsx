import React from "react";
import style from "./Services.module.css";
import Navbar from "../Home/Header/Navbar/Navbar";
import Footer from "../Home/Footer/Footer.jsx";
import ServicesSideBar from "./ServicesSideBar/ServicesSideBar";
import ServicesView from "./ServicesView/ServicesView.jsx";
import PathBar from "./PathBar/PathBar.jsx";
import img1 from "./portrait-man-cleaning-his-house (1).jpg";
import img2 from "./portrait-man-cleaning-his-house (2).jpg";
import img3 from "./young-female-cleaner-showing-detergent-spray-bottle.jpg";

export default function Services({ allServices, userData, setUserData }) {
	React.useEffect(() => {
		const storedUserData = localStorage.getItem("user");
		if (storedUserData) {
			const parsedUserData = JSON.parse(storedUserData);
			setUserData(parsedUserData);
		}
	}, []);
	return (
		<div>
			<Navbar userData={userData} setUserData={setUserData} />

			<div className={`${style.services}`}>
				<div className={`${style.servicesImg}`}>
					<div
						id="servicesImgSlideShow"
						className="carousel slide carousel-fade"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="2500">
								<img src={img1} className="" alt="..." />
							</div>
							<div className="carousel-item" data-bs-interval="2500">
								<img src={img2} className="" alt="..." />
							</div>
							<div className="carousel-item" data-bs-interval="2500">
								<img src={img3} className="" alt="..." />
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#servicesImgSlideShow"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#servicesImgSlideShow"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className={`${style.servicesBathBar} my-5`}>
					{/* <PathBar /> */}
				</div>

				<div className={`${style.servicesMiddle} d-flex gap-5 mb-5`}>
					<div className={`${style.servicesSideBarGeneral} col-2`}>
						<ServicesSideBar />
					</div>

					<div className=" w-100">
						<ServicesView allServices={allServices} />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
