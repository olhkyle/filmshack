import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, RecipeScreen, MeScreen } from '../../screens/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/globalStyle';

const Tab = createBottomTabNavigator();

function MainBottomTabsNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				animation: 'fade',
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.BLACK,
				tabBarInactiveTintColor: colors.GREY[400], // 비활성 탭 색상
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'FilmShack',
					headerShown: true,
					tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} />,
				}}
			/>
			<Tab.Screen
				name="Recipe"
				component={RecipeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <Ionicons name="camera" color={color} size={30} />,
				}}
			/>
			<Tab.Screen
				name="Me"
				component={MeScreen}
				options={{ headerShown: false, tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={24} /> }}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});

export default MainBottomTabsNavigator;
