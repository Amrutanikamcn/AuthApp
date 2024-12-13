
import { StyleSheet } from 'react-native';
import { Theme } from '../colors';


export const getLoginStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.background,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 30,
      color: theme.textColor,
    },
    image: {
      width: 200,
      height: 200,
      marginVertical: 20,
      backgroundColor:theme.borderColor
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.textColor,
    },
    subtitle: {
      fontSize: 16,
      color: theme.textColorSecondary ,
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      width: '95%',
      padding: 10,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 5,
      marginBottom: 15,
      backgroundColor: theme.inputBackground ,
      color: theme.textColor,
    },
    passwordField: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 0,
      paddingLeft: 10,
    },
    button: {
      width: '90%',
      padding: 15,
      backgroundColor: theme.buttonBackground ,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: theme.buttonTextColor || '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    linkContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '90%',
      marginTop: 10,
    },
    linkText: {
      color: theme.linkColor ,
      fontSize: 14,
    },
    signupText: {
      color: theme.linkColor,
      fontSize: 16,
      marginTop: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
