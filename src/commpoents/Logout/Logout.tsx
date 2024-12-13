import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from '../ThemeContext';
import getLogoutStyles from './style';


interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
  title?: string;
  message?: string;
  cancelText?: string;
  logoutText?: string;
  customdefaultStyles?: {
    modalContainer?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    message?: StyleProp<TextStyle>;
    cancelButton?: StyleProp<ViewStyle>;
    cancelText?: StyleProp<TextStyle>;
    logoutButton?: StyleProp<ViewStyle>;
    logoutText?: StyleProp<TextStyle>;
  };
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onClose,
  onLogout,
  title = "Confirm Logout",
  message = "Are you sure you want to log out?",
  cancelText = "Cancel",
  logoutText = "Log Out",
  customdefaultStyles = {},
}) => {
    const {theme} = useTheme();
    const defaultStyles = getLogoutStyles(theme);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={defaultStyles.overlay}>
        <View style={[defaultStyles.modalContainer, customdefaultStyles.modalContainer]}>
          <Text style={[defaultStyles.title, customdefaultStyles.title]}>{title}</Text>
          <Text style={[defaultStyles.message, customdefaultStyles.message]}>{message}</Text>
          <View style={defaultStyles.buttonContainer}>
            <TouchableOpacity
              style={[defaultStyles.cancelButton, customdefaultStyles.cancelButton]}
              onPress={onClose}
            >
              <Text style={[defaultStyles.cancelText, customdefaultStyles.cancelText]}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[defaultStyles.logoutButton, customdefaultStyles.logoutButton]}
              onPress={onLogout}
            >
              <Text style={[defaultStyles.logoutText, customdefaultStyles.logoutText]}>{logoutText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default LogoutModal;
