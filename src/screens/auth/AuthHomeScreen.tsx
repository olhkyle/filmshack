import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authStackNavigations } from '../../constants/stackNavigations';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authStackNavigations.AUTH_HOME>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
	return (
		<SafeAreaView>
			<View>
				<Pressable onPress={() => navigation.navigate(authStackNavigations.LOGIN)}>
					<Text>로그인</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate(authStackNavigations.SIGNUP)}>
					<Text>회원가입</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
