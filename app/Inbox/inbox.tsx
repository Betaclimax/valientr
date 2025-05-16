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

export default function inbox() {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState('Cardiologist');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useGlobalSearchParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState('Notifications'); 

  const goHome = () => {
    router.push('../Home/home');
  };
  const goBooking = () => {
    router.push('../Booking/booking');
  }
  const goValiant = () => {
    router.push('../Valiant/valiant');
  }

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

  return (
    <View style={styles.container}>
      {isDrawerOpen && (
        <TouchableOpacity style={styles.drawerOverlay} activeOpacity={1} onPress={toggleDrawer} />
      )}

      <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeHeader}>
            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeText}>Inbox</Text>
            </View>         
          </View>
        </View>
        <View style={[styles.tabs, styles.fullSpaceBlock]}>
            <TouchableOpacity 
              style={[styles.tab, styles.tabBorder, activeTab === 'Notifications' && styles.activeTab]} 
              onPress={() => setActiveTab('Notifications')}
            >
                <Text style={[styles.label, styles.labelTypo, activeTab === 'Notifications' && styles.activeLabel]}>
                  Notifications
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab1, styles.tabBorder, activeTab === 'Promotions' && styles.activeTab]} 
              onPress={() => setActiveTab('Promotions')}
            >
                <Text style={[styles.label1, styles.labelTypo, activeTab === 'Promotions' && styles.activeLabel]}>
                  Promotions
                </Text>
            </TouchableOpacity> 
        </View>

        {/* Content Section Based on Active Tab */}
        <View style={styles.contentContainer}>
          {activeTab === 'Notifications' ? (
            <Text style={styles.placeholderText}>
              No new information is available at this time.
            </Text>
          ) : (
            <Text style={styles.placeholderText}>
              There are no current offers.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={goHome}>
          <Image
            source={require('../../assets/home/Icon.png')}
            style={{ width: 24, height: 24}} 
          />
          <Text style={[styles.menuText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goValiant}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>MyValiant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goBooking}>
          <Image
            source={require('../../assets/icon/booking.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} >
          <Image
            source={require('../../assets/icon/bell.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.menuText, styles.menuTextActive]}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/icon/ri_voice-ai-fill.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Val-AI</Text>
        </TouchableOpacity>
      </View>
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
    paddingLeft:20,
  },
  fullSpaceBlock: {
    paddingHorizontal: 0,
    width: '100%',
  },
  tab: {
    borderColor: '#9BB9A3',
    paddingBottom: 5,
    marginRight: 20,
  },
  tabBorder: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'center',
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
  },
  activeTab: {
    borderBottomWidth: 2, 
    borderColor: '#72777A',
  },
  labelTypo: {
    lineHeight: 22.4,
    fontSize: 16,
    fontStyle:'normal',
    textAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: '400',
  },
  label: {
    color: '#72777A',
  },
  label1: {
    color: '#A9A9A9',
  },
  activeLabel: {
    color: '#000', 
  },
  tab1: {
    borderBlockColor: 'transparent',
    paddingBottom: 5,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  placeholderText: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#A9A9A9',
    lineHeight: 20,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
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
});