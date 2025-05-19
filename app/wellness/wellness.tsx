import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const wellness = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/wellness.png')}
          style={[styles.background, { marginTop: 0 }]} 
          imageStyle={{ resizeMode: 'cover' }}
        >
      <View style={styles.overlay} />

          {/* Back Button and Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require('../../assets/icon/Left Icon.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.wellnesscontainer}>
            <Text style={styles.wellness}>Wellness and Recovery</Text>
          </View>
          <View style={styles.wellnesscontainer}>
            <Text style={styles.wellnessdes}>Supporting your body with rebalance energy and boost recovery</Text>
          </View>
        <Text style={styles.popular}>Popular Services</Text>
         
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <Text style={styles.name}>Vitadrip®</Text>
            <Text style={styles.details}>Boost immunity, energy, and recovery with targeted IV care.</Text>
          </View>
        </ImageBackground>
        {/* Wellness and Recovery Services  Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Wellness and Recovery Services </Text>
        </View>
        <View style={styles.settings}>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>Vitadrip®</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>NAD Therapy & Chelation</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>Intramuscular Therapy</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>Stemcell Therapy</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>Peptide Therapy</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingOption}>
            <Text style={styles.optionText}>Laboratory</Text>
            <Image style={styles.Right} resizeMode="cover"
              source={require('../../assets/icon/Right Icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  background: {
    backgroundColor: '#C3CFC6',
    height: 882,
    justifyContent: 'flex-start',
  },
  backgroundimage: {
    flex: 1,
    width: "100%",
    height: 500,
    alignSelf: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backIcon: {
    width: 32,
    height: 32,
    marginBottom: 26
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'Satoshi',
    lineHeight: 28,
    marginLeft: "33%",
    width: '50%',
    marginBottom:26,
  },
  profileContainer: {
    display: 'flex',
    width: 327,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.26)',
    boxShadow: '0px -1px 2px 0px rgba(255, 255, 255, 0.29) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.30) inset, 0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(15px)',
    alignSelf: 'center',
    opacity: 0.8
  },
  initialsCircle: {
    width: 100,
    height: 100,
    borderRadius: 57,
    backgroundColor: '#9BC7A7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  initialsText: {
    fontSize: 30,
    fontWeight: 700,
    color: '#3D3D3D',
    fontStyle: 'normal',
    lineHeight: 28.8,
    fontFamily: 'Satoshi',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    backgroundColor: '#3D3D3D',
    borderRadius:48,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: '#fff',
    fontStyle: 'normal',
    lineHeight: 28.8,
    fontFamily: 'Satoshi',
    marginTop: 20,
    alignSelf: 'flex-start'
  },
  details: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Satoshi',
    fontWeight: '400',
    marginBottom: 5,
    lineHeight: 22.4,
    marginTop: 20,
  },
  editButton: {
    display: 'flex',
    height: 48,
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  editText: {
    fontSize: 16,
    color: '#3D3D3D',
    fontWeight: '500',
    lineHeight: 16,
    fontStyle: 'normal',
    fontFamily: 'Satoshi',
  },
  sectionHeader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionHeaderText: {
    marginTop: 24,
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '700',
    color: '#3D3D3D',
    marginBottom: 16,
    lineHeight: 22.4
  },
  healthData: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  toggleContainer: {
    borderRadius: 24,
    backgroundColor: '#d4e5d9',
    width: 264,
    height: 96,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom: 16,
    gap:10,
    flex:1,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  toggleText: {
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
    fontFamily: 'Satoshi',
    color: '#3d3d3d',
    textAlign: 'left'
  },
  toggleTextActive: {
    color: '#4a4a4a',
    fontWeight: '500',
  },
  settings: {
    paddingHorizontal: 15,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#3D3D3D',
    fontStyle:'normal',
    fontWeight: '400',
    lineHeight: 22.4,
    fontFamily: 'Satoshi', 
  },
  chevron: {
    fontSize: 20,
    color: '#666',
  },
  frameChild: {
    borderRadius: 1920,
    width: 64,
    height:64,
    aspectRatio: 1/1,
    flexShrink: 0,
    backgroundColor: '#DFECE2',
    marginRight:10
  },
  full: {
    justifyContent: "center",
    flex:1,
    marginLeft:12,
    height: "50%"
  },
  fulls: {
    flexDirection: 'row'
  },
  specialistGrid: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 16,
  },
  iconf: {
    display: 'flex',
    width:32,
    height:32,
    padding: 6.51,
    alignItems: 'center',
    gap: 5.9
  },
  Right: {
    display: 'flex',
    width:32,
    height:32,
    padding: 6.51,
    alignItems: 'center',
  },
  wellnesscontainer: {
    alignItems: 'center'
  },
  wellness: {
    fontFamily: 'Satoshi',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight:38.4,
    color: '#F7FAF8',
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: "10%"
  },
  wellnessdes: {
    fontFamily: 'Satoshi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 22.4,
    color: '#F7FAF8',
    opacity: 0.7,
    backdropFilter: 'blur(2px)',
    marginLeft: "10%",
  },
  popular: {
    fontFamily: 'Satoshi',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 28.8,
    color: '#fff',
    marginTop: 425.5,
    marginLeft: '10%',
    marginBottom: 20.5
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default wellness;