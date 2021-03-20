import React, {useState} from "react";
import {Modal,View, TextInput, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import pr from "pr-unit";

function SearchBar(props) {

    return(
        <View>
            <TouchableOpacity onPress={() => alert("de")} style={[{backgroundColor: "#FFFFFF"},styles.container, styles.searchBar]}>
                <View style={{flexDirection: "row", height: 50, alignItems: "center"}}>
                    <View style={{width: "20%", alignItems: "center"}}> 
                        <Image source={require("../../../assets/maglass.png")} style={{marginHorizontal: 10,width: "42%", height: "40%",tintColor: "#000000"}}></Image>
                    </View>
                    <View style={{width: "80%"}}>
                        <Text style={{fontSize: 14, color: "#E2E7F7"}}>Search P+Rail parking spot</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.filter} style={[{backgroundColor: "#FFFFFF", width: 50, position: "absolute", borderRadius: 15,left: "75%", bottom: 700},styles.container]}>
                <View style={{flexDirection: "row", height: 50, alignItems: "center"}}>
                    <View style={{width: "100%", alignItems: "center"}}> 
                        <Image source={require("../../../assets/filter.png")} style={{marginHorizontal: 10,width: "42%", height: "40%",tintColor: "#000000"}}></Image>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowOffset: {width: 0,height: 0},
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },
    searchBar: {
        height: 50,
        width: 240,
        position: "absolute",
        borderRadius: 15,
        bottom: 700,
        left: "15%",
    },
    content: {
        flex: 1,
        flexDirection: "row",
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

export default SearchBar;