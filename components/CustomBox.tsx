import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

const CustomBox = ({ children, scrollable = true }) => {
    return (
        scrollable ? (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.view}
            >
                <View style={styles.box}>
                    {children}
                </View>
            </ScrollView>
        ) : (
            <View style={[styles.view, styles.nonScrollableBox]}>
                {children}
            </View>
        )
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10.6,
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        elevation: 5,
        alignItems: 'flex-start',
        columnGap: 10
    },
    nonScrollableBox: {
        padding: 16,

    }
});

export default CustomBox;
