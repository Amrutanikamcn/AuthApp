import { StyleSheet } from "react-native";
import { Theme } from "../colors";

const getCommonScreenStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color:theme.textColor,
      marginBottom: 20,
    },
    childrenContainer: {
      marginTop: 20,
      width: '100%',
    },
  });
  export default getCommonScreenStyles;