import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomInput = ({ showBackArrow = false, placeholderText, ...props }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {showBackArrow && (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconLeft}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            )}
            <TextInput
                style={[styles.input, showBackArrow && styles.inputWithArrow]}
                placeholder={placeholderText}
                placeholderTextColor={"#9B9E9F"}
                {...props}
            />
            <View style={styles.iconContainer}>
                <Image
                    source={require('@/assets/images/Search.png')}
                    style={styles.iconRight}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: "#FBFBFB"
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 6,
        marginHorizontal: 2,
    },
    inputWithArrow: {
        paddingLeft: 40,
    },
    iconLeft: {
        position: 'absolute',
        left: 10,
    },
    iconRight: {
        width: 20,
        height: 20,
    },
    iconContainer: {
        backgroundColor: '#6759FF',
        width: 42.6,
        height: 42.6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13
    }
});

export default CustomInput;
