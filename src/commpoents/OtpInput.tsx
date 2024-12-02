import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface OTPInputProps {
  numberOfDigits: number; // Total OTP digits
  onComplete: (otp: string) => void; // Callback when OTP is entered
  containerStyle?: StyleProp<ViewStyle>; // Custom container style
  inputStyle?: StyleProp<TextStyle>; // Custom input style
}

const OTPInput: React.FC<OTPInputProps> = ({
  numberOfDigits,
  onComplete,
  containerStyle,
  inputStyle,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numberOfDigits).fill(''));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: string, index: number) => {
    if (text.length > 1) return; // Restrict input to one character
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < numberOfDigits - 1) {
      // Move focus to the next input if a digit is entered
      inputsRef.current[index + 1]?.focus();
    }

    // If OTP is fully entered, trigger onComplete callback
    if (newOtp.join('').length === numberOfDigits) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace') {
      if (otp[index] === '') {
        // If the current input is empty, move focus to the previous input
        if (index > 0) {
          inputsRef.current[index - 1]?.focus();
        }
      } else {
        // Clear the current input on first backspace press
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Array.from({ length: numberOfDigits }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRef.current[index] = ref)}
          style={[styles.input, inputStyle]}
          keyboardType="numeric"
          maxLength={1}
          value={otp[index]}
          onChangeText={(text) => handleInputChange(text, index)}
          onKeyPress={({ nativeEvent }) =>
            handleKeyPress(nativeEvent.key, index)
          }
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    color: '#333',
    backgroundColor: '#fff',
  },
});
