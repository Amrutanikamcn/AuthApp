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
import ImagePickerModal from '../CustomImagePickerModal';

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
  const [profileImage, setProfileImage] = useState<{} | any>();
  const [modalVisible, setModalVisible] = useState(false);
  // Handle text input changes
  const handleInputChange = (key: string, value: string) => {
    setProfileFields(prev => ({...prev, [key]: value}));
  };


  const handleImageSelected = (uri: {}) => {
    setProfileImage(uri);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={()=>setModalVisible(true)}>
        {profileImage ? (
          <Image source={{uri: profileImage?.uri}} style={styles.image} />
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
 <ImagePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onImageSelected={handleImageSelected}
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => onSave(profileFields)}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyProfile;
