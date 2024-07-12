import { useNavigation } from 'expo-router';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const CustomIcon = ({ title, color, imageSource, size = 50, border = false, onPress }) => {


    const handlePress = () => {
        if (onPress) {
            onPress(); 
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <View style={[
                    styles.circle,
                    {
                        backgroundColor: color,
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderWidth: border ? 2 : 0,
                        borderColor: border ? '#ECECEC' : 'transparent'
                    }
                ]}>
                    <Image source={imageSource} style={[styles.image, { width: size * 0.5, height: size * 0.5 }]} />
                </View>
            </Pressable>
            {title && <Text style={styles.title}>{title}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    },
    title: {
        marginTop: 15,
        fontSize: 16,
        color: '#000',
        fontWeight: 500,
    },
});

export default CustomIcon;
