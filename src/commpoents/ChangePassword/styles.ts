import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Theme } from '../colors';

const getChangePasswordStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.textColor,
    },
    subtitle: {
      fontSize: 16,
      color: theme.textColor,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: '95%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:
        Platform.OS === 'ios'
          ? Dimensions.get('screen').height / 80
          : Dimensions.get('screen').height / 300,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 5,
      marginBottom: 15,
      backgroundColor: theme.background,
      color: theme.textColor,
    },
    button: {
      width: '90%',
      padding: 15,
      backgroundColor: theme.buttonBackground,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default getChangePasswordStyles;
