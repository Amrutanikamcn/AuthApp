import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../ThemeContext';
import {getLoginStyles} from './styles';

interface LoginProps {
  isMobile?: boolean;
  onLoginPress: (credentials: {
    email?: string;
    password?: string;
    mobile?: string;
  }) => void;
  onSignupPress: () => void;
  onForgotPasswordPress: () => void;
  imageUri?: ImageSourcePropType | undefined;
  headerTitle?: string;
  title?: string;
  subTitle?: string;
  forgotPassword?: string;
  signup?: string;
  loginText?: string;
  styles?: {
    containerStyle?: ViewStyle;
    headerTitle?: TextStyle;
    titleStyle?: TextStyle;
    subtitleStyle?: TextStyle;
    inputStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    loginTextStyle?: TextStyle;
    forgotPasswordTextStyle?: TextStyle;
    signupTextStyle?: TextStyle;
    imageStyle?: ImageStyle;
  };
}

const Login: React.FC<LoginProps> = ({
  isMobile = false,
  onLoginPress,
  onSignupPress,
  onForgotPasswordPress,
  imageUri,
  headerTitle,
  title,
  subTitle,
  signup = 'Sign up',
  loginText = 'Login',
  forgotPassword = 'Forgot Password',
  styles = {},
}) => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {theme} = useTheme();
  const defaultStyles = getLoginStyles(theme);

  return (
    <SafeAreaView
      style={[
        defaultStyles.container,
        {backgroundColor: theme.background},
        styles.containerStyle,
      ]}>
      {headerTitle && (
        <Text
          style={[
            defaultStyles.headerTitle,
            {color: theme.textColor},
            styles.headerTitle,
          ]}>
          {headerTitle}
        </Text>
      )}
      {imageUri && (
        <Image
          source={imageUri}
          style={[defaultStyles.image, styles.imageStyle]}
        />
      )}
      {title && (
        <Text style={[defaultStyles.title, styles.titleStyle]}>{title}</Text>
      )}
      {subTitle && (
        <Text style={[defaultStyles.subtitle, styles.subtitleStyle]}>
          {subTitle}
        </Text>
      )}

      {isMobile ? (
        <TextInput
          style={[defaultStyles.input, styles.inputStyle]}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor={'grey'}
          value={mobile}
          onChangeText={setMobile}
        />
      ) : (
        <>
          <TextInput
            style={[defaultStyles.input, styles.inputStyle]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={setEmail}
          />
          <View
            style={[
              defaultStyles.input,
              styles.inputStyle,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 0,
                paddingLeft: 10,
              },
            ]}>
            <TextInput
              //  style={{ backgroundColor:'green',}}
              placeholder="Password"
              placeholderTextColor={'grey'}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Icon
                name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#555"
              />
            </TouchableOpacity>
          </View>
        </>
      )}

      <TouchableOpacity
        style={[defaultStyles.button, styles.buttonStyle]}
        onPress={() => onLoginPress(isMobile ? {mobile} : {email, password})}>
        <Text style={[defaultStyles.buttonText, styles.buttonTextStyle]}>
          {loginText}
        </Text>
      </TouchableOpacity>

      <View style={defaultStyles.linkContainer}>
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text
            style={[defaultStyles.linkText, styles.forgotPasswordTextStyle]}>
            {forgotPassword}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSignupPress}>
        <Text style={[defaultStyles.signupText, styles.signupTextStyle]}>
          {signup}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
