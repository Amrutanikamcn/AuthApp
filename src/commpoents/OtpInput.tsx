import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

interface OTPInputProps {
  numberOfDigits: number; // Total OTP digits
  onComplete: (otp: string) => void; // Callback when OTP is entered
  containerStyle?: StyleProp<ViewStyle>; // Custom container style
  inputStyle?: StyleProp<TextStyle>; // Custom input style
  title?: string; // Title of the OTP screen
  subtitle?: string; // Subtitle for the OTP screen
  onResend?: () => void; // Callback for the resend button
  resendDelay?: number; // Time delay for resend button (in seconds)
}

const OTPInput: React.FC<OTPInputProps> = ({
  numberOfDigits,
  onComplete,
  containerStyle,
  inputStyle,
  title = 'Enter OTP',
  subtitle = 'We have sent a code to your phone number.',
  onResend,
  resendDelay = 30,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numberOfDigits).fill(''));
  const [resendTimer, setResendTimer] = useState(resendDelay);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendTimer]);

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

  const handleResend = () => {
    setResendTimer(resendDelay); // Reset the timer
    onResend?.(); // Trigger resend callback
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

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

      <View style={styles.resendContainer}>
        {resendTimer > 0 ? (
          <Text style={styles.resendText}>
            Resend code in {resendTimer}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendButton}>Resend Code</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
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
  resendContainer: {
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#888',
  },
  resendButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
