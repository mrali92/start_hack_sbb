import React, {useState, useEffect} from 'react';
import {ImageBackground, SafeAreaView} from "react-native";
import { SmallTitleBar } from '../presentation/index';


function Account({props, navigation}) {

    return(
        <SafeAreaView style={{flex: 1}}>
          <SmallTitleBar title="Account"/>
        </SafeAreaView>
    )
}

export default Account;