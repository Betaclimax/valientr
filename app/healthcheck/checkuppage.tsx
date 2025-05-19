import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

const ProfileScreen = () => {
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
          <Text style={styles.headerText}>Health Check Up</Text>
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
              source={require('../../assets/images/check1.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check2.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check3.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check4.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check5.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check6.png')}
              style={styles.slideImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/check7.png')}
              style={styles.slideImage}
            />
          </View>
        </Swiper>
      </View>
      <TouchableOpacity style={styles.BookButton}>
        <Text style={styles.BookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
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
    marginBottom: 26,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'Satoshi',
    lineHeight: 28,
    marginLeft: '23%',
    width: '50%',
    marginBottom: 26,
  },
  sliderContainer: {
    flex: 1,
    height: 600,
    width: "100%",
    marginBottom: 30,
  },
  wrapper: {},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9BB9A3',
    marginHorizontal: 4,
  },
  pagination: {
    bottom: 10,
  },
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
    height: 524,
    borderRadius: 16,
    position: 'absolute',
  },
  BookButton: {
    display: "flex",
    width: 350,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 135,
    paddingRight: 135,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 48,
    backgroundColor: '#3D3D3D',
    marginLeft: "8%",

  },
   BookButtonText: {
    fontSize: 16,
    fontFamily: 'Satoshi',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 16,
    fontStyle: 'normal',
  },
});

export default ProfileScreen;