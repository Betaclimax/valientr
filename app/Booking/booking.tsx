import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function booking() {
  const { width } = useWindowDimensions();
  const [activeSpecialist, setActiveSpecialist] = useState('Cardiologist');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useGlobalSearchParams();

  const goHome = () => {
    router.push('../Home/home');
  };
  const goValiant = () => {
    router.push('../Valiant/valiant');
  }
  const goInbox = () => {
    router.push('../Inbox/inbox');
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

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const getMonthName = (date: Date) => {
    return date.toLocaleString('default', { month: 'long' });
  };
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const emptyDays = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    let calendarDays = [...emptyDays, ...days];

    while (getCalendarDays.length % 7 !==0) {
      calendarDays.push(null);
    }
    return calendarDays;
  };
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  const onDayPress = (day: number) => {
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateString);
  };
  const renderCalendarDay = ({ item, index }: { item: number | null; index: number }) => {
    if (!item) return <View style={styles.calendarDay} />;
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(item).padStart(2, '0')}`;
    const isHighlighted = selectedDate === dateString || 
      (item === new Date().getDate() && 
      currentDate.getMonth() === new Date().getMonth() && 
      currentDate.getFullYear() === new Date().getFullYear());
    return (
      <TouchableOpacity onPress={() => onDayPress(item)} style={[styles.calendarDay, isHighlighted && styles.highlightedDay]}>
        <Text style={[styles.dayText, isHighlighted && styles.highlightedDayText]}>{item}</Text>
      </TouchableOpacity>
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
              <Text style={styles.welcomeText}>Booking</Text>
            </View>
            <Image source={require('../../assets/icon/Plus.png')} style={styles.plusIcon}></Image>
          </View>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity onPress={prevMonth}>
              <Image source={require('../../assets/icon/Left Icon.png')} style={styles.narrowIcon}></Image>
            </TouchableOpacity>
            <Text style={styles.monthText}>
              {getMonthName(currentDate)} {currentDate.getFullYear()}
            </Text>
            <TouchableOpacity onPress={nextMonth}>
              <Image source={require('../../assets/icon/Right Icon.png')} style={styles.narrowIcon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.weekDays}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <Text key={index} style={styles.weekDayText}>{day}</Text>
            ))}
          </View>
          <FlatList
            data={getCalendarDays()}
            renderItem={renderCalendarDay}
            keyExtractor={(item, index) => index.toString()}
            numColumns={7}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.viewDividers}>
          <View style={styles.divider} />
        </View>
        {/* Appointment Section */}
        <View style={styles.appointmentSection}>
          <View style={styles.appointmentHeader}>
            <Text style={styles.sectionTitle}>Your Appointment</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={goHome}>
          <Image
            source={require('../../assets/home/Icon.png')}
            style={{ width: 24, height: 24 }}
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
        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/icon/booking.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={[styles.menuText, styles.menuTextActive]}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goInbox}>
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

// Styles remain unchanged
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
    fontSize: 32,
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    color: '#131214',
    fontWeight: '700',
    lineHeight: 38.4,
    width: '100%'
  },
  calendarSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 32
  },
  arrowText: {
    fontSize: 20,
    color: '#000',
  },
  monthText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#3D3D3D',
    fontStyle: 'normal',
    lineHeight: 22.4,
  },
  weekDays: {
    textAlign: 'center',
    fontFamily: 'Satoshi',
    fontSize:12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color: '#72777A',
    fontWeight: 400,
    lineHeight: 12
  },
  weekDayText: {
    fontSize: 12,
    fontFamily: 'Satoshi',
    fontWeight: '800',
    color: '#A9A9A9',
    width: 40,
    textAlign: 'center',
    marginHorizontal: 5
  },
  calendarDay: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  dayText: {
    fontSize: 14,
    fontFamily: 'Satoshi',
    fontWeight: '400',
    color: '#3D3D3D',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 14,
  },
  highlightedDay: {
    backgroundColor: '#D0E1D4',
    borderRadius: 20,
  },
  highlightedDayText: {
    color: '#9BB9A3',
    fontWeight: '600',
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
  plusIcon: {
    display: 'flex',
    width:30,
    height:30,
  },
  narrowIcon: {
    width:32,
    height:32
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
  }
});