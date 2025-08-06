import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import CustomButton from '../../components/CustomButton';
import {authStackNavigations} from '../../constants/stackNavigations';
import {colors, font} from '../../constants/globalStyle';
import {deviceHeight} from '../../constants/deviceHeight';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authStackNavigations.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FilmShack</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          label={'로그인'}
          onPress={() => navigation.navigate(authStackNavigations.LOGIN)}
        />
        <CustomButton
          label={'회원가입'}
          variant={'neutral'}
          onPress={() => navigation.navigate(authStackNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 30,
    alignItems: 'center',
  },
  title: {
    padding: deviceHeight >= 700 ? 32 : 24,
    fontSize: font.SIZE.h1,
    fontWeight: font.WEIGHT.bold,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    // width: '100%',
    // height: '100%',
  },
  buttonContainer: {
    gap: 10,
  },
  loginButton: {
    padding: 16,
    color: colors.WHITE,
    backgroundColor: colors.BLACK,
  },
});

export default AuthHomeScreen;
