import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SectionHeader(props) {
    return(
        <View style={styles.sectionView}>
        <View style = {[{backgroundColor: props.isDarkMode ? "#343434": "#FFFFFF"},styles.textBox]}>
            <Text style={[{color: props.isDarkMode ? "#FFFFFF": "#000000"}, styles.headerLabel]}>{props.title}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    sectionView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    headerLabel: {
        fontSize: 20,
        fontWeight: "600",
    },
    textBox: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 15,
    },
});

export default SectionHeader;