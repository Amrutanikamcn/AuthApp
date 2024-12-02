import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from '../ThemeContext';
import getForgotPasswordStyles from './styles';

interface ForgotPasswordProps {
  isMobile?: boolean; // If true, uses mobile input; otherwise, email
  onResetPress: (input: {email?: string; mobile?: string}) => void; // Action for reset password
  onBackPress: () => void; // Action for going back to the previous screen
  headerTitle?: string;
  subtitle?: string;
  buttonText?: string;
  backButtonText?: string;
  styles?: {
    containerStyle?: ViewStyle;
    headerTitleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
    inputStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    backButtonStyle?: ViewStyle;
    backButtonTextStyle?: TextStyle;
  };
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  isMobile = false,
  onResetPress,
  onBackPress,
  headerTitle = 'Forgot Password',
  subtitle = 'Enter your registered email or mobile number to reset your password.',
  buttonText = 'Reset Password',
  backButtonText = 'Back to Login',
  styles = {},
}) => {
  const [input, setInput] = useState('');
  const {theme} = useTheme();
  const defaultStyles = getForgotPasswordStyles(theme);
  return (
    <SafeAreaView style={[defaultStyles.container, styles.containerStyle]}>
      <Text style={[defaultStyles.headerTitle, styles.headerTitleStyle]}>
        {headerTitle}
      </Text>
      <Text style={[defaultStyles.subtitle, styles.subtitleStyle]}>
        {subtitle}
      </Text>

      <TextInput
        style={[defaultStyles.input, styles.inputStyle]}
        placeholder={isMobile ? 'Enter Mobile Number' : 'Enter Email'}
        keyboardType={isMobile ? 'phone-pad' : 'email-address'}
        placeholderTextColor="grey"
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity
        style={[defaultStyles.button, styles.buttonStyle]}
        onPress={() =>
          onResetPress(isMobile ? {mobile: input} : {email: input})
        }>
        <Text style={[defaultStyles.buttonText, styles.buttonTextStyle]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
