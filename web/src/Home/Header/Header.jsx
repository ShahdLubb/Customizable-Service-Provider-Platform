import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import style from "./Header.module.css";

export default function Home({ userData, setUserData }) {
	return (
		<div>
			<div className={`${style.home}`}>
				<Navbar userData={userData} setUserData={setUserData} />

				<div className={`${style.homeAbout} ${style.container}`}>
					<About />
				</div>
			</div>
		</div>
	);
}
