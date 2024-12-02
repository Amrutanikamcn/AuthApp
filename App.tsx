import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPassWordScreen';
import ChangePassWordScreen from './src/Screens/ChangePassWordScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ComponentsScreen from './src/Screens/ComponetsScreen';
import OTPScreen from './src/Screens/OtpScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import {ThemeProvider} from './src/commpoents/ThemeContext';
import HomeScreen from './src/Screens/HomeScreen';

export type RootStackParamList = {
  ComponentsScreen: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ChangePassWord: undefined;
  SignUp: undefined;
  OTPScreen: undefined;
  ProfileScreen: undefined;
  HomeScreen:undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChangePassWord"
            component={ChangePassWordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ComponentsScreen"
            component={ComponentsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTPScreen"
            component={OTPScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
