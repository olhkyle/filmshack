import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import { authStackNavigations } from '../../constants/stackNavigations';
import { colors, font } from '../../constants/globalStyle';

export type AuthStackParamList = {
	[authStackNavigations.AUTH_HOME]: undefined;
	[authStackNavigations.LOGIN]: undefined;
	[authStackNavigations.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: colors.WHITE,
				},
				headerStyle: {
					backgroundColor: colors.GREY[100],
				},
				headerTitleStyle: {
					fontSize: font.SIZE.h7,
				},
			}}>
			<Stack.Screen
				name={authStackNavigations.AUTH_HOME}
				component={AuthHomeScreen}
				options={{
					title: 'ShackPod',
					// headerShown: false,
				}}
			/>
			<Stack.Screen name={authStackNavigations.LOGIN} component={LoginScreen} />
			<Stack.Screen name={authStackNavigations.SIGNUP} component={SignUpScreen} />
		</Stack.Navigator>
	);
}

export default AuthStackNavigator;
