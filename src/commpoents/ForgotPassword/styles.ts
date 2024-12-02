import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Theme} from '../colors';

const getForgotPasswordStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
      backgroundColor: theme.background,
    } ,
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.textColor,
    } ,
    subtitle: {
      fontSize: 16,
      color: theme.textColor,
      marginBottom: 30,
      textAlign: 'center',
    } ,
    input: {
      width: '90%',
      padding: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 5,
      marginBottom: 20,
      backgroundColor: '#FFF',
      color: theme.textColor,
    } ,
    button: {
      width: '90%',
      padding: 15,
      backgroundColor: theme.buttonBackground,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 15,
    } ,
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    } ,
    backButton: {
      width: '90%',
      padding: 15,
      borderWidth: 1,
      borderColor: theme.buttonBackground,
      borderRadius: 5,
      alignItems: 'center',
    } ,
    backButtonText: {
      color: theme.buttonBackground,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default getForgotPasswordStyles;
