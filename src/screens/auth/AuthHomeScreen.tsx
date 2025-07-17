import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authStackNavigations} from '../../constants/stackNavigations';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authStackNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate(authStackNavigations.LOGIN)}>
          <Text>로그인</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(authStackNavigations.SIGNUP)}>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
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
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
