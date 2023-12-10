import React from "react";
import { View, ImageBackground } from "react-native";
import About from "./About/About";
import HomeStyles from "./Header.style";
export default function Home() {
	return (
		<View style={HomeStyles.home}>
			<View style={HomeStyles.home}>
				<ImageBackground
					source={require("../../public/images/home.png")} // Adjust the image path as needed
					style={HomeStyles.homeImg}
				></ImageBackground>
				<View style={HomeStyles.home}>
					<View style={HomeStyles.homeAbout}>
						<About />
					</View>
				</View>
			</View>
		</View>
	);
}
