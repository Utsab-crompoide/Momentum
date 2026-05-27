import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import OTPInput from '@/components/OTPInput';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is required')
    .length(6, 'OTP must be 6 digits'),
});

const OTPScreen = () => {
  const navigation = useNavigation();
  const logo_url = 'https://picsum.photos/200/300';

  const handleVerifyOTP = (values: any) => {
    console.log('OTP Verified:', values);
    // Navigate to next screen after verification
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={styles.container}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: logo_url || 'https://picsum.photos/200/300' }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                marginBottom: 16,
              }}
            />
            <Text style={styles.mainText}>Verify OTP</Text>
            <Text style={styles.subText}>
              We've sent a 6-digit code to your phone number.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Formik
              initialValues={{ otp: '' }}
              validationSchema={otpSchema}
              onSubmit={handleVerifyOTP}
            >
              {({ handleChange, values, errors, touched, handleSubmit }) => (
                <>
                  <OTPInput
                    label="Enter OTP"
                    value={values.otp}
                    onChangeText={handleChange('otp')}
                    error={errors.otp}
                    touched={touched.otp}
                    containerStyle={{ marginVertical: 10 }}
                  />

                  <Button
                    title="Verify OTP"
                    onPress={() => handleSubmit()}
                    style={{ marginTop: 20 }}
                  />

                  <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>
                      Didn't receive the code?{' '}
                      <Text
                        style={{
                          color: colors.primary,
                          fontWeight: '600',
                        }}
                      >
                        Resend OTP
                      </Text>
                    </Text>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: colors.background,
    padding: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  mainText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    letterSpacing: -0.4,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.primary,
    marginBottom: 12,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-surface-variant'],
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: colors['surface-container-lowest'],
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: colors['outline-variant'],
  },
  resendContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-surface'],
  },
});

export default OTPScreen;
