import CustomBox from '@/components/CustomBox';
import CustomIcon from '@/components/CustomIcon';
import CustomInput from '@/components/CustomInput';
import CustomTitle from '@/components/CustomTitle';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CategoryListScreen = () => {
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
              <CustomIcon title={"AC Repair"} color={"#FFBC99"} size={75} imageSource={require('@/assets/images/ACServiceIcon.png')} />
              <CustomIcon title={"Beauty"} color={"#CABDFF"} size={75} imageSource={require('@/assets/images/BeautyServiceIcon.png')} />
              <CustomIcon title={"Appliance"} color={"#B1E5FC"} size={75} imageSource={require('@/assets/images/ApplianceServiceIcon.png')} />
            </CustomBox>
            <CustomBox>
              <CustomIcon title={"Painting"} color={"#B5EBCD"} size={75} imageSource={require('@/assets/images/PaintingServiceIcon.png')} />
              <CustomIcon title={"Cleaning"} color={"#FFD88D"} size={75} imageSource={require('@/assets/images/CleaningServiceIcon.png')} />
              <CustomIcon title={"Plumbing"} color={"#CBEBA4"} size={75} imageSource={require('@/assets/images/PlumbingServiceIcon.png')} />
            </CustomBox>
            <CustomBox>
              <CustomIcon title={"Electronics"} color={"#FB9B9B"} size={75} imageSource={require('@/assets/images/ElectronicsServiceIcon.png')} />
              <CustomIcon title={"Shifting"} color={"#F8B0ED"} size={75} imageSource={require('@/assets/images/ShiftingServiceIcon.png')} />
              <CustomIcon title={"Men's Salon"} color={"#AFC6FF"} size={75} imageSource={require('@/assets/images/MensSalonServiceIcon.png')} />
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