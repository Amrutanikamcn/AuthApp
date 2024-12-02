import React from 'react';
import { View, Text, Alert } from 'react-native';
import OTPInput from '../commpoents/OtpInput';
import { useNavigation } from '@react-navigation/native';


const OTPScreen = () => {
    const navigation = useNavigation<any>();
  const handleOTPComplete = (otp: string) => {
    //Alert.alert('OTP Entered', otp);
    navigation.navigate("HomeScreen")
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>Enter OTP</Text>
      <OTPInput
        numberOfDigits={6}
        onComplete={handleOTPComplete}
        containerStyle={{ marginVertical: 20 }}
        inputStyle={{
          borderColor: '#007BFF',
          backgroundColor: '#F0F8FF',
        }}
      />
      
    </View>
  );
};

export default OTPScreen;
