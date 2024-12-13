import React from 'react';
import {View, Alert, Text} from 'react-native';
import Login from '../commpoents/Login/Login';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const handleLoginPress = (credentials: {
    email?: string;
    password?: string;
    mobile?: string;
  }) => {
    if (credentials.mobile) {
      Alert.alert('Login with Mobile', `Mobile: ${credentials.mobile}`);
    } else {
      // Alert.alert(
      //   'Login with Email',
      //   `Email: ${credentials.email}, Password: ${credentials.password}`,
      // );
      navigation.navigate('OTPScreen');
    }
  };

  const handleSignupPress = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={{flex: 1}}>
      <Login
        imageUri={require('../assest/Login.jpg')}
        isMobile={false} // Change to true for mobile login
        onLoginPress={handleLoginPress}
        title="Welcome"
        headerTitle="Login"
        subTitle="Login with Email and password"
        signup="Sign Up"
        styles={{
          containerStyle: {flex: 1},
          //   titleStyle: {color: '#444'},
          buttonStyle: {height: 50},

          inputStyle: {height: 45, borderRadius: 10, paddingRight: 10},
        }}
        onSignupPress={handleSignupPress}
        onForgotPasswordPress={handleForgotPasswordPress}
      />
    </View>
  );
};

export default LoginScreen;
