import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const viewall = () => {
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
          <Text style={styles.headerText}>Specialists Category</Text>
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
        
        <View style={styles.buttonIcon}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b1.png')}
                    style={styles.button}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b2.png')}
                    style={styles.button}
                />
            </TouchableOpacity>    
        </View>
        
        <View style={styles.buttonIcon}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b3.png')}
                    style={styles.button}
                />
            </TouchableOpacity>    
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b4.png')}
                    style={styles.button}
                />
            </TouchableOpacity>    
        </View>
        <View style={styles.buttonIcon}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b5.png')}
                    style={styles.button}
                />
            </TouchableOpacity>    
            <TouchableOpacity>
                <Image
                    source={require('../../assets/button/b6.png')}
                    style={styles.button}
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
    marginLeft: '20%',
    width: '50%',
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
  }
});

export default viewall;