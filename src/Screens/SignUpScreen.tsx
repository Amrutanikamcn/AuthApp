import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Alert} from 'react-native';
import DynamicFormComponent from '../commpoents/SignUp/SignUp';
import {CustomCheckBox} from '@shreyacn11/react-native-component';

const SignUpScreen = () => {
  const [check, setCheck] = useState(false);
  const fields: any = [
    {name: 'name', placeholder: 'Enter your name', label: 'Name', type: 'text'},
    {
      name: 'email',
      placeholder: 'Enter your email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      placeholder: 'Enter your password',
      label: 'Password',
      type: 'password',
    },
    {
      name: 'confimPassWord',
      placeholder: 'Confirm password',
      label: 'Confirm PassWord',
      type: 'password',
    },
    {
      name: 'phone',
      placeholder: 'Enter your phone number',
      label: 'Phone Number',
      type: 'number',
    },
  ];

  const handleSignUp = (formData: {[key: string]: string}) => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    console.log('Sign Up Data:', formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <DynamicFormComponent
        fields={fields}
        labelStyle={{marginBottom: 10}}
        onSubmit={handleSignUp}
        otherFilelds={
          <View style={{width: '99%', flexDirection: 'row'}}>
            <CustomCheckBox
              checked={check}
              //label="Sample Check box"
              onChange={(value: boolean) => setCheck(value)}
            />
            <Text style={{alignSelf: 'center', marginLeft: 10}}>
              Accept Terms and conditions
            </Text>{' '}
          </View>
        }
        buttonText="Sign Up"
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
