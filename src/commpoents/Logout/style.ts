
import { StyleSheet } from "react-native";
import { Theme } from "../colors";

const getLogoutStyles = (theme: Theme) =>
    StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:theme.modalBackagound,
    },
    modalContainer: {
      width: '90%',
      padding: 30,
      borderRadius: 10,
      backgroundColor: theme.background,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    message: {
      fontSize: 14,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cancelButton: {
      flex: 1,
      marginRight: 10,
      padding: 10,
      backgroundColor: '#ccc',
      borderRadius: 5,
      alignItems: 'center',
    },
    logoutButton: {
      flex: 1,
      marginLeft: 10,
      padding: 10,
      backgroundColor: '#f00',
      borderRadius: 5,
      alignItems: 'center',
    },
    cancelText: {
      color: '#000',
      fontWeight: 'bold',
    },
    logoutText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  export default getLogoutStyles;