import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const handleDateChange = (_event: unknown, selectedDate?: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
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
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.description}>
        Welcome to Valiant Clinic. Fill this form to access full features and treatment offers of Valiant Clinic
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          placeholder="Your First Name"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          placeholder="Your Last Name"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          placeholder="youremail@domain.com"
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholderTextColor="#E4E4E4"
            placeholder="5 May 1990"
            value={formatDate(dateOfBirth)}
            editable={false}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowDatePicker(true)}
          >
            <Image
              source={require('../../assets/icon/Calendar.png')}
              style={styles.calendarIcon}
            />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#E4E4E4"
          placeholder="Your Gender"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Image
              source={passwordVisible
                ? require('../../assets/icon/Eye on.png')
                : require('../../assets/icon/Eye off.png')
              }
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholderTextColor="#A0A0A0"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!confirmPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Image
              source={confirmPasswordVisible
                ? require('../../assets/icon/Eye on.png')
                : require('../../assets/icon/Eye off.png')
              }
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.termsText}>
        <Text style={styles.regularText}>By creating an account, you agree to our </Text>
        <Text style={styles.linkText}>Terms of Services</Text>
        <Text style={styles.regularText}> and have read and understood </Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
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
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
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
    color: '#33D3D',
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