import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

const LoginScreen = () => {
  const logo_url = 'https://picsum.photos/200/300';
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: logo_url || 'https://picsum.photos/200/300' }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 16,
          }}
        />
        <Text style={styles.mainText}>GharSewa</Text>
        <Text style={styles.subText}>
          Your home, cared for by neighbors you trust.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text
            style={[
              styles.mainText,
              {
                color: colors['on-surface'],
                fontSize: 28,
              },
            ]}
          >
            Welcome Back
          </Text>
          <Text style={[styles.subText, { fontSize: 14 }]}>
            Enter your phone number to get started.
          </Text>
        </View>
        <TextInput
          label="Mobile Number"
          placeholder="Enter your mobile number"
          containerStyle={{ marginVertical: 10, gap: 8 }}
          inputStyle={{
            width: '100%',
          }}
        />
        <Button
          title="Get OTP"
          onPress={() => console.log('Send OTP pressed')}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: colors.background,
    width: Dimensions.get('window').width,
    padding: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mainText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    letterSpacing: -0.4,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.primary,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-surface-variant'],
  },
  formContainer: {
    flex: 1 / 2,
    backgroundColor: colors['surface-container-lowest'],
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: colors['outline-variant'],
  },
});

export default LoginScreen;
