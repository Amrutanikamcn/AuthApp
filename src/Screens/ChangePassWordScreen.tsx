import React from 'react';
import { Alert } from 'react-native';
import ChangePassword from '../commpoents/ChangePassword/ChangePassWord';


const ChangePassWordScreen = () => {
  const handleChangePassword = ({
    currentPassword,
    newPassword,
    confirmPassword,
  }: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', 'Password changed successfully!');
    console.log('Credentials:', { currentPassword, newPassword });
  };

  return (
    <ChangePassword
      onChangePasswordPress={handleChangePassword}
      title="Update Password"
      subtitle="Enter your current password and a new password."
    />
  );
};

export default ChangePassWordScreen;
