import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';
import CustomButton from '../../components/CustomButton';

function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const {values, touched, errors, getTextInputProps} = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });
  // console.log('useForm', errors);
  const handleSubmit = () => {
    console.log('here', values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={errors.email}
          inputMode="email"
          touched={touched.email}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={errors.password}
          touched={touched.password}
          returnKeyType="join"
          blurOnSubmit={false}
          onSubmitEditing={handleSubmit}
          {...getTextInputProps('password')}
          secureTextEntry
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="lg"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
