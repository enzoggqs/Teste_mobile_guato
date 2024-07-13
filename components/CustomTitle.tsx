import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomTitle = ({ title, children, fontSize = 22, fontWeight = 600 }) => {
    return (
        <View style={styles.container}>
            <View style={styles.verticalLine} />
            <Text style={[styles.title, { fontSize: fontSize, fontWeight: fontWeight }]}>{title}</Text>
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalLine: {
        width: 4,
        height: 20,
        backgroundColor: '#CABDFF',
        marginRight: 10,
    },
    title: {
        color: '#000',
        flex: 1,
        letterSpacing: -1
    },
    childrenContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomTitle;
