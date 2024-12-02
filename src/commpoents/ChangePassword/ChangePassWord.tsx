import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../ThemeContext';
import getChangePasswordStyles from './styles';

interface ChangePasswordProps {
  onChangePasswordPress: (credentials: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  styles?: {
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
    inputStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
  };
}

const ChangePassword: React.FC<ChangePasswordProps> = ({
  onChangePasswordPress,
  title = 'Change Password',
  subtitle = 'Please enter your current password and the new password.',
  buttonText = 'Change Password',
  styles = {},
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const {theme} = useTheme();
  const defaultStyles = getChangePasswordStyles(theme);
  return (
    <SafeAreaView style={[defaultStyles.container, styles.containerStyle]}>
      <Text style={[defaultStyles.title, styles.titleStyle]}>{title}</Text>
      <Text style={[defaultStyles.subtitle, styles.subtitleStyle]}>
        {subtitle}
      </Text>

      <View
        style={[
          defaultStyles.input,
          styles.inputStyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TextInput
          style={{flex: 1}}
          placeholder="Current Password"
          placeholderTextColor="grey"
          secureTextEntry={!isCurrentPasswordVisible}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TouchableOpacity
          onPress={() =>
            setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
          }>
          <Icon
            name={isCurrentPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <View
        style={[
          defaultStyles.input,
          styles.inputStyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TextInput
          style={{flex: 1}}
          placeholder="New Password"
          placeholderTextColor="grey"
          secureTextEntry={!isNewPasswordVisible}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity
          onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}>
          <Icon
            name={isNewPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <View
        style={[
          defaultStyles.input,
          styles.inputStyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TextInput
          style={{flex: 1}}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() =>
            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
          }>
          <Icon
            name={isConfirmPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[defaultStyles.button, styles.buttonStyle]}
        onPress={() =>
          onChangePasswordPress({
            currentPassword,
            newPassword,
            confirmPassword,
          })
        }>
        <Text style={[defaultStyles.buttonText, styles.buttonTextStyle]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangePassword;
