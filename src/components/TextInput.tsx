import { View, Text, TextInput, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface Props {
  label: string;
  placeholder: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

const TextInputBox = ({
  label,
  placeholder,
  containerStyle,
  inputStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        inputMode="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors['on-surface-variant'],
  },
  input: {
    backgroundColor: colors['surface-container-low'],
    width: '100%',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default TextInputBox;
