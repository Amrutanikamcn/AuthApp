import {StyleSheet} from 'react-native';
import {Theme} from '../colors';

const getDynamicFormStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      flex:1,
      backgroundColor:theme.background
    },
    fieldContainer: {
      width: '99%',
      marginBottom: 15,
    },
    label: {
      fontSize: 14,
      color: theme.textColor,
      marginBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 5,
      backgroundColor: theme.inputBackground,
    },
    input: {
      flex: 1,
      padding: 10,
      color: theme.textColor,
    },
    eyeButton: {
      paddingHorizontal: 10,
    },
    button: {
      width: '90%',
      padding: 15,
      backgroundColor: theme.buttonBackground,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default getDynamicFormStyles;
