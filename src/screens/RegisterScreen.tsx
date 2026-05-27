import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  address: Yup.string().required('Address is required'),
  mobile: Yup.string()
    .required('Mobile Number is required')
    .matches(/^[6-9]\d{9}$/, 'Mobile number must be 10 digits'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const RegisterScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const logo_url = 'https://picsum.photos/200/300';

  const handleSignUp = (values: any) => {
    console.log('Register:', values);
  };
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={styles.container}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
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
                Fill in the details below to get started.
              </Text>
            </View>

            <Formik
              initialValues={{ fullName: '', address: '', email: '', mobile: '' }}
              validationSchema={registrationSchema}
              onSubmit={values => console.log('Register:', values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <TextInput
                    label="Full Name"
                    placeholder="Enter your full name"
                    containerStyle={{ marginVertical: 10, gap: 8 }}
                    inputStyle={{ width: '100%' }}
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    error={errors.fullName}
                    touched={touched.fullName}
                  />
                  <TextInput
                    label="Address"
                    placeholder="Enter your address"
                    containerStyle={{ marginVertical: 10, gap: 8 }}
                    inputStyle={{ width: '100%' }}
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    error={errors.address}
                    touched={touched.address}
                  />
                  <TextInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    containerStyle={{ marginVertical: 10, gap: 8 }}
                    inputStyle={{ width: '100%' }}
                    inputMode="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <TextInput
                    label="Mobile Number"
                    placeholder="Enter your mobile number"
                    containerStyle={{ marginVertical: 10, gap: 8 }}
                    inputStyle={{ width: '100%' }}
                    inputMode="numeric"
                    value={values.mobile}
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                    error={errors.mobile}
                    touched={touched.mobile}
                  />
                  <Button
                    title="Get OTP"
                    onPress={() => handleSignUp(values)}
                    style={{ marginTop: 10 }}
                  />
                </>
              )}
            </Formik>

            <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{color: colors['secondary'], textDecorationLine: 'underline', fontFamily: 'PlusJakartaSans-Regular'}}>Already have an account?</Text>
            </TouchableOpacity>
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
    backgroundColor: colors['surface-container-lowest'],
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: colors['outline-variant'],
  },
});

export default RegisterScreen;
