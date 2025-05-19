import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Toast from 'react-native-toast-message';

interface SpecialistButtonProps {
  name: string;
  image: any;
  activeCount: number;
  isActive: boolean;
  onPress: () => void;
  index: number;
}

const CustomToast = ({ text1, text2 }: { text1: string; text2?: string }) => (
  <View style={styles.customToastContainer}>
    <View style={styles.customToastContent}>
      <Text style={styles.customToastTitle}>{text1}</Text>
      {text2 && <Text style={styles.customToastMessage}>{text2}</Text>}
    </View>
  </View>
);

export default function Home() {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState('Cardiologist');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useGlobalSearchParams();
  const [currentPage, setCurrentPage] = useState(0);

  const goprofile = () => {
    router.push('../Profile/profile');
  }
  const goValiant = () => {
    router.push('../Valiant/valiant')
   }
  const goBooking = () => {
    router.push('../Booking/booking');
  } 
  const goInbox = () => {
    router.push('../Inbox/inbox');
  }
  const goSpecialists = () => {
    router.push('../Viewall/viewall')
  }
  const goValAi = () => {
    Toast.show({
      type: 'custom',
      text1: 'Val-AI is Almost Here!',
      text2: 'Our AI-powered assistant will soon enhance your healthcare experience. Stay tuned!',
      position: 'top',
      visibilityTime: 5000,
      topOffset: 60,
    })
  }

  const cardAnimations = useRef(
    Array(6).fill(null).map(() => new Animated.Value(0))
  ).current;

  const pages = [
    {
      title: 'Medical Check Up',
      description: 'Understand your body better by checking personal health'
    },
    {
      title: 'Medical Check up2',
      description: 'Understand your body better by checking personal health',
    },
    {
      title: 'Medical Check up3',
      description: 'Understand your body better by checking personal health',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const currentPageData = pages[currentPage];

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
              <Text style={styles.specialistCount}>{activeCount} doctors</Text>
            </View>
            <View style={styles.cardSeparator} />
            <View style={styles.cardBottom}>
              <Text style={styles.activeConsult}>Active Consult</Text>
              <Text style={styles.activeConsultNumber}>{isActive ? (activeCount > 30 ? 24 : activeCount) : ''}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const handleTryNow = () => {
    console.log('Try Now pressed');
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
              <Text style={styles.welcomeText}>Hi, Amanda</Text>
              <View style={styles.appointmentInfo}>
                <Text style={styles.comingText}>You have </Text>
                <Text style={styles.appointmentText}>0 appointment</Text>
              </View>
            </View>
            <TouchableOpacity onPress={goprofile}>
                <View style={styles.userIcon}>
                <Text style={styles.userInitial}>AJ</Text>
            </View>
            </TouchableOpacity>           
          </View>
          <ImageBackground
            source={require('../../assets/home/banner.png')}
            style={styles.welcomeBanner}
            imageStyle={{ borderRadius: 24 }}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View  style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>{currentPageData.title}</Text>
                <Text style={styles.bannerDescription}>{currentPageData.description}</Text>
                <TouchableOpacity style={styles.tryNowButton} onPress={handleTryNow}>
                <Text style={styles.tryNowText}>Try Now</Text>
                <Image
                  source={require('../../assets/icon/Icon.png')}
                  style={styles.arrowIcon}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.dots}>
              {pages.map((_, index) => (
                <View
                  key={index}
                  style={[styles.dot, { opacity: index === currentPage ? 1 : 0.3 }]}
                />
              ))}
            </View>
          </ImageBackground>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search doctors/specialists..."
            />
            <Image
              source={require('../../assets/icon/search.png')}
              style={styles.searchIcon}
            />
          </View>
        </View>

        {/* Specialist Category Section */}
        <View style={styles.specialistSection}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Specialists Category</Text>
            <TouchableOpacity onPress={goSpecialists}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.specialistGrid}
          >
            <SpecialistButton
              name="Cardiologist"
              image={require('../../assets/home/heart.png')}
              activeCount={230}
              isActive={activeSpecialist === 'Cardiologist'}
              onPress={() => setActiveSpecialist('Cardiologist')}
              index={0}
            />
            <SpecialistButton
              name="Nephrologists"
              image={require('../../assets/home/Nephrologist.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Nephrologists'}
              onPress={() => setActiveSpecialist('Nephrologists')}
              index={1}
            />
            <SpecialistButton
              name="Hepatologists"
              image={require('../../assets/home/Hepatologists.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Hepatologists'}
              onPress={() => setActiveSpecialist('Hepatologists')}
              index={1}
            />
            <SpecialistButton
              name="Gastroenterology"
              image={require('../../assets/home/Gastroenterology.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Gastroenterology'}
              onPress={() => setActiveSpecialist('Gastroenterology')}
              index={3}
            />
            <SpecialistButton
              name="Endocrinologists"
              image={require('../../assets/home/Endocrinologists.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Endocrinologists'}
              onPress={() => setActiveSpecialist('Endocrinologists')}
              index={4}
            />
            <SpecialistButton
              name="Orthopedics"
              image={require('../../assets/home/Orthopedics.png')}
              activeCount={320}
              isActive={activeSpecialist === 'Orthopedics'}
              onPress={() => setActiveSpecialist('Orthopedics')}
              index={5}
            />
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/home/Icon.png')}
            style={{ width: 24, height: 24 }} 
          />
          <Text style={[styles.menuText, styles.menuTextActive]}>Home</Text>
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
        <TouchableOpacity style={styles.menuItem} onPress={goInbox}>
          <Image
            source={require('../../assets/icon/bell.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goValAi}>
          <Image
            source={require('../../assets/icon/ri_voice-ai-fill.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.menuText}>Val-AI</Text>
        </TouchableOpacity>
      </View>
      <Toast
        config={{
          custom: ({ text1, text2 }) => <CustomToast text1={text1 ?? ''} text2={text2} />,
        }}
      />
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
  userIcon: {
    display: 'flex',
    padding: 15.37,
    width: 54.7,
    height: 55.7,
    borderRadius: 30.74,
    backgroundColor: '#9BB9A3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  userInitial: {
    fontFamily: 'Satoshi',
    fontSize: 19.212,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 23.05,
    color: '#3D3D3D'
  },
  welcomeBanner: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#5B675E',
  },
  bannerContent: {
    display: 'flex',
    justifyContent: 'center',
    width: 220,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    boxShadow: '0px -1px 2px 0px rgba(255,255,255,0.15) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.65) inset',
    backdropFilter: 'blur(15px)',
    marginTop: 148,
  },
  
  bannerTitle: {
    fontFamily: 'Satoshi',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#fff',
    fontWeight: '700',
    lineHeight: 19.2,
    marginBottom: 8,
  },
  bannerDescription: {
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16.8,
    fontSize: 14,
    color: '#fff',
    marginBottom: 12,
  },
  tryNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D3D3D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 16,
    gap: 8,
  },
  tryNowText: {
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
    color: '#fff',
    fontSize: 14,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  searchContainer: {
    display: 'flex',
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
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
  specialistSection: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 1,
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
    fontWeight: 700,
    lineHeight: 22.4,
    color: '#3D3D3D',
  },
  viewAll: {
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#72777A',
    lineHeight: 14,
  },
  specialistGrid: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 16,
  },
  specialistItem: {
    width: 180,
    marginRight: 8,
  },
  imageContainer: {
    position: 'relative',
    height: 85, 
    alignItems: 'center',
  },
  specialistImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 40,
    zIndex: 2,
  },
  specialistCard: {
    backgroundColor: '#E7E7E7',
    width: '100%',
    height: 222,
    borderRadius: 24,
    padding: 16,
    paddingTop: 80, 
    alignItems: 'center',
    shadowColor: '#E7E7E7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundImage: 'linear-gradient(to bottom, #F0F5F0 0%, #E0E5E0 50%, #D0D5D0 100%)',
  },
  specialistCardInactive: {},
  specialistCardActive: {
    height: 240,
    backgroundColor: '#D4E5D9',
    backgroundImage: 'linear-gradient(to bottom, #D4E9D4 0%, #C4D9C4 50%, #B4C9B4 100%)',
  },
  cardTop: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 3,
    marginTop: 30,
  },
  cardBottom: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 1,
    flexDirection: 'row',
  },
  specialistName: {
    fontSize: 16.515,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#3D3D3D',
    lineHeight: 16.515,
    textAlign: 'center',
    fontStyle: 'normal',
    marginBottom: 9.44,
  },
  specialistCount: {
    fontSize: 16.515,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#72777A',
    marginBottom: 4,
    lineHeight: 16.515,
    textAlign: 'center',
  },
  activeConsult: {
    fontSize: 14.156,
    fontStyle: 'normal',
    lineHeight: 14.156,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
    marginRight: 4,
  },
  activeConsultNumber: {
    fontSize: 12,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#333',
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
    height:100,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontStyle:'normal',
    fontWeight: '400',
    color: '#72777A',
    marginTop: 4,
  },
  menuTextActive: {
    color: '#9BB9A3',
    fontWeight: '500',
  },
  scrollContent: {
    paddingBottom: 100,
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
  welcomeContent: {
    position: 'relative',
    zIndex: 1,
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Satoshi',
    color: '#3D3D3A',
    marginBottom: 8,
    fontWeight: '700',
  },
  appointmentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentText: {
    color: '#9BB9A3',
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    fontStyle: 'normal',
    marginRight: 8,
    lineHeight: 21,
  },
  comingText: {
    color: '#3D3D3A',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
  },
  dots: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 8,
    height: 8,
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 8,
    marginBottom:20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9BB9A3',
    marginHorizontal: 4,
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
  customToastContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#D4E5D9',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#9BB9A3',
  },
  customToastContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  customToastTitle: {
    fontFamily: 'Satoshi',
    fontSize: 16,
    fontWeight: '700',
    color: '#3D3D3D',
    lineHeight: 20,
    marginBottom: 4,
  },
  customToastMessage: {
    fontFamily: 'Satoshi',
    fontSize: 14,
    fontWeight: '400',
    color: '#3D3D3D',
    lineHeight: 18,
  },
});