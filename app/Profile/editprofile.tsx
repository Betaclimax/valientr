import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function editporfile() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const countryCodes = [
    { code: '+93', country: 'Afghanistan' },
    { code: '+355', country: 'Albania' },
    { code: '+213', country: 'Algeria' },
    { code: '+376', country: 'Andorra' },
    { code: '+244', country: 'Angola' },
    { code: '+1', country: 'Antigua and Barbuda' },
    { code: '+54', country: 'Argentina' },
    { code: '+374', country: 'Armenia' },
    { code: '+61', country: 'Australia' },
    { code: '+43', country: 'Austria' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+1', country: 'Bahamas' },
    { code: '+973', country: 'Bahrain' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+1', country: 'Barbados' },
    { code: '+375', country: 'Belarus' },
    { code: '+32', country: 'Belgium' },
    { code: '+501', country: 'Belize' },
    { code: '+229', country: 'Benin' },
    { code: '+975', country: 'Bhutan' },
    { code: '+591', country: 'Bolivia' },
    { code: '+387', country: 'Bosnia and Herzegovina' },
    { code: '+267', country: 'Botswana' },
    { code: '+55', country: 'Brazil' },
    { code: '+673', country: 'Brunei' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+257', country: 'Burundi' },
    { code: '+855', country: 'Cambodia' },
    { code: '+237', country: 'Cameroon' },
    { code: '+1', country: 'Canada' },
    { code: '+238', country: 'Cape Verde' },
    { code: '+236', country: 'Central African Republic' },
    { code: '+235', country: 'Chad' },
    { code: '+56', country: 'Chile' },
    { code: '+86', country: 'China' },
    { code: '+57', country: 'Colombia' },
    { code: '+269', country: 'Comoros' },
    { code: '+242', country: 'Congo' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+385', country: 'Croatia' },
    { code: '+53', country: 'Cuba' },
    { code: '+357', country: 'Cyprus' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+45', country: 'Denmark' },
    { code: '+253', country: 'Djibouti' },
    { code: '+1', country: 'Dominica' },
    { code: '+1', country: 'Dominican Republic' },
    { code: '+593', country: 'Ecuador' },
    { code: '+20', country: 'Egypt' },
    { code: '+503', country: 'El Salvador' },
    { code: '+240', country: 'Equatorial Guinea' },
    { code: '+291', country: 'Eritrea' },
    { code: '+372', country: 'Estonia' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+679', country: 'Fiji' },
    { code: '+358', country: 'Finland' },
    { code: '+33', country: 'France' },
    { code: '+241', country: 'Gabon' },
    { code: '+220', country: 'Gambia' },
    { code: '+995', country: 'Georgia' },
    { code: '+49', country: 'Germany' },
    { code: '+233', country: 'Ghana' },
    { code: '+30', country: 'Greece' },
    { code: '+1', country: 'Grenada' },
    { code: '+502', country: 'Guatemala' },
    { code: '+224', country: 'Guinea' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+592', country: 'Guyana' },
    { code: '+509', country: 'Haiti' },
    { code: '+504', country: 'Honduras' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+36', country: 'Hungary' },
    { code: '+354', country: 'Iceland' },
    { code: '+91', country: 'India' },
    { code: '+62', country: 'Indonesia' },
    { code: '+98', country: 'Iran' },
    { code: '+964', country: 'Iraq' },
    { code: '+353', country: 'Ireland' },
    { code: '+972', country: 'Israel' },
    { code: '+39', country: 'Italy' },
    { code: '+1', country: 'Jamaica' },
    { code: '+81', country: 'Japan' },
    { code: '+962', country: 'Jordan' },
    { code: '+7', country: 'Kazakhstan' },
    { code: '+254', country: 'Kenya' },
    { code: '+686', country: 'Kiribati' },
    { code: '+82', country: 'South Korea' },
    { code: '+965', country: 'Kuwait' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+856', country: 'Laos' },
    { code: '+371', country: 'Latvia' },
    { code: '+961', country: 'Lebanon' },
    { code: '+266', country: 'Lesotho' },
    { code: '+231', country: 'Liberia' },
    { code: '+218', country: 'Libya' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+370', country: 'Lithuania' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+853', country: 'Macau' },
    { code: '+389', country: 'Macedonia' },
    { code: '+261', country: 'Madagascar' },
    { code: '+265', country: 'Malawi' },
    { code: '+60', country: 'Malaysia' },
    { code: '+960', country: 'Maldives' },
    { code: '+223', country: 'Mali' },
    { code: '+356', country: 'Malta' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+222', country: 'Mauritania' },
    { code: '+230', country: 'Mauritius' },
    { code: '+52', country: 'Mexico' },
    { code: '+691', country: 'Micronesia' },
    { code: '+373', country: 'Moldova' },
    { code: '+377', country: 'Monaco' },
    { code: '+976', country: 'Mongolia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+212', country: 'Morocco' },
    { code: '+258', country: 'Mozambique' },
    { code: '+95', country: 'Myanmar' },
    { code: '+264', country: 'Namibia' },
    { code: '+674', country: 'Nauru' },
    { code: '+977', country: 'Nepal' },
    { code: '+31', country: 'Netherlands' },
    { code: '+64', country: 'New Zealand' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+227', country: 'Niger' },
    { code: '+234', country: 'Nigeria' },
    { code: '+47', country: 'Norway' },
    { code: '+968', country: 'Oman' },
    { code: '+92', country: 'Pakistan' },
    { code: '+680', country: 'Palau' },
    { code: '+970', country: 'Palestine' },
    { code: '+507', country: 'Panama' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+595', country: 'Paraguay' },
    { code: '+51', country: 'Peru' },
    { code: '+63', country: 'Philippines' },
    { code: '+48', country: 'Poland' },
    { code: '+351', country: 'Portugal' },
    { code: '+974', country: 'Qatar' },
    { code: '+40', country: 'Romania' },
    { code: '+7', country: 'Russia' },
    { code: '+250', country: 'Rwanda' },
    { code: '+1', country: 'Saint Kitts and Nevis' },
    { code: '+1', country: 'Saint Lucia' },
    { code: '+1', country: 'Saint Vincent and the Grenadines' },
    { code: '+685', country: 'Samoa' },
    { code: '+378', country: 'San Marino' },
    { code: '+239', country: 'Sao Tome and Principe' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+221', country: 'Senegal' },
    { code: '+381', country: 'Serbia' },
    { code: '+248', country: 'Seychelles' },
    { code: '+232', country: 'Sierra Leone' },
    { code: '+65', country: 'Singapore' },
    { code: '+421', country: 'Slovakia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+252', country: 'Somalia' },
    { code: '+27', country: 'South Africa' },
    { code: '+211', country: 'South Sudan' },
    { code: '+34', country: 'Spain' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+249', country: 'Sudan' },
    { code: '+597', country: 'Suriname' },
    { code: '+268', country: 'Swaziland' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+963', country: 'Syria' },
    { code: '+886', country: 'Taiwan' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+255', country: 'Tanzania' },
    { code: '+66', country: 'Thailand' },
    { code: '+670', country: 'Timor-Leste' },
    { code: '+228', country: 'Togo' },
    { code: '+676', country: 'Tonga' },
    { code: '+1', country: 'Trinidad and Tobago' },
    { code: '+216', country: 'Tunisia' },
    { code: '+90', country: 'Turkey' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+256', country: 'Uganda' },
    { code: '+380', country: 'Ukraine' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+1', country: 'United States' },
    { code: '+598', country: 'Uruguay' },
    { code: '+998', country: 'Uzbekistan' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+379', country: 'Vatican City' },
    { code: '+58', country: 'Venezuela' },
    { code: '+84', country: 'Vietnam' },
    { code: '+967', country: 'Yemen' },
    { code: '+260', country: 'Zambia' },
    { code: '+263', country: 'Zimbabwe' },
  ];

  const filteredCountries = countryCodes.filter(item =>
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.includes(searchQuery)
  );


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
  const handlePhoneNumberChange = (text: string) => {
    const numbersOnly = text.replace(countryCode, '').replace(/[^0-9]/g, '');
    setPhoneNumber(numbersOnly);
  };

  const getFormattedPhoneNumber = () => {
    if (!phoneNumber) return `${countryCode} - `;
    return `${countryCode} - ${phoneNumber}`;
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
          <TouchableOpacity style={styles.eyeIcon}
            onPress={() => setShowDatePicker(true)}>
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
        <View style={styles.phoneContainer}>
          <TouchableOpacity 
            style={styles.countryCodeButton}
            onPress={() => setShowCountryModal(true)}
          >
            <Text style={styles.countryCodeText}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholderTextColor="#3D3D3D"
            placeholder="_ _ _ _ _ _ _ _ _"
            value={getFormattedPhoneNumber()}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.bottomSpacer} />

      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCountryModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country Code</Text>
              <TouchableOpacity onPress={() => setShowCountryModal(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search country or code..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#A0A0A0"
            />
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.code + item.country}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setCountryCode(item.code);
                    setShowCountryModal(false);
                    setSearchQuery('');
                  }}
                >
                  <Text style={styles.countryCode}>{item.code}</Text>
                  <Text style={styles.countryName}>{item.country}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
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
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
  },
  countryCodeButton: {
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E4E4E4',
  },
  countryCodeText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#3D3D3D',
  },
  closeButton: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#9BC7A7',
  },
  countryItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
  },
  countryCode: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
    width: 60,
  },
  countryName: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
  },
  searchInput: {
    height: 40,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Satoshi',
    color: '#3D3D3D',
  },
});