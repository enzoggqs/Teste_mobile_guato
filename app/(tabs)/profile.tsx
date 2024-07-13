import CustomBox from '@/components/CustomBox'
import CustomCard from '@/components/CustomCard'
import CustomInput from '@/components/CustomInput'
import CustomTitle from '@/components/CustomTitle'
import Header from '@/components/Header'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.safeArea}>
            <Header>
            </Header>
            <View style={styles.content}>
                <CustomTitle title={"Profile"} fontSize={30} fontWeight={700} />
                <CustomBox scrollable={false}>
                    <View style={styles.userData}>
                        <View style={styles.userPhoto}>
                            <Image style={styles.userName} source={require("@/assets/images/man.png")} />
                        </View>
                        <View>
                            <ThemedText style={styles.userName}>Ashfak Sayem</ThemedText>
                            <ThemedText style={styles.userMail}>@ashfaksayem</ThemedText>
                        </View>
                    </View>
                </CustomBox>
                <CustomBox scrollable={false}>
                    <ThemedText style={styles.inputLabel}>Phone Number</ThemedText>
                    <CustomInput showGlass={false} border={false}></CustomInput>
                    <ThemedText style={styles.inputLabel}>E-mail</ThemedText>
                    <CustomInput showGlass={false} border={false}></CustomInput>
                    <ThemedText style={styles.inputLabel}>Gender</ThemedText>
                    <CustomInput showGlass={false} border={false}></CustomInput>
                    <ThemedText style={styles.inputLabel}>Date of Birth</ThemedText>
                    <CustomInput showGlass={false} border={false}></CustomInput>
                </CustomBox>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    userData: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        paddingVertical: 8
    },
    userPhoto: {
        borderRadius: 100,
        overflow: 'hidden'
    },
    userName: {
        fontSize: 18,
        fontWeight: 700,
        color: "#1A1D1F"
    },
    userMail: {
        color: "#888C97",
        fontWeight: 500,
        fontSize: 15,
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: 600,
        marginVertical: 10
    }
});

export default Profile