import React from "react";
import { View, ImageBackground } from "react-native";
import About from "./About/About";
import HeaderStyles from "./Header.style";
export default function Home() {
	return (
		<View style={HeaderStyles.home}>
			<View style={HeaderStyles.HomeImageContainer}>
				<ImageBackground
					source={require("../../public/images/home.jpg")} // Adjust the image path as needed
					style={HeaderStyles.homeImg}
				></ImageBackground>
			</View>

			<View style={HeaderStyles.homeAbout}>
				<About />
			</View>
		</View>
	);
}
