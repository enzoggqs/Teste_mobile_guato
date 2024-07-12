import { View, StyleSheet, Button, Pressable } from 'react-native';
import { ThemedText } from './ThemedText';

const CustomCard = ({ children, color, product, offer }) => {
    return (
        <View style={[styles.view, { backgroundColor: color }]}>
            <ThemedText style={styles.title}>Offer {product}</ThemedText>
            <ThemedText style={styles.offer}>Get {offer}%</ThemedText>
            <Pressable style={styles.button}>
                <ThemedText style={styles.buttonText}>Grab Offer &gt;</ThemedText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        borderRadius: 10.6,
        width: 330,
        height: 190,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 26,
        paddingHorizontal: 24,
        rowGap: 14
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
    },
    offer: {
        fontWeight: 600,
        fontSize: 60,
        lineHeight: 60,
        letterSpacing: -2
    },
    button: {
        backgroundColor: '#ffffff',
        borderRadius: 115
    },
    buttonText: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        color: "#6A9B7E",
        fontSize: 18,
        fontWeight: 500
    }

});

export default CustomCard;
