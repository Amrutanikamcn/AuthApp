import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Theme } from '../colors';

const getProfileStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.background,
    } ,
    imageContainer: {
      alignSelf: 'center',
      marginBottom: 20,
    } ,
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    } ,
    placeholder: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondory,
    } ,
    placeholderText: {
      color: theme.textColor,
      fontSize: 14,
    } ,
    fieldContainer: {
      marginBottom: 15,
    } ,
    label: {
      fontSize: 14,
      marginBottom: 5,
      color: theme.textColor,
    } ,
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: theme.inputBackground,
      color: theme.textColor,
    } ,
    saveButton: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: theme.buttonBackground,
      marginTop: 20,
    } ,
    saveButtonText: {
      color: theme.buttonTextColor,
      fontSize: 16,
      fontWeight: 'bold',
    } ,
  });

export default getProfileStyles;
