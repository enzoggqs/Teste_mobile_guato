import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, ScrollView, Pressable } from 'react-native';
import CustomBox from '@/components/CustomBox';
import Header from '@/components/Header';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import CustomInput from '@/components/CustomInput';
import CustomCard from '@/components/CustomCard';
import CustomIcon from '@/components/CustomIcon';
import CustomTitle from '@/components/CustomTitle';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const [location, setLocation] = useState('');
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState("ASHFAK");
  const navigation = useNavigation(); // Obtém a função de navegação

  const handleSeeAllPress = () => {
    navigation.navigate('categories'); // Navega para a tela de lista de categorias
  };

  return (
    <ScrollView style={styles.safeArea}>
      <Header>
        <View style={styles.boxLeft}>
          <Image source={require('@/assets/images/icon.png')} />
          <View style={styles.localization}>
            <Text style={styles.headerText}>CURRENT LOCATION</Text>
            {location ? <Text style={styles.locationSummary}>{location}</Text> : null}
            <Collapsible title="Enter your location" onLocationChange={setLocation} />
          </View>
        </View>
        <View style={styles.boxRight}>
          <View style={styles.badgeText}>
            <Text style={styles.tierText}>BRONZE</Text>
            <Text style={styles.points}>{points} POINTS</Text>
          </View>
          <Image style={styles.badgeImage} source={require('@/assets/images/Badge.png')} />

        </View>
      </Header>
      <View style={styles.content}>
        <CustomBox scrollable={false}>
          <ThemedText style={styles.username}>HELLO {username} 👋</ThemedText>
          <ThemedText style={styles.infoText}>What you are looking for today</ThemedText>
          <CustomInput placeholderText={"Search what you need..."} showBackArrow={false} />
        </CustomBox>
        <CustomBox>
          <CustomCard color={"#EAF6EF"} product={"AC Service"} offer={"25"} />
          <CustomCard color={"#E9F6FC"} product={"Internet Service"} offer={"40"} />
          <CustomCard color={"#EAF6EF"} product={"Beauty Service"} offer={"40"} />
          <CustomCard color={"#E9F6FC"} product={"Cleaning Service"} offer={"40"} />
          <CustomCard color={"#EAF6EF"} product={"Painting Service"} offer={"40"} />
          <CustomCard color={"#E9F6FC"} product={"Plumbing Service"} offer={"40"} />
          <CustomCard color={"#EAF6EF"} product={"Electronics Service"} offer={"40"} />
        </CustomBox>
        <CustomBox>
          <CustomIcon title={"AC Repair"} color={"#FFBC99"} size={60} imageSource={require('@/assets/images/ACServiceIcon.png')} />
          <CustomIcon title={"Beauty"} color={"#CABDFF"} size={60} imageSource={require('@/assets/images/BeautyServiceIcon.png')} />
          <CustomIcon title={"Appliance"} color={"#B1E5FC"} size={60} imageSource={require('@/assets/images/ApplianceServiceIcon.png')} />
          <CustomIcon onPress={handleSeeAllPress} border={true} title={"See All"} color={"#FAFAFA"} size={60} imageSource={require('@/assets/images/ArrowForward.png')} />
        </CustomBox>
        <CustomBox scrollable={false}>
          <CustomTitle title="Cleaning Services">
            <Pressable style={styles.button}>
              <ThemedText style={styles.buttonText}>See All &gt;</ThemedText>
            </Pressable>
          </CustomTitle>
          <CustomBox scrollable={true}>
            <View style={styles.cleaningImageContainer}>
              <Image source={require('@/assets/images/Cleaning1.png')} />
              <ThemedText style={styles.cleaningName}>Home Cleaning</ThemedText>
            </View>
            <View>
              <Image source={require('@/assets/images/Cleaning2.png')} />
              <ThemedText style={styles.cleaningName}>Carpet Cleaning</ThemedText>
            </View>
            <View style={styles.cleaningImageContainer}>
              <Image source={require('@/assets/images/Cleaning1.png')} />
              <ThemedText style={styles.cleaningName}>Home Cleaning</ThemedText>
            </View>
            <View>
              <Image source={require('@/assets/images/Cleaning2.png')} />
              <ThemedText style={styles.cleaningName}>Carpet Cleaning</ThemedText>
            </View>
          </CustomBox>
        </CustomBox>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  content: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 12,
    fontWeight: '500',
    color: "#636A75"
  },
  text: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  boxLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  localization: {
    marginLeft: 9,
  },
  locationSummary: {
    marginTop: 4,
    fontSize: 17,
    color: '#172B4D',
  },
  tierText: {
    color: '#F4BF4B',
    fontWeight: 600,
    fontSize: 13.3,
  },
  points: {
    color: '#636A75',
    fontSize: 10.6,
    borderBottomColor: '#636A75',
    borderBottomWidth: 1,
  },
  badgeText: {
    display: 'flex',
    alignItems: 'center'
  },
  badgeImage: {
    marginLeft: 6.5,
  },
  username: {
    color: '#666C89',
    fontSize: 18.5,
    fontWeight: 600
  },
  infoText: {
    fontSize: 40,
    fontWeight: 700,
    marginTop: 5,
    marginBottom: 20,
    lineHeight: 48,
    letterSpacing: -3
  },
  cleaningImageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cleaningName: {
    fontWeight: 600,
    fontSize: 17
  },
  button: {
    borderColor: "#EFEFEF",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 36
  },
  buttonText: {
    color: "#6F767E",
    fontSize: 15,
    fontWeight: 600
  }
});
