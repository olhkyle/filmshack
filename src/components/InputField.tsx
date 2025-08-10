import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { StyleSheet, TextInput, View, TextInputProps, Pressable, Text } from 'react-native';
import { colors } from '../constants/globalStyle';
import { deviceHeight } from '../constants/deviceHeight';
import { mergeRefs } from '../utils';

interface InputFieldProps extends TextInputProps {
	disabled?: boolean;
	error?: string;
}

const InputField = forwardRef(({ disabled = false, error, ...props }: InputFieldProps, ref: ForwardedRef<TextInput>) => {
	const innerRef = useRef<TextInput | null>(null);

	const handlePressInput = () => {
		innerRef.current?.focus();
	};

	return (
		<Pressable onPress={handlePressInput}>
			<View style={[styles.container, disabled && styles.disabled, Boolean(error) && styles.inputError]}>
				<TextInput
					ref={ref ? mergeRefs(innerRef, ref) : innerRef}
					editable={!disabled}
					placeholderTextColor={colors.GREY[500]}
					style={[styles.input, disabled && styles.disabled]}
					autoCapitalize={'none'}
					spellCheck={false}
					autoCorrect={false}
					{...props}
				/>
			</View>
			{error && <Text style={[styles.text, styles.error]}>{error}</Text>}
		</Pressable>
	);
});

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.GREY[200],
		borderRadius: 12,
		padding: deviceHeight >= 700 ? 15 : 10,
	},
	input: {
		fontSize: 16,
		color: colors.BLACK,
		padding: 0,
	},
	disabled: {
		backgroundColor: colors.GREY[200],
		color: colors.GREY[700],
	},
	inputError: {
		borderWidth: 1,
		borderColor: colors.RED[300],
	},
	text: {
		paddingLeft: 4,
	},
	error: {
		color: colors.RED[400],
		fontSize: 12,
		paddingTop: 5,
	},
});

export default InputField;
