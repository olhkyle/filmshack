import React from 'react';
import { Pressable, StyleSheet, Text, PressableProps, Dimensions, View } from 'react-native';
import { colors, font } from '../constants/globalStyle';
import { HEIGHT_BREAKPOINT } from '../constants/deviceHeight';

interface CustomButtonProps extends PressableProps {
	label: string;
	variant?: 'solid' | 'neutral' | 'outline' | 'danger';
	size?: 'lg' | 'md' | 'sm' | 'xs';
	inValid?: boolean;
}

// Dimensions.get('screen') or Dimensions.get('window')
// ios 일 때는 screen, window일 때 모두 같지만, android일 때는 조금 상이 (상태표시줄 까지 포함한 높이를 screen 값에 띄워줌)
const deviceHeight = Dimensions.get('screen').height;

function CustomButton({ label, variant = 'solid', size = 'lg', inValid = false, ...props }: CustomButtonProps) {
	return (
		<Pressable
			disabled={inValid}
			style={({ pressed }) => [styles.container, pressed ? styles[`${variant}Pressed`] : styles[variant], inValid && styles.inValid]}
			{...props}>
			<View style={styles[size]}>
				<Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 12,
	},
	solid: {
		backgroundColor: colors.BLACK,
	},
	neutral: {
		backgroundColor: colors.GREY[100],
		borderColor: colors.GREY[200],
		borderWidth: 0.5,
	},
	outline: {
		borderColor: colors.GREY[200],
		borderWidth: 1,
	},
	danger: {
		backgroundColor: colors.RED[200],
	},
	solidPressed: {
		backgroundColor: colors.GREY[900],
	},
	neutralPressed: {
		backgroundColor: colors.GREY[50],
	},
	outlinePressed: {
		backgroundColor: colors.GREY_OPACITY[100],
		borderColor: colors.GREY[800],
	},
	dangerPressed: {
		backgroundColor: colors.RED[100],
	},
	lg: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		minHeight: 52,
		paddingVertical: deviceHeight >= HEIGHT_BREAKPOINT ? 14 : 12,
		paddingHorizontal: deviceHeight >= HEIGHT_BREAKPOINT ? 14 : 12,
	},
	md: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		minHeight: 40,
		paddingVertical: deviceHeight >= HEIGHT_BREAKPOINT ? 10 : 8,
		paddingHorizontal: deviceHeight >= HEIGHT_BREAKPOINT ? 10 : 8,
		fontSize: font.SIZE.p,
	},
	sm: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '35%',
		minHeight: 36,
		paddingVertical: deviceHeight >= HEIGHT_BREAKPOINT ? 8 : 6,
		paddingHorizontal: deviceHeight >= HEIGHT_BREAKPOINT ? 8 : 6,
		fontSize: font.SIZE.sm,
	},
	xs: {
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '25%',
		minHeight: 32,
		paddingVertical: deviceHeight >= HEIGHT_BREAKPOINT ? 6 : 4,
		paddingHorizontal: deviceHeight >= HEIGHT_BREAKPOINT ? 6 : 4,
	},
	text: {
		fontSize: font.SIZE.p,
		fontWeight: font.WEIGHT.bold,
	},
	solidText: {
		color: colors.WHITE,
	},
	neutralText: {
		color: colors.BLACK,
	},
	outlineText: {
		color: colors.BLACK,
	},
	dangerText: {
		color: colors.WHITE,
	},
	inValid: {
		opacity: 0.85,
	},
});

export default CustomButton;
