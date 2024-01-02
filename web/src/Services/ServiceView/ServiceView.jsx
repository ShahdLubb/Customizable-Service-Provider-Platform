import React from "react";
import style from "./ServicesView.module.css";
import { Link } from "react-router-dom";
import serviceImg from "./depressed-sad-woman-makes-suicide-gesture-has-much-work-around-house-dressed-casual-apron-does-washing-during-weekend-hangs-clean-clothes-poses-indoor.jpg";

export default function ServiceView({ hit }) {
	let service = JSON.parse(JSON.stringify(hit));
	return (
		<div className={`${style.servicesViewItem}`}>
			<div className={`${style.servicesItemImg}`}>
				<Link to={`${service.id}`}>
					<img
						src={`http://192.168.1.17:8085/${service.image.imageName}`}
						alt={service.image.imageName}
					/>
				</Link>
			</div>

			<div className={`${style.servicesItemDetails} px-3 pt-3`}>
				<div className={`${style.servicesItemDetailsTitle}`}>
					<Link
						to={`${service.id}`}
						className={`${style.serviceName} text-capitalize d-block`}
					>
						{service.name}
					</Link>
					<Link
						to={`${service.category.company.id}`}
						className={`${style.companyName} text-capitalize`}
					>
						{service.category.company.name}
					</Link>
				</div>

				<div className={`${style.servicesItemDetailsDesc} `}>
					<p>{service.description}</p>
				</div>

				<div
					className={`${style.servicesItemDetailsInfo} d-flex align-items-center justify-content-between`}
				>
					{/* <h3 className='text-capitalize pt-2'>availability</h3> */}
					<div className="">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-regular fa-star-half-stroke"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<Link
						className={`${style.serviceBook} mt-1 text-center nav-link text-capitalize`}
						to={`${service.id}/book`}
					>
						Book now!
					</Link>
				</div>
			</div>
		</div>
	);
}
