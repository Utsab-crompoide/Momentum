import { View, Text } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerInput } from 'react-native-paper-dates';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DateTimePickerProps {
  locale: string;
  label: string;
}

const DateTimePicker = ({ locale, label }: DateTimePickerProps) => {
  const [inputDate, setInputDate] = React.useState(undefined);

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <DatePickerInput
          locale="en-GB"
          label="Birthdate"
          value={inputDate}
          onChange={d => setInputDate(d)}
          inputMode="start"
        />
      </View>
      <IconButton icon="calendar" />
      <MaterialCommunityIcons name="calendar" size={40} />
    </SafeAreaProvider>
  );
};

export default DateTimePicker;
