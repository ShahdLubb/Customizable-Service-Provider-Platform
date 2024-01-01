// Home.js
import React from "react";
import { View, ImageBackground } from "react-native";
import Header from "./Header/Header";
import style from "./Home.styles";

export default function Home() {
	return (
		<View style={style.home}>
			<Header />
		</View>
	);
}
