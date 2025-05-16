import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Swiper from 'react-native-swiper';

interface SpecialistButtonProps {
  name: string;
  image: any;
  activeCount: number;
  isActive: boolean;
  onPress: () => void;
  index: number;
}

export default function valiant() {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState('Cardiologist');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useGlobalSearchParams();
  const [currentPage, setCurrentPage] = useState(0);

  const goHome = () => {
    router.push('../Home/home');
  };

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

  const SpecialistButton = ({
    name,
    image,
    activeCount,
    isActive,
    onPress,
    index,
  }: SpecialistButtonProps) => {
    const translateX = cardAnimations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [width, 0],
    });

    const opacity = cardAnimations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const scale = cardAnimations[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0.9, 1],
    });

    return (
      <Animated.View style={[styles.specialistItem, { transform: [{ translateX }, { scale }], opacity }]}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.specialistImage} />
          </View>
          <View style={[styles.specialistCard, isActive ? styles.specialistCardActive : styles.specialistCardInactive]}>
            <View style={styles.cardTop}>
              <Text style={styles.specialistName}>{name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

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
              <Text style={styles.welcomeText}>My Valiant</Text>
              <View style={styles.appointmentInfo}>
                <Text style={styles.comingText}>Explore Valiant services to imrpove your healthcare journey</Text>
              </View>
            </View>         
          </View>
        </View>

        <View style={styles.specialistSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Health & Wellness</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.specialistGrid}
          >
            <SpecialistButton
              name="Health Checkups"
              image={require('../../assets/icon/check.png')}
              activeCount={230}
              isActive={activeSpecialist === 'Health Checkups'}
              onPress={() => router.push('/healthcheck/checkuppage')}
              index={0}
            />
            <SpecialistButton
              name="Wellness & Recovery"
              image={require('../../assets/icon/wellness.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Wellness & Recovery'}
              onPress={() => setActiveSpecialist('Wellness & Recovery')}
              index={1}
            />
          </ScrollView>
        </View>
        <View style={styles.specialistSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Health Coverage</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.specialistGrid}
          >
            <SpecialistButton
              name="My Insurance"
              image={require('../../assets/icon/coverage.png')}
              activeCount={230}
              isActive={activeSpecialist === 'My Insurance'}
              onPress={() => setActiveSpecialist('My Insurances')}
              index={0}
            />
          </ScrollView>
        </View>
        <View style={styles.specialistSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Health & Wellness</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.specialistGrid}
          >
            <SpecialistButton
              name="My Medicine"
              image={require('../../assets/icon/medicne.png')}
              activeCount={230}
              isActive={activeSpecialist === 'My Medicine'}
              onPress={() => setActiveSpecialist('My Medicine')}
              index={0}
            />
            <SpecialistButton
              name="Allergic List"
              image={require('../../assets/icon/list.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Allergic List'}
              onPress={() => setActiveSpecialist('Allergic List')}
              index={1}
            />
            <SpecialistButton
              name="Vitals Status"
              image={require('../../assets/icon/status.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Vitals Status'}
              onPress={() => setActiveSpecialist('Vitals Status')}
              index={1}
            />
          </ScrollView>
        </View>
        <View style={styles.specialImagea}>
          <View style={styles.specialImage}>
            <Text style={styles.sectionTitle}>Pick Services for You</Text>
            <Image
              source={require('../../assets/icon/ri_voice-ai-fill.png')}
              style={{ width: 24, height: 24 }} 
            />
          </View>     
        </View>

        {/* Image Slider Section */}
        <View style={styles.sliderContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop
            autoplay
            autoplayTimeout={5}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
            onIndexChanged={index => setCurrentPage(index)}
          >
            <View style={styles.slide}>
              <Image
                source={require('../../assets/icon/pick1.png')}
                style={styles.slideImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../assets/icon/pick2.png')}
                style={styles.slideImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../assets/icon/pick3.png')}
                style={styles.slideImage}
              />
            </View>
          </Swiper>
        </View>
      </ScrollView>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={goHome}>
          <Image
            source={require('../../assets/home/Icon.png')}
            style={{ width: 24, height: 24 }} 
          />
          <Text style={[styles.menuText, styles.menuTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>MyValiant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/icon/booking.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/icon/bell.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Inbox</Text>
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
    padding: 20,
  },
  welcomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  welcomeContent: {
    position: 'relative',
    zIndex: 1,
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Satoshi',
    color: '#131214',
    marginBottom: 8,
    fontWeight: '700',
    lineHeight: 28.8,
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
    height: 100,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#72777A',
    marginTop: 4,
  },
  menuTextActive: {
    color: '#9BB9A3',
    fontWeight: '500',
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
    backgroundColor: '#9BB9A3',
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