import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleContinue = () => {
    console.log('Continue pressed', { email, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleSignUp = () => {
    console.log('Sign Up pressed');
    // router.push('/signup'); 
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google pressed');

  };

  const handleAppleLogin = () => {
    console.log('Continue with Apple pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.backButton} >
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
          placeholderTextColor="#3D3D3D"
        //   value={email}
        //   onChangeText={setEmail}
        //   keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#3D3D3D"
        //   value={email}
        //   onChangeText={setEmail}
        //   keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#3D3D3D"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Need to create new account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}>Sing Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>or log in with</Text>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Image
          source={require('../../assets/icon/google-icon.png')} 
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
        <Image
          source={require('../../assets/icon/apple-icon.png')} 
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
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
    marginBottom: 16
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
  eyeIcon: {
    padding: 8,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    color: '#95A78D',
    textAlign: 'left',
    marginTop: 8,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom:35,
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
    marginBottom: 12,
  },
  continueButtonText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 22.4,
    fontStyle: 'normal',
  },
  signUpContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 30,
    color: '#3D3D3D',
  },
  signUpText: {
    fontSize: 14,
    fontFamily: 'satoshi',
    color: '#666',
  },
  signUpLink: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    lineHeight: 22.4,
    color: '#3D3D3D',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3D3D3D',
    marginBottom: 10,
  },
  orText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22.4,
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 48,
    paddingVertical: 15,
    marginBottom: 105,
  },
  LeftIcon: {
    width: 32,
    height: 32,
    // position: 'absolute',
    top: 16
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    flexShrink: 0
  },
  socialButtonText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
    fontWeight: '700',
    lineHeight: 22.4,
  },
  frameChild: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    flex: 1
},
});