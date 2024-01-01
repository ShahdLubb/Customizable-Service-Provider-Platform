import React, { useState, useEffect, useContext, useRef } from "react";
import {
	Button,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	FlatList,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Push from "../generalComponents/push";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-core";
import { SearchBox } from "./SearchBox";
import { InfiniteHits } from "./InfiniteHits";
import { Filters } from "./Filters";
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

	return (
		<View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
			{user ? (
				<>
					<Text style={{ color: "red" }}>{user.fullName}</Text>
					<Text style={{ color: "red" }}>{user.role}</Text>
					<SafeAreaView style={styles.safe}>
						<StatusBar style="light" />
						<View style={styles.container}>
							<InstantSearch
								searchClient={searchClient}
								indexName={index}
								future={future}
							>
								<Configure hitsPerPage={8} />
								<SearchBox onChange={scrollToTop} />

								<Filters
									isModalOpen={isModalOpen}
									onToggleModal={() => setModalOpen((isOpen) => !isOpen)}
									onChange={scrollToTop}
								/>
								<InfiniteHits hitComponent={Hit} />
							</InstantSearch>
						</View>
					</SafeAreaView>
				</>
			) : (
				<Text>Loading user...</Text>
			)}
			<Push />
		</View>
	);
}
function Hit({ hit }) {
	return <Text>{JSON.stringify(hit).slice(0, 100)}</Text>;
}
const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#252b33",
	},
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		flexDirection: "column",
	},
});
