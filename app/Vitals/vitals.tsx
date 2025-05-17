import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const vitals = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Back Button and Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require('../../assets/icon/Left Icon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Patient Vitals Summary</Text>
        </View>
      </View>
      <View>
        <Image
            source={require('../../assets/vitals/human2.png')}   
            style={styles.human}
        />
      </View>
      <View style={styles.viewDividers}>
        <View style={styles.divider} />
      </View>
        <View style={styles.appointmentSection}>
            <View style={styles.appointmentHeader}>
                <Text style={styles.sectionTitle}>Latest Summary</Text>
                <TouchableOpacity>
                <Text style={styles.viewAllText}>See ALL</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backIcon: {
    marginTop:30,
    width: 32,
    height: 32,
    marginBottom: 26,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'Satoshi',
    lineHeight: 28,
    marginLeft: '18%',
    width: '100%',
    marginTop:30,
    marginBottom: 26,
  },
  searchContainer: {
    display: 'flex',
    paddingTop: 8,
    paddingLeft: 24,
    paddingBottom: 8,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    borderRadius:24,
    borderColor: '#3D3D3D'
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#3D3D3D',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#72777A',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 22.4,
    fontFamily: 'Satoshi',
  },
   searchIcon: {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    gap: 10,
    borderRadius: 32,
    width: 32,
    height: 32,
  },
  buttonIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  button: {
    width: 167,
    height: 250,
    flexShrink: 0
  },
  human: {
    width: 350,
    height: 581.4,
    flexShrink: 0,
    marginLeft: "10%"
  },
   viewDividers: {
    flex:1,
    width: '100%',
    height: 1,
    marginTop: 32,
    marginBottom: 20
  },
  divider: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#ededed'
  },
    appointmentSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#3D3D3D',
    fontStyle: 'normal',
    lineHeight: 22.4
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
    fontStyle: 'normal',
    lineHeight:14
  },
});

export default vitals;