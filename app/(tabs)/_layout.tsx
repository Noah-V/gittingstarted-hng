import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import colors from "@/helpers/colors";

const { width, height } = Dimensions.get("window");

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.buttonBorderColor,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: [styles.tabBarStyle],
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <IconSymbol size={30} name="house.fill" color={color} />,
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBarStyle: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		backgroundColor: colors.greyBorder,
		bottom: 20,
		paddingTop: 10,
		height: 60,
		borderTopWidth: 0,
		width: width * 0.5,
	},
});
