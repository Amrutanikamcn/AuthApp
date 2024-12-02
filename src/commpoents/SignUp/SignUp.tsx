import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../ThemeContext';
import getDynamicFormStyles from './styles';

interface Field {
  name: string;
  placeholder: string;
  label?: string;
  type: 'text' | 'email' | 'password' | 'number';
}

interface DynamicFormComponentProps {
  fields: Field[];
  onSubmit: (formData: {[key: string]: string}) => void;
  buttonText: string;
  labelStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  otherFilelds?: React.ReactNode;
}

const DynamicFormComponent: React.FC<DynamicFormComponentProps> = ({
  fields,
  onSubmit,
  buttonText,
  labelStyle,
  inputContainerStyle,
  inputStyle,
  buttonStyle,
  buttonTextStyle,
  otherFilelds,
}) => {
  const {theme} = useTheme(); // Fetch current theme
  const styles = getDynamicFormStyles(theme);

  const [formData, setFormData] = useState<{[key: string]: string}>(
    fields.reduce((acc, field) => ({...acc, [field.name]: ''}), {}),
  );
  const [passwordVisibility, setPasswordVisibility] = useState<{
    [key: string]: boolean;
  }>(
    fields
      .filter(field => field.type === 'password')
      .reduce((acc, field) => ({...acc, [field.name]: false}), {}),
  );

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({...prev, [name]: value}));
  };

  const togglePasswordVisibility = (fieldName: string) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return (
    <View style={styles.container}>
      {fields.map(field => (
        <View key={field.name} style={styles.fieldContainer}>
          {field.label && (
            <Text style={[styles.label, labelStyle]}>{field.label}</Text>
          )}
          <View style={[styles.inputContainer, inputContainerStyle]}>
            <TextInput
              style={[styles.input, inputStyle]}
              placeholder={field.placeholder}
              keyboardType={
                field.type === 'email'
                  ? 'email-address'
                  : field.type === 'number'
                  ? 'numeric'
                  : 'default'
              }
              secureTextEntry={
                field.type === 'password' && !passwordVisibility[field.name]
              }
              placeholderTextColor="grey"
              value={formData[field.name]}
              onChangeText={value => handleInputChange(field.name, value)}
            />
            {field.type === 'password' && (
              <TouchableOpacity
                onPress={() => togglePasswordVisibility(field.name)}
                style={styles.eyeButton}>
                <Icon
                  name={
                    passwordVisibility[field.name]
                      ? 'eye-outline'
                      : 'eye-off-outline'
                  }
                  size={24}
                  color="#555"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
      {otherFilelds}
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={() => onSubmit(formData)}>
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DynamicFormComponent;
