import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  Dimensions,
  View,
} from 'react-native';
import {colors} from '../constants/globalStyle';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'lg' | 'md';
  inValid?: boolean;
}

// Dimensions.get('screen') or Dimensions.get('window')
// ios 일 때는 screen, window일 때 모두 같지만, android일 때는 조금 상이 (상태표시줄 까지 포함한 높이를 screen 값에 띄워줌)
const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
  label,
  variant = 'filled',
  size = 'lg',
  inValid = false,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
      ]}
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
    borderRadius: 3,
    marginTop: 32,
  },
  filled: {
    backgroundColor: colors.PINK[700],
  },
  outlined: {
    borderColor: colors.PINK[700],
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.PINK[500],
  },
  outlinedPressed: {
    borderColor: colors.PINK[700],
    borderWidth: 1,
    opacity: 0.5,
  },
  lg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: deviceHeight >= 700 ? 15 : 10,
  },
  md: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingVertical: deviceHeight >= 700 ? 12 : 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK[700],
  },
  inValid: {
    opacity: 0.5,
  },
});

export default CustomButton;
