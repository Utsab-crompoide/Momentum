import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import { TextInput } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
}

const LocationSearch = ({
  title,
  onPress,
  style,
  placeholder,
  value,
  onChangeText,
  editable,
}: Props) => {
  return (
    <View style={[styles.locationSearch, style]}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  locationSearch: {
    backgroundColor: colors['surface-container-lowest'],
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    borderWidth: 0.8,
    borderColor: colors['outline-variant'],
  },
});
