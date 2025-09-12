import React from 'react';
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { useQuery } from '@tanstack/react-query';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { bottomTabNavigations } from '../../constants/bottomTabNavigations';

export type bottomTabNavigationsList = {
	[bottomTabNavigations.HOME]: undefined;
	[bottomTabNavigations.RECIPE]: undefined;
	[bottomTabNavigations.ME]: undefined;
};

// type HomeScreenProps = BottomTabScreenProps<bottomTabNavigationsList, typeof bottomTabNavigations.HOME>;

function HomeScreen() {
	// console.log(route.params);

	return (
		<SafeAreaView>
			<Text>Home Pomodoro</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});

export default HomeScreen;
