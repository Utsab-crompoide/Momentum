import {
  View,
  Text,
  TextInput,
  ViewStyle,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import colors from '@/theme/Colors';

interface Props {
  length?: number;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  error?: string;
  touched?: boolean;
}

const OTPInput = ({
  length = 6,
  label = 'Enter OTP',
  value,
  onChangeText,
  containerStyle,
  error,
  touched,
}: Props) => {
  const [otp, setOtp] = useState<string[]>(() => {
    const safeValue = value || '';
    const otpArray = safeValue.split('').slice(0, length);
    return [...otpArray, ...Array(length - otpArray.length).fill('')];
  });
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const hasError = touched && !!error;

  useEffect(() => {
    if (value !== undefined) {
      const safeValue = value || '';
      const otpArray = safeValue.split('').slice(0, length);
      setOtp([...otpArray, ...Array(length - otpArray.length).fill('')]);
    }
  }, [value, length]);

  const handleChange = (text: string, index: number) => {
    // Only accept numbers
    if (!/^\d*$/.test(text)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    const otpString = newOtp.join('');
    onChangeText?.(otpString);

    // Auto-focus to next input
    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (otp[index]) {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        const otpString = newOtp.join('');
        onChangeText?.(otpString);
      } else if (index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.otpContainer, hasError && styles.otpContainerError]}>
        {Array.from({ length }).map((_, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            style={[
              styles.otpBox,
              hasError && styles.otpBoxError,
              otp[index] && styles.otpBoxFilled,
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={otp[index]}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            placeholderTextColor={colors.outline}
            selectionColor={colors.primary}
            accessible
            accessibilityLabel={`OTP digit ${index + 1}`}
          />
        ))}
      </View>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.15,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors['on-surface-variant'],
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center',
  },
  otpContainerError: {
    // Container styling for error state
  },
  otpBox: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D2D8E5FF',
    backgroundColor: colors['surface-container-low'],
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors['on-surface'],
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  otpBoxFilled: {
    backgroundColor: colors['outline-variant'],
    borderColor: colors.primary,
  },
  otpBoxError: {
    borderColor: colors.error,
    backgroundColor: colors['error-container'],
  },
  errorText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.error,
    marginTop: 4,
  },
});

export default OTPInput;
