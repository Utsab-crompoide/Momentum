import {
  View,
  Text,
  TextInput,
  ViewStyle,
  StyleSheet,
  InputModeOptions,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface Props {
  label: string;
  placeholder: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  error?: string;
  touched?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  inputMode?: InputModeOptions;
}

const TextInputBox = ({
  label,
  placeholder,
  containerStyle,
  inputStyle,
  error,
  touched,
  value,
  onChangeText,
  onBlur,
  inputMode,
}: Props) => {
  const hasError = touched && !!error;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.outline}
        style={[
          styles.input,
          hasError && styles.inputError,
          inputStyle,
        ]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        inputMode={inputMode}
      />
      {/* {hasError && <Text style={styles.errorText}>{error}</Text>} */}
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
  input: {
    backgroundColor: colors['surface-container-low'],
    width: '100%',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#D2D8E5FF',
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.error,
  },
});

export default TextInputBox;
