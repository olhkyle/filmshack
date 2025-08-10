import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, ShopScreen } from '../../screens/main';

const Tab = createBottomTabNavigator();

function MainBottomTabsNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} options={{ title: 'FilmShack', headerShown: true }} />
			<Tab.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
			<Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});

export default MainBottomTabsNavigator;
