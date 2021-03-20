import React, {useState} from "react";
import {Modal,View, TextInput, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import pr from "pr-unit";

function AddButton(props) {

    return(
        <View>
            <TouchableOpacity onPress={() => alert("de")} style={[{backgroundColor: "#7AA42F"},styles.container]}>
                <View style={styles.icon}>
                    <Image source={require("../../../assets/add.png")} style={{width: "37%", height:"37%", tintColor: "#FFFFFF"}}></Image>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 56*2.8 * pr,
        width: 56*2.8 * pr,
        shadowOffset: {width: 0,height: 0},
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
        position: "absolute",
        bottom: 15,
        right: 15,
        borderRadius: 100,
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        // marginTop: "40%",
        width: "90%",
        // height: "80%",
        borderRadius: 15,
        shadowOffset: {width: 0,height: 0},
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    }
})

export default AddButton;