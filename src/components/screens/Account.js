import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Image, SafeAreaView} from "react-native";
import { AddButton } from '../container';
import { SmallTitleBar } from '../presentation/index';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const cards = [require("../../../assets/card1.png"), require("../../../assets/card2.png")]

function Account() {

  function Item({item}) {
    return (
        <Image source={item} style={{width: 233, height: 147, marginHorizontal: 15}}/>
    );
  }


    return(
        <SafeAreaView style={{flex: 1}}>
          <SmallTitleBar title="Account"/>
          <Image source={require("../../../assets/profile.png")} style={{width: 150, height: 150, alignSelf: "center"}}/>
          <Text style={{fontSize: 24, fontWeight: "600", paddingTop: 20, alignSelf:"center"}}>Elon Musk</Text>
          <Text style={{fontSize: 16, fontWeight: "600",  alignSelf:"center", paddingBottom: 20}}>136 Tickets</Text>
          <View style={{height: "22%"}}>
          <FlatList
              data={cards}
              horizontal={true}
              renderItem={({item}) => <Item item={item}/>}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={{ height: "100%" }}
          />
          </View>
          <Text style={{marginLeft:15, fontSize: 22, fontWeight: "600"}}>Autonummer</Text>
          <Image source={require("../../../assets/licenseplate.png")} style={{width: 202, height:44, alignSelf: "center", margin: 15}}/>
          <Text style={{marginLeft:15, fontSize: 22, fontWeight: "600"}}>SBB Points</Text>
          <AnimatedCircularProgress
            size={100}
            width={6}
            fill={430/10}
            style={{alignSelf: "center", marginTop: 15}}
            arcSweepAngle={180}
            rotation={270}
            dashedBackground={{width: 5, gap: 10}}
            lineCap="round"
            tintColor="#D72E1F"
            backgroundColor="#3d5875">
            {
              (fill) => (
                <Text style={{fontWeight: "700", fontSize: 24}}>
                  { 430 }
            </Text>
                )
              }
            </AnimatedCircularProgress>
            <View style={{height: "4%"}}></View>
          <AddButton/>
        </SafeAreaView>
    )
}

export default Account;