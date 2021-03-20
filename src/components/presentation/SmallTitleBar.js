import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import config from "../../config/config";
import pr from "pr-unit";


function SmallTitleBar(props) {
    var textColor;
    if(props.isDarkMode) {
        textColor = "#FFFFFF";
    } else {
        textColor = "#000000";
    }

    return(
        <View style={styles.topBar}>
            <Text style={[{color: textColor}, styles.mainTitle]}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
      height: 72,
      width: "100%",
      paddingTop: 29,
      marginBottom: 10,
    },
    mainTitle: {
      fontSize: 70 * pr,
      fontWeight: "700",
      marginLeft: 17,
    },
  });

export default SmallTitleBar;