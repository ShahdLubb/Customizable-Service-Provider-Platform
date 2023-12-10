// Home.js
import React from "react";
import { View, ImageBackground } from "react-native";
import Header from "./Header/Header";
import style from "./Home.styles";
// import How from './How/How'
// import Why from './Why/Why'
// import Percents from './Percents/Percents'
// import Features from './Features/Feaatures'
// import AboutUs from './About Us/AboutUs'
// import FAQ from './FAQ/FAQ'
// import Footer from './Footer/Footer'

export default function Home() {
	return (
		<View style={style.home}>
			<Header />
			{/* 			<How />
			<Why />
			<Percents />
			<Features />
			<AboutUs />
			<FAQ />
			<Footer /> */}
		</View>
	);
}
