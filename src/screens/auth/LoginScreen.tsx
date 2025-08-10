import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomButton, InputField } from '../../components';
import { loginSchema, type LoginSchema } from '../../constants/schema';

const LoginScreen = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const passwordRef = useRef<TextInput | null>(null);
	const onSubmit = (data: LoginSchema) => {
		console.log('here', data);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<Controller
					name="email"
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { value, onChange, onBlur } }) => (
						<InputField
							inputMode="email"
							placeholder="your@example.com"
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							error={errors.email?.message}
							returnKeyType="next"
							submitBehavior="submit"
							onSubmitEditing={() => passwordRef.current?.focus()}
							autoFocus
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					rules={{
						required: true,
						maxLength: 20,
					}}
					render={({ field: { value, onChange, onBlur } }) => (
						<InputField
							ref={passwordRef}
							placeholder="비밀번호"
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							error={errors.password?.message}
							returnKeyType="join"
							textContentType="oneTimeCode"
							secureTextEntry
						/>
					)}
				/>
				{/* <InputField
					inputMode="email"
					placeholder="이메일"
					error={errors.email}
					touched={touched.email}
					returnKeyType="next"
					submitBehavior="submit"
					onSubmitEditing={() => passwordRef.current?.focus()}
					autoFocus
					{...getTextInputProps('email')}
				/> */}
			</View>
			<CustomButton label={'Login'} variant={'solid'} size={'lg'} onPress={handleSubmit(onSubmit)} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 16,
		margin: 30,
	},
	inputContainer: {
		gap: 16,
	},
});

export default LoginScreen;
