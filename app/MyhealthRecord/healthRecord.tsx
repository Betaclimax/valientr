import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

interface SpecialistButtonProps {
  name: string;
  image: any;
  activeCount: number;
  isActive: boolean;
  onPress: () => void;
  index: number;
}

export default function healthReacord() {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState('Cardiologist');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useGlobalSearchParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState('Health Assessment'); 

  const cardAnimations = useRef(
    Array(6).fill(null).map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = cardAnimations.map((anim, index) =>
      Animated.spring(anim, {
        toValue: 1,
        tension: 80,
        friction: 10,
        delay: index * 200,
        useNativeDriver: true,
      })
    );
    Animated.stagger(200, animations).start();
  }, []);

  const getDrawerWidth = () => {
    if (width < 375) return width * 0.75;
    else if (width < 500) return width * 0.6;
    return width * 0.4;
  };

  const [drawerWidth, setDrawerWidth] = useState(getDrawerWidth());
  useEffect(() => {
    setDrawerWidth(getDrawerWidth());
  }, [width]);

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-drawerWidth, 0],
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Health Assessment':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>Your health assessment data will be displayed here.</Text>
          </View>
        );
      case 'Prescription':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>List of your prescriptions will be shown here.</Text>
          </View>
        );
      case 'Laboratory Result':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>Your laboratory results will appear here.</Text>
          </View>
        );
      case 'Others':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>Additional health records will be displayed here.</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {isDrawerOpen && (
        <TouchableOpacity style={styles.drawerOverlay} activeOpacity={1} onPress={toggleDrawer} />
      )}

      <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
        {/* Back Button and Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require('../../assets/icon/Left Icon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Health Record</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.tabs, styles.fullSpaceBlock]}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Health Assessment' && styles.activeTab]} 
              onPress={() => setActiveTab('Health Assessment')}
            >
              <Text style={[styles.label, styles.labelTypo, activeTab === 'Health Assessment' && styles.activeLabel]}>
                Health Assessment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Prescription' && styles.activeTab]} 
              onPress={() => setActiveTab('Prescription')}
            >
              <Text style={[styles.label, styles.labelTypo, activeTab === 'Prescription' && styles.activeLabel]}>
                Prescription
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Laboratory Result' && styles.activeTab]} 
              onPress={() => setActiveTab('Laboratory Result')}
            >
              <Text style={[styles.label, styles.labelTypo, activeTab === 'Laboratory Result' && styles.activeLabel]}>
                Laboratory Result
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Others' && styles.activeTab]} 
              onPress={() => setActiveTab('Others')}
            >
              <Text style={[styles.label, styles.labelTypo, activeTab === 'Others' && styles.activeLabel]}>
                Others
              </Text>
            </TouchableOpacity>  
          </View>
        </ScrollView>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeContent: {
    position: 'relative',
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Satoshi',
    color: '#000',
    fontWeight: '700',
    lineHeight: 34,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 24,
    paddingLeft: 20,
  },
  fullSpaceBlock: {
    paddingHorizontal: 0,
    width: 'auto',
  },
  tab: {
    paddingBottom: 5,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2, 
    borderColor: '#72777A',
  },
  labelTypo: {
    lineHeight: 22.4,
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  label: {
    color: '#72777A',
  },
  activeLabel: {
    color: '#000', 
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  placeholderText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
    lineHeight: 22.4,
    fontStyle: 'normal',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    height: 80,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#A9A9A9',
    marginTop: 4,
  },
  menuTextActive: {
    color: '#9BB9A3',
    fontWeight: '600',
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },
  appointmentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  comingText: {
    color: '#3D3D3A',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
  },
  specialistSection: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  sectionTitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22.4,
    color: '#3D3D3D',
  },
  specialistGrid: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 16,
  },
  specialistItem: {
    width: 168,
    marginRight: 8,
  },
  imageContainer: {
    position: 'relative',
    height: 45,
    alignItems: 'center',
  },
  specialistImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 25,
    zIndex: 2,
  },
  specialistCard: {
    backgroundColor: 'rgba(193, 225, 204, 0.32)',
    width: 168,
    height: 120,
    borderRadius: 24,
    padding: 10,
    paddingTop: 80,
    alignItems: 'center',
  },
  specialistCardInactive: {},
  specialistCardActive: {
    backgroundColor: '#D4E5D9',
    backgroundImage: 'linear-gradient(to bottom, #D4E9D4 0%, #C4D9C4 50%, #B4C9B4 100%)',
  },
  cardTop: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialistName: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
    lineHeight: 16.8,
    textAlign: 'center',
    fontStyle: 'normal',
  },
  specialImagea: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  specialImage: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    gap: 12,
    alignItems: 'center',
    marginBottom: 5,
  },
  sliderContainer: {
    backgroundColor: '#fff',
    flex: 1,
    height: 410,
    width: '100%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    left: '50%',
    position: 'absolute',
    marginLeft: -151.7,
    top: 23,
    width: 303,
    height: 357,
  },
  slideImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    position: 'absolute',
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C3CFC6',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9BB9A3',
    marginHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backIcon: {
    marginTop: 30,
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
    marginLeft: '20%',
    width: '50%',
    marginTop: 30,
    marginBottom: 26,
  },
});