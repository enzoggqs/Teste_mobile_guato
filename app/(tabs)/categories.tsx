import CustomBox from '@/components/CustomBox';
import CustomIcon from '@/components/CustomIcon';
import CustomInput from '@/components/CustomInput';
import CustomTitle from '@/components/CustomTitle';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CategoryListScreen = () => {
  const navigation = useNavigation();

  const handleSeeService = (category: String) => {
    navigation.navigate('services', { category });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header>
        <CustomInput showBackArrow={true} style={styles.input} placeholderText={"Search Category"}></CustomInput>
      </Header>
      <View style={styles.content}>
        <CustomBox scrollable={false}>
          <CustomTitle title={"All Categories"}></CustomTitle>
          <CustomBox scrollable={false} style={styles.box}>
            <CustomBox>
              <CustomIcon
                onPress={() => handleSeeService('AC')}
                title={"AC Repair"}
                color={"#FFBC99"}
                size={70}
                imageSource={require('@/assets/images/ACServiceIcon.png')}
              />
              <CustomIcon
                onPress={() =>handleSeeService('Beauty')}
                title={"Beauty"}
                color={"#CABDFF"}
                size={70}
                imageSource={require('@/assets/images/BeautyServiceIcon.png')}
              />
              <CustomIcon
                onPress={() => handleSeeService('Appliance')}
                title={"Appliance"}
                color={"#B1E5FC"}
                size={70}
                imageSource={require('@/assets/images/ApplianceServiceIcon.png')}
              />
            </CustomBox>
            <CustomBox>
              <CustomIcon
                onPress={() => handleSeeService('Painting')}
                title={"Painting"}
                color={"#B5EBCD"}
                size={70}
                imageSource={require('@/assets/images/PaintingServiceIcon.png')}
              />
              <CustomIcon
                onPress={() => handleSeeService('Cleaning')}
                title={"Cleaning"}
                color={"#FFD88D"}
                size={70}
                imageSource={require('@/assets/images/CleaningServiceIcon.png')}
              />
              <CustomIcon
                onPress={() => handleSeeService('Plumbing')}
                title={"Plumbing"}
                color={"#CBEBA4"}
                size={70}
                imageSource={require('@/assets/images/PlumbingServiceIcon.png')}
              />
            </CustomBox>
            <CustomBox>
              <CustomIcon
                onPress={() => handleSeeService('Electronics')}
                title={"Electronics"}
                color={"#FB9B9B"}
                size={70}
                imageSource={require('@/assets/images/ElectronicsServiceIcon.png')}
              />
              <CustomIcon 
              onPress={() => handleSeeService('Shifting')} 
              title={"Shifting"} 
              color={"#F8B0ED"} 
              size={70} 
              imageSource={require('@/assets/images/ShiftingServiceIcon.png')} 
              />
              <CustomIcon 
              onPress={() => handleSeeService('Mens Salon')} 
              title={"Men's Salon"} 
              color={"#AFC6FF"} 
              size={70} 
              imageSource={require('@/assets/images/MensSalonServiceIcon.png')} 
              />
            </CustomBox>
          </CustomBox>
        </CustomBox>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  category: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
});

export default CategoryListScreen;