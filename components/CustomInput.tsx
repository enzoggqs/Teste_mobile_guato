import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomInput = ({ showBackArrow = false, placeholderText, ...props }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.leftSideInput, showBackArrow && styles.leftWithArrow]}>
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
            </View>
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
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: "#FBFBFB",
        justifyContent: 'space-between',
        flex: 1
    },
    leftSideInput: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        maxWidth: '85%',
    },
    leftWithArrow: {
        maxWidth: '85%',
    },
    iconLeft: {
        paddingHorizontal: 6,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        marginLeft: 10,
    },
    inputWithArrow: {
        paddingLeft: 40, // Ajusta o padding para dar espaço ao ícone à esquerda
    },
    iconRight: {
        width: 20,
        height: 20,
    },
    iconContainer: {
        backgroundColor: '#6759FF',
        width: 42.6,
        height: 42.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        marginLeft: 6,
    }
});

export default CustomInput;
