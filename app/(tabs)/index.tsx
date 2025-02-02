import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import PageHeader from "@/components/PageHeader";
import colors from "@/helpers/colors";

const index = () => {
	return (
		<>
			<PageHeader pageName="Git-ting Started" />
			<View style={styles.parentContainer}>
				<View style={{ height: 100 }}>
					<Link href={"https://github.com/Noah-V/gittingstarted-hng"} style={styles.button} asChild>
						<TouchableOpacity>
							<Text>Go to Github</Text>
						</TouchableOpacity>
					</Link>
				</View>
				<View style={{ height: 100 }}>
					<Link href={"http://hng.tech/hire/react-native-developers"} style={styles.button} asChild>
						<TouchableOpacity>
							<Text>Go to HNG React Native Backlink</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		backgroundColor: colors.mainColor,
		padding: 10,
		borderRadius: 20,
	},
});

export default index;
