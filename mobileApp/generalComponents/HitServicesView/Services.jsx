import React from "react";
import { useInfiniteHits } from "react-instantsearch-core";
import ServiceView from "../ServiceView/ServiceView.jsx";
import {
	Button,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import styles from "./Services.style";
export default function Services(props) {
	const { hits, sendEvent } = useInfiniteHits(props);
	React.useEffect(() => {}, [hits]);
	return (
		<View>
			{hits.map((hit) => (
				<ServiceView key={hit.id} serviceData={hit}></ServiceView>
			))}
		</View>
	);
}
