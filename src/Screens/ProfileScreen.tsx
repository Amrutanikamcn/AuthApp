import React from 'react';
import { SafeAreaView } from 'react-native';
import MyProfile from '../commpoents/Profile/Profile';

const ProfileScreen = () => {
  const fields = [
    { label: 'Full Name', value: 'John Doe', placeholder: 'Enter your full name', key: 'fullName' ,type:'text'},
    { label: 'Email', value: 'john.doe@example.com', placeholder: 'Enter your email', key: 'email' ,type:'email'},
    { label: 'Phone', value: '1234567890', placeholder: 'Enter your phone number', key: 'phone',type:'number' },
  ];

  const handleSave = (updatedProfile: Record<string, string>) => {
    console.log('Updated Profile:', updatedProfile);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyProfile fields={fields} onSave={handleSave} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
