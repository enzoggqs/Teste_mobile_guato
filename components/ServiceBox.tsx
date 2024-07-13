import { View, StyleSheet, Image, Text } from 'react-native';
import { ThemedText } from './ThemedText';

const ServiceBox = ({ children, title, value, borderBottom = false, rating, evaluations, imageSource }) => {
    return (
        <View style={[styles.view, borderBottom && styles.borderBottomStyle]}>
            <View style={styles.box}>
            {imageSource && <Image source={imageSource} style={styles.serviceImage} />}
                <View style={styles.info}>
                    <View style={styles.rating}>
                        <Image source={require('@/assets/images/Star.png')} />
                        <Text>{" "}</Text>
                        <ThemedText style={styles.ratingNote}>{rating}</ThemedText>
                        <Text>{" "}</Text>
                        <ThemedText style={styles.evaluations}>({evaluations})</ThemedText>
                    </View>
                    <ThemedText style={styles.title}>{title}</ThemedText>
                    <ThemedText style={styles.startsFrom}>Starts From</ThemedText>
                    <View style={styles.valueBox}>
                       <ThemedText style={styles.value}>${value}</ThemedText>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 16,
        backgroundColor: '#FFFFFF',
    },
    borderBottomStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        elevation: 5,
        alignItems: 'flex-start',
        columnGap: 10,
        marginBottom: 16
    },
    info: {
        rowGap: 6
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingNote: {
        fontWeight: 700,
        fontSize: 15
    },
    evaluations: {
        color: "#6F767E",
        fontWeight: 700,
        fontSize: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: "#1A1D1F"
    },
    startsFrom: {
        color: "#9A9FA5",
        fontWeight: 500,
        fontSize: 14
    },
    valueBox: {
        backgroundColor: "#B5E4CA",
        width:50,
        height:25,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 9,
        paddingHorizontal: 12
    },
    value: {
        fontWeight: 700,
        fontSize: 14
    }
});

export default ServiceBox;
