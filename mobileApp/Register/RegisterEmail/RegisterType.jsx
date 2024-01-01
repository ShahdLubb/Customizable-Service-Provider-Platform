import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./RegisterType.styles"; // Import your React Native styles
const Stack = createNativeStackNavigator();
export default function RegisterType() {
	const navigation = useNavigation();

	return (
		<View style={styles.page}>
			<View>
				<View style={styles.projectNameNavContainer}>
					<Text style={styles.projectNameNav}>
						CS<Text style={styles.spanText}>PP</Text>
					</Text>
				</View>
			</View>
			<View style={styles.RegisterView}>
				<View style={styles.registerTypeView}>
					<View>
						<TouchableOpacity
							style={styles.registerTypeNextContainer}
							onPress={() => navigation.navigate("Customer Registration")}
							activeOpacity={0.8}
						>
							<View style={styles.IconTypeContainer}>
								<Text style={styles.registerTypeText}>Join as Customer </Text>
								<FontAwesomeIcon
									icon={faChevronRight}
									size={20}
									style={styles.rightArrowIcon}
								/>
							</View>
							<Text style={styles.registerTypeDescriptionText}>
								Searching for professionals to serve diverse and exceptional
								services?
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.registerTypeView}>
					<View>
						<TouchableOpacity
							style={styles.registerTypeNextContainer}
							onPress={() => navigation.navigate("Worker Registration")}
							activeOpacity={0.8}
						>
							<View style={styles.IconTypeContainer}>
								<Text style={styles.registerTypeText}>Join as Worker </Text>
								<FontAwesomeIcon
									icon={faChevronRight}
									size={20}
									style={styles.rightArrowIcon}
								/>
							</View>
							<Text style={styles.registerTypeDescriptionText}>
								You're skilled in your working field and aim to attract new
								clients?
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
