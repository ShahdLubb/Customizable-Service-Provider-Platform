import React, { useEffect } from "react";
import Header from "./Header/Header";
import How from "./How/How";
import Why from "./Why/Why";
import Percents from "./Percents/Percents";
import Features from "./Features/Features";
import AboutUs from "./About Us/AboutUs";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar/Navbar";

export default function Home({ userData, setUserData }) {
	React.useEffect(() => {
		const storedUserData = localStorage.getItem("user");
		if (storedUserData) {
			const parsedUserData = JSON.parse(storedUserData);
			setUserData(parsedUserData);
		}
	}, []);
	return (
		<div>
			<Header userData={userData} setUserData={setUserData} />
			<How />
			<Why />
			<Percents />
			<Features />
			<AboutUs />
			<FAQ />
			<Footer />
		</div>
	);
}
