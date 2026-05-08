import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({ title, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-primary'],
  },
});

export default Button;
