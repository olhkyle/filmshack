interface ValidateTargetValues {
  email: string;
  password: string;
}

function validateUser(values: ValidateTargetValues) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8-20자 사이로 입력해 주세요';
  }

  return errors;
}

function validateLogin(values: ValidateTargetValues) {
  return validateUser(values);
}

function validateSignUp(
  values: ValidateTargetValues & {passwordConfirm: string},
) {
  const errors = validateUser(values);
  const signUpErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signUpErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
  }

  return signUpErrors;
}

export {validateSignUp, validateLogin};
