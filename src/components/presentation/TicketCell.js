import React from 'react';
import {View, Text, Image, StyleSheet} from "react-native";
import config from "../../config/config";

function TicketCell(props) {
    return(
    <View >
        <View style={[{backgroundColor: "#FFFFFF"}, styles.cellDefaults]}>
            <View style={styles.smallTextBox}>
                <Text style={[{color: "#000000"},styles.priceLabel]}>{props.price}</Text>
            </View>
            <View style={styles.contentTextBox}>
                <Text style={[{color: "#000000"}, styles.startLabel]}>{props.time}</Text>
                <Text style={[{color: "#000000"}, styles.endLabel]}>{props.station}</Text>
            </View>
            <View style={styles.iconBox}>
                <Image source={props.done ? require("../../../assets/checkmark.png") : require("../../../assets/pencil.png")} style={{width: 40, height: 40, tintColor: props.done ? "green" : "#000000"}}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    smallTextBox: {
        width: "25%",
        justifyContent: "center",
        height: 80,
    },
    contentTextBox: {
        width: "50%",
        justifyContent: "center",
        height: 80,
    },
    iconBox: {
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
    },
    priceLabel: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "500",
    },
    startLabel: {
        marginBottom: 2,
        textAlign: "left",
        fontSize: 18,
        fontWeight: "600",
    },
    endLabel: {
        fontSize: 17,
    },
    cellDefaults: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 15,
    },
});

export default TicketCell;