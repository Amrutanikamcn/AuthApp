import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {useTheme} from '../ThemeContext';
import getProfileStyles from './styles';

interface ProfileField {
  label: string;
  value: string;
  placeholder: string;
  type: string;
  key: string;
}

interface MyProfileProps {
  fields: ProfileField[];
  onSave: (updatedProfile: Record<string, string>) => void;
}

const MyProfile: React.FC<MyProfileProps> = ({fields, onSave}) => {
  const {theme} = useTheme(); // Fetch current theme
  const styles = getProfileStyles(theme); // Generate theme-based styles

  const [profileFields, setProfileFields] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({...acc, [field.key]: field.value}), {}),
  );
  const [profileImage, setProfileImage] = useState<string | undefined>();

  // Handle text input changes
  const handleInputChange = (key: string, value: string) => {
    setProfileFields(prev => ({...prev, [key]: value}));
  };

  // Handle image picker
  const handleImagePicker = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setProfileImage(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleImagePicker}>
        {profileImage ? (
          <Image source={{uri: profileImage}} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Upload Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      {fields.map(field => (
        <View key={field.key} style={styles.fieldContainer}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            keyboardType={
              field.type === 'email'
                ? 'email-address'
                : field.type === 'number'
                ? 'numeric'
                : 'default'
            }
            placeholder={field.placeholder}
            placeholderTextColor="gray"
            value={profileFields[field.key]}
            onChangeText={text => handleInputChange(field.key, text)}
          />
        </View>
      ))}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => onSave(profileFields)}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyProfile;
