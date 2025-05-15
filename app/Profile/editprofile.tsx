import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function editporfile() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleContinue = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Continue pressed', { email, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require('../../assets/icon/Left Icon.png')}
            style={styles.LeftIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>My Profile</Text>
      <Text style={styles.description}>
        Information
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholderTextColor="#E4E4E4"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <Image
              source={require('../../assets/icon/Calendar.png')}
              style={styles.calendarIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          autoCapitalize="none"
        />
      </View>
      <Text style={styles.description}>
        Contact Details
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#3D3D3D"
          placeholder="+_ _ _- _ _ _ _ _ _ _ _ _ _ _"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    display: 'flex',
    width: 393,
    height: 64,
    marginLeft: -10,
    justifyContent: 'space-between',
    flexShrink: 0,
    color: '#3D3D3D',
    marginBottom: 16,
  },
  header: {
    fontSize: 32,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#131214',
    marginBottom: 10,
    fontStyle: 'normal',
  },
  description: {
    fontSize: 20,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#5B675E',
    fontStyle: 'normal',
    marginBottom: 16,
    lineHeight: 21,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#3D3D3D',
    lineHeight: 22.4,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Satoshi',
    lineHeight: 22.4,
    color: '#3D3D3D',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
  },
  eyeIcon: {
    padding: 8,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  calendarIcon: {
    width: 20,
    height: 20,
  },
  continueButton: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#3D3D3D',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 90,
  },
  continueButtonText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 22.4,
    fontStyle: 'normal',
  },
  termsText: {
    width:"100%",
    fontSize: 12,
    fontFamily: 'Satoshi',
    textAlign: 'center',
    lineHeight: 17,
    marginTop: 20,
  },
  regularText: {
    color: '#3D3D3D',
    fontFamily: 'Satoshi',
    fontWeight: '400',
    fontSize:14,
    fontStyle: 'normal',
    lineHeight: 16.8,
  },
  linkText: {
    color: '#9BC7A7',
    fontFamily: 'Satoshi',
    fontWeight: '700',
    fontSize:14,
    textDecorationLine: 'underline',
    lineHeight: 16.8,
    fontStyle: 'normal',
  },
  LeftIcon: {
    width: 32,
    height: 32,
    top: 16,
  },
  bottomSpacer: {
    height: 40,
  },
});