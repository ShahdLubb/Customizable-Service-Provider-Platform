import React from "react";
import {
	View,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	TouchableHighlight,
	Image,
	Text,
	Platform,
	ScrollView,
	Pressable,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings"; // for rating and feedback
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Service.style";
import { Card, Button, Icon } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShekelSign } from "@fortawesome/free-solid-svg-icons/faShekelSign";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
export default function ServiceView({ serviceData }) {
	let service = JSON.parse(JSON.stringify(serviceData));
	console.log(service);

	return (
		<View>
			<TouchableOpacity onPress={() => console.log("go to service")}>
				<Card containerStyle={styles.Card} wrapperStyle={styles.serviceView}>
					<View style={styles.imageView}>
						<Card.Image
							style={styles.serviceImage}
							source={{
								uri: `http://192.168.1.3:8085/${service.image.imageName}`,
							}}
							resizeMode="cover"
						/>
					</View>
					<View style={styles.descriptionView}>
						<View style={styles.ServiceName}>
							<Text style={styles.ServiceNameText}>{service.name}</Text>
						</View>
						<View style={styles.providerLink}>
							<TouchableOpacity>
								<View style={styles.providerNamewithIcon}>
									<Text style={styles.providerNameText}>
										{service.category.company.name}{" "}
									</Text>
									<FontAwesomeIcon icon={faChevronRight} size={10} />
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.priceRatingBooking}>
							<View style={styles.priceAndRating}>
								<View style={styles.serviceRating}>
									<AirbnbRating
										ratingContainerStyle={styles.ratingValue}
										size={15}
										reviewSize={20}
										isDisabled
										defaultRating={service.rating}
										showRating={false}
									/>
								</View>
								<View style={styles.servicePrice}>
									<Text style={styles.priceLabel}>~Price:</Text>
									<Text style={styles.price}> {service.avgPrice} </Text>
									<FontAwesomeIcon size="12" icon={faShekelSign} />
								</View>
							</View>
							<View style={styles.bookNowButtonOuterView}>
								<View style={styles.bookNowButtonView}>
									<TouchableOpacity
										onPress={() => console.log("book now clicked")}
									>
										<View style={styles.bookNowButton}>
											<Text style={styles.bookNowButtonText}>Book Now!</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</Card>
			</TouchableOpacity>
		</View>
	);
}
