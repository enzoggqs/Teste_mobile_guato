import CustomBox from '@/components/CustomBox';
import CustomIcon from '@/components/CustomIcon';
import CustomInput from '@/components/CustomInput';
import CustomTitle from '@/components/CustomTitle';
import Header from '@/components/Header';
import ServiceBox from '@/components/ServiceBox';
import { ThemedText } from '@/components/ThemedText';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

const ServiceScreen = () => {
    const route = useRoute();
    const { category } = route.params;

    const title = `${category} Repair`;
    const checkUp = `${category} Check-Up`;
    const regularService = `${category} Regular Service`;
    const installation = `${category} Installation`;
    const uninstallation = `${category} Uninstallation`;
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header>
                <CustomInput showBackArrow={true} style={styles.input} placeholderText={"Search Service"}></CustomInput>
            </Header>
            <View style={styles.content}>
                <CustomBox scrollable={false}>
                    <CustomTitle title={title}></CustomTitle>
                    <ServiceBox
                        style={styles.box}
                        borderBottom={true}
                        rating={4.8}
                        evaluations={87}
                        title={checkUp}
                        value={128}
                        imageSource={require('@/assets/images/Service1.png')}
                    />
                    <ServiceBox
                        style={styles.box}
                        borderBottom={true}
                        rating={4.5}
                        evaluations={87}
                        title={regularService}
                        value={128}
                        imageSource={require('@/assets/images/Service2.png')}
                    />
                    <ServiceBox
                        style={styles.box}
                        borderBottom={true}
                        rating={4.5}
                        evaluations={87}
                        title={installation}
                        value={170}
                        imageSource={require('@/assets/images/Service3.png')}
                    />
                    <ServiceBox 
                        style={styles.box}
                        rating={4.5}
                        evaluations={87}
                        title={uninstallation}
                        value={170}
                        imageSource={require('@/assets/images/Service4.png')}
                    />
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

export default ServiceScreen;