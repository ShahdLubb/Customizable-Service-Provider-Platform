import React, { useState, useEffect, useContext, useRef } from "react";
import {
	Button,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	FlatList,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Push from "../../generalComponents/push";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-core";
import { SearchBox } from "../../generalComponents/SearchBoxes/SearchBox";
import { Filters } from "../Filters";
import Services from "../../generalComponents/HitServicesView/Services";
import ContentLoader, { Facebook } from "react-content-loader";
import styles from "./CustomerHomer.style";

const searchClient = algoliasearch(
	"80LP28SUOT",
	"6a5b8e3610610c751b8ddfa6bb304b6e"
);
const index = "servicesAndcategories";
const future = { preserveSharedStateOnUnmount: true };

export default function CustomerHome({ navigation }) {
	const [user, setUser] = useState(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const listRef = useRef < FlatList > null;
	const MyLoader = () => <Facebook />;
	function scrollToTop() {
		listRef.current?.scrollToOffset({ animated: false, offset: 0 });
	}
	useEffect(() => {
		const bootstrapAsync = async () => {
			try {
				const storedUser = await SecureStore.getItemAsync("user");
				setUser(JSON.parse(storedUser));
				console.log(user);
			} catch (e) {
				console.error("Error fetching user:", e);
			}
		};

		bootstrapAsync();
	}, []);

	if (user == null) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<InstantSearch
					searchClient={searchClient}
					indexName={index}
					future={future}
				>
					<SearchBox onChange={scrollToTop} />

					<ScrollView>
						<Filters
							isModalOpen={isModalOpen}
							onToggleModal={() => setModalOpen((isOpen) => !isOpen)}
							onChange={scrollToTop}
						/>
						<Services />
					</ScrollView>
				</InstantSearch>
			</View>
		</SafeAreaView>
	);
}
