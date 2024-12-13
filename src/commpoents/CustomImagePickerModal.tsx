import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useTheme } from './ThemeContext';

interface ImagePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onImageSelected: (imageUri: {}) => void;
  modalStyle?: object;
  buttonStyle?: object;
  buttonTextStyle?: object;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  visible,
  onClose,
  onImageSelected,
  modalStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
    const {theme} = useTheme();

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
    });

    if (result?.assets && result.assets.length > 0) {
      onImageSelected(result.assets[0] || '');
    }
    onClose();
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result?.assets && result.assets.length > 0) {
      onImageSelected(result.assets[0] || '');
    }
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={[styles.modalContainer,{backgroundColor:theme.modalBackagound}, modalStyle]}>
        <View style={[styles.optionsContainer,{backgroundColor:theme.background},] }>
          <TouchableOpacity
            style={[styles.button,{backgroundColor:theme.primary}, buttonStyle]}
            onPress={openCamera}>
            <Text style={[styles.buttonText,buttonTextStyle]}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button,{backgroundColor:theme.primary}, buttonStyle]}
            onPress={openGallery}>
            <Text style={[styles.buttonText, buttonTextStyle]}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button,{backgroundColor:theme.primary},  buttonStyle]}
            onPress={onClose}>
            <Text style={[styles.buttonText, buttonTextStyle]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  optionsContainer: {
   
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  button: {
   // backgroundColor:'red',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
