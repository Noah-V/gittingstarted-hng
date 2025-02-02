import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";
import { DarkTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PageHeaderParams = {
	pageName: string;
};

const ios = Platform.OS === "ios";

const PageHeader: React.FC<PageHeaderParams> = ({ pageName }) => {
	const { top, bottom, right, left } = useSafeAreaInsets();
	return ios ? (
		<View style={[styles.parentContainer, { paddingHorizontal: ios ? left + 20 : 0, paddingTop: ios ? top : 0 }]}>
			<Text style={styles.pageHeaderStyle}>{pageName}</Text>
		</View>
	) : (
		<SafeAreaView style={[styles.parentContainer]}>
			<Text style={styles.pageHeaderStyle}>{pageName}</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	parentContainer: {
		height: 100,
		paddingHorizontal: 20,
	},

	pageHeaderStyle: {
		color: "black",
		fontSize: 20,
	},
});
export default PageHeader;
