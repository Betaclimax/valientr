import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
const { height } = Dimensions.get('window');

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const pages = [
    {
      backgroundImage: require('../../assets/backgroundbanner/doctor1.png'),
      logo: require('../../assets/logo/Valiant_logo_black.png'),
      title: 'Exceptional Care, Anytime',
      description: 'Valiant Clinic delivers world-class medical expertise with personalized attention—wherever you are for 24/7',
    },
    {
      backgroundImage: require('../../assets/backgroundbanner/doctor2.png'),
      logo: require('../../assets/logo/Valiant_logo_white.png'), 
      title: 'World-Class Specialists Around The Globe',
      description: 'Together, we ensure every patient receives the care they deserve, personalized',
    },
   {
      backgroundImage: require('../../assets/backgroundbanner/operationroom.png'),
      logo: require('../../assets/logo/Valiant_logo_black.png'),
      title: 'Empowering Health with Innovation',
      description: 'Our cutting-edge technology adapts to your health needs, delivering personalized support for a better you',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    console.log('Get Started pressed');
    router.push('/signup/signup');
  };

  const handleLogIn = () => {
    console.log('Log In pressed');
  };

  const currentPageData = pages[currentPage];
  return (
    <View style={styles.container}>
      <ImageBackground source={currentPageData.backgroundImage} style={styles.backgroundImage}>
        {/* <View style={styles.overlay} /> */}
        <Image
          source={currentPageData.logo}
          style={styles.logo}
          resizeMode="contain"
        />
          {/* <BlurView intensity={23} tint='light' experimentalBlurMethod='dimezisBlurView' style={styles.blurWrap}> */}
            <View style={styles.card}>
              <View style={styles.scard}>
                <Text style={styles.title}>{currentPageData.title}</Text>
                <Text style={styles.description}>{currentPageData.description}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get started</Text>
              </TouchableOpacity>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/login/login')}>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          {/* </BlurView> */}
        
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  logo: {
    width: 67,
    height: 59.436,
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
  },
  card: {
    display: 'flex',
    width: 327,
    paddingLeft: 16,
    paddingRight: 32,
    marginLeft: 40,
    marginTop: 433,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    boxShadow: '0px -1px 2px 0px rgba(255,255,255,0.15) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.30) inset, 0px 4px 16px 0px rgba(0,0,0,0.08)',
    backdropFilter: 'blur(15px)', 
  },
  scard: {
    gap: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'satoshi',
    color: '#ffffff',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 28.80,
    wordWrap: 'break-word',
    marginTop: 32,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 400,
    wordWrap: 'back-word',
    fontFamily: 'satoshi',
    marginLeft: 0,
  },
  button: {
    display: 'flex',
    padding: 16,
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 48,
    backgroundColor: '#3D3D3D',
    marginBottom: 16,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'satoshi',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginLeft: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
  },
  loginLink: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
    marginBottom: 57,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  mirrorEffect: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
  },
  blurWrap: {
    overflow: 'hidden',  
    display: 'flex',
    width: 327,
    paddingLeft: 16,
    paddingRight: 32,
    marginLeft: 40,
    marginTop: 433,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    boxShadow: '0px -1px 2px 0px rgba(255,255,255,0.15) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.30) inset, 0px 4px 16px 0px rgba(0,0,0,0.08)',
    backdropFilter: 'blur(15px)',   
  }
});